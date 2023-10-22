import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {
  CreateShipmentDto,
  GetPackageTypeDto,
  Zip,
} from 'src/app/core/api/models';
import { PackagesTypesService, ShipmentsService, ZipService } from 'src/app/core/api/services';

@Component({
  selector: 'app-create-shipment',
  templateUrl: './create-shipment.component.html',
  styleUrls: ['./create-shipment.component.scss'],
})
export class CreateShipmentComponent implements OnInit {
  shipmentForm!: FormGroup;
  parsedZip: number = 0;
  price: number = 0;
  zips: Zip[] = [];
  types: GetPackageTypeDto[] = [];
  typeID: number = 0;

  constructor(
    private _fb: FormBuilder,
    private _zipService: ZipService,
    private typesService: PackagesTypesService,
    private shipmentService : ShipmentsService,
    private dialogRef: MatDialogRef<CreateShipmentComponent>
  ) {}

  ngOnInit(): void {
    this.getTypes();
    this.getZips();

    this.shipmentForm = this._fb.group({
      address: ['', Validators.required],
      zip: [
        null,
        [
          Validators.required,
          this.maxLengthValidator(5),
          this.minLengthValidator(4),
          this.positiveNumberValidator
        ],
      ],
      sender: ['', Validators.required],
      recipient: ['', Validators.required],
      weight: [null, [Validators.required, this.positiveNumberValidator]],
    });

    this.shipmentForm.controls['zip'].valueChanges.subscribe(
      (newValue: number) => {
        if (this.shipmentForm.controls['zip'].valid) {
          this.parsedZip = this.parseZip(newValue);
        } else this.parsedZip = 0;
      }
    );

    this.shipmentForm.controls['weight'].valueChanges.subscribe(
      (newWeight: number) => {
        this.price = this.getPrice(newWeight);
      }
    );
  }

  parseZip(numero: number): number {
    const stringN = numero.toString();

    let firstChars: string = '';

    if (stringN.length == 4) {
      firstChars = stringN.slice(0, 1);
    } else if (stringN.length == 5) firstChars = stringN.slice(0, 2);

    const result = parseInt(firstChars, 10);

    return result;
  }

  getPrice(weight: number) {
    const index = this.types.findIndex((type) =>
      parseFloat(type.min ? type.min : '0') < weight && type.max
        ? parseFloat(type.max) >= weight
        : true
    );

    this.typeID = index + 1;

    const formula: any = this.types[index]?.formula;

    let x = weight;

    var result = eval(formula);

    return result;
  }

  maxLengthValidator(maxLength: number) {
    return (control: any) => {
      if (control.value && control.value.toString().length > maxLength) {
        return { maxLengthExceeded: true };
      }
      return null;
    };
  }
  minLengthValidator(minLength: number) {
    return (control: any) => {
      if (control.value && control.value.toString().length < minLength) {
        return { minLengthNotMet: true };
      }
      return null;
    };
  }

  positiveNumberValidator(control : any) {
    const value = control.value;
    if (value === null || value === undefined || value >= 0) {
      return null; 
    } else {
      return { positiveNumber: true }; 
    }
  }

  getZips() {
    this._zipService.zipControllerFindAll().subscribe({
      next: (res) => {
        this.zips = res;
      },
    });
  }

  getTypes() {
    this.typesService.packageTypesControllerFindAll().subscribe({
      next: (res) => {
        this.types = res;
      },
    });
  }

  createShipment() {
    const companyId: number = this.getComanyByZip(this.parsedZip);

    const { address, sender, recipient, weight } = this.shipmentForm.value;

    const newShipment: CreateShipmentDto = {
      address,
      zip: this.parsedZip,
      sender,
      recipient,
      weight,
      companyId,
      price: this.price,
      typeId: this.typeID,
    };


    this.shipmentService.shipmentsControllerCreateShipment({body: newShipment}).subscribe((res)=> this.dialogRef.close(true))
  }

  getComanyByZip(parsedZip: number) {
    const index = this.zips.findIndex((zip) => zip.number === parsedZip);

    if (index > -1) return this.zips[index].companyId;
    return 1
  }
}
