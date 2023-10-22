import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Company, Zip } from 'src/app/core/api/models';
import { CompaniesService } from 'src/app/core/api/services';

@Component({
  selector: 'app-show-company',
  templateUrl: './show-company.component.html',
  styleUrls: ['./show-company.component.scss'],
})
export class ShowCompanyComponent implements OnInit {
  @Input() isCreate: boolean = false;

  edit: boolean = false;
  companyForm!: FormGroup;
  company!: Company | any;
  compZips: Zip[] = [];
  availableZips: number[] = [];
  originalAvailable: number[] = [];
  selectedNewZip: boolean = false;
  newZips: Zip[] = [];
  originalZips: Zip[] = [];
  createZips: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<ShowCompanyComponent>,
    private _companiesService: CompaniesService
  ) {}

  ngOnInit(): void {
    if (!this.isCreate) {
      this.company = this.data.company;
      this.compZips = this.data.companyZips;
      this.availableZips = this.data.availableZips;

      this.companyForm = this._fb.group({
        name: [{ value: this.company.name, disabled: true }],
        newZip: [{ value: null, disabled: true }],
      });

      this.companyForm?.get('name')?.setValidators(Validators.required);
      this.companyForm?.get('newZip')?.updateValueAndValidity();

      this.originalAvailable = Object.assign([], this.availableZips);
      this.originalZips = Object.assign([], this.compZips);
    } else {
      this.companyForm = this._fb.group({
        name: ['', Validators.required],
        newZip: [{ value: null, disabled: false }],
      });

      this.availableZips = this.data.availableZips;
    }
  }

  enableEdit(): void {
    this.edit = !this.edit;

    this.disableForm();
  }

  disableForm() {
    if (this.edit) {
      this.companyForm?.enable();
      this.onSelectedZip();
    } else {
      this.companyForm?.disable();
      this.newZips = [];
      this.availableZips = this.originalAvailable;
      this.compZips = this.originalZips;
      this.selectedNewZip = false;
    }
  }

  onSelectedZip() {
    this.companyForm.get('newZip')?.value
      ? (this.selectedNewZip = true)
      : (this.selectedNewZip = false);
  }

  addNewZip() {
    let newZip: number = this.companyForm.get('newZip')?.value;

    if (!this.isCreate) {
      this.newZips.push({
        number: newZip,
        company: this.company,
        companyId: this.company.id,
      });
    } else {
      this.createZips.push(newZip);
    }

    this.deleteAvailableZip(newZip);

    this.companyForm.get('newZip')?.setValue(null);

    this.onSelectedZip();
  }

  deleteAvailableZip(n: number) {
    let index = this.availableZips.findIndex((zip) => zip == n);

    this.availableZips.splice(index, 1);
  }

  deleteZip(n: number) {
    this.compZips.splice(n, 1);
  }

  deleteNewZip(n: number) {
    this.isCreate ? this.createZips.splice(n, 1) : this.newZips.splice(n, 1);
  }

  editCompany() {
    let updateZips: Zip[] = [];
    if (this.newZips)
      this.newZips.forEach((zip) => {
        updateZips.push(zip);
      });

    if (this.compZips)
      this.compZips.forEach((zip) => {
        updateZips.push(zip);
      });

    const name = this.companyForm.get('name')?.value;

    this._companiesService
      .companiesControllerUpdate({
        body: { name: name, zips: updateZips },
        id: this.company.id,
      })
      .subscribe((res) => {
        this.dialogRef.close(true);
      });
  }

  createCompany() {
    const name = this.companyForm.get('name')?.value;

    this._companiesService.companiesControllerCreate({
      body: { name: name, zips: this.createZips },
    }).subscribe((res) => {
      this.dialogRef.close(true);
    });
  }
}
