import { Component, OnInit } from '@angular/core';
import { CompaniesService, ZipService } from '../core/api/services';
import { Company, Zip } from '../core/api/models';
import { MatDialog } from '@angular/material/dialog';
import { ShowCompanyComponent } from './show-company/show-company.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { ConfirmationComponent } from '../shared/components/confirmation/confirmation.component';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];

  constructor(
    private companiesService: CompaniesService,
    public matDialog: MatDialog,
    private zipService: ZipService
  ) {}

  ngOnInit(): void {
    this.companiesService.companiesControllerFindAll().subscribe({
      next: (res) => {
        this.companies = res;
        console.log(this.companies);
      },
    });
  }

  deleteCompany(company: Company | any) {
    this.matDialog
      .open(ConfirmationComponent, {
        data: {
          title: 'Delete ' + company.name,
          desc: 'Are you sure you want to delete the company?',
        },
        enterAnimationDuration: '300',
        exitAnimationDuration: '300',
        autoFocus: false,
        disableClose: true,
      })
      .afterClosed()
      .subscribe((confirm: boolean) => {
        console.log(confirm);
        if (confirm)
          this.companiesService
            .companiesControllerRemove({ id: company.id })
            .subscribe((res) => this.ngOnInit());
      });
  }

  openCompanyDetails(company: Company | any) {
    let companyZips: Zip[] = [];
    let availableZips: number[] = [];
    1;
    this.zipService.zipControllerGetAvailableZips().subscribe({
      next: (res) => {
        availableZips = res;
        this.zipService
          .zipControllerGetCompanyZips({ id: company.id })
          .subscribe({
            next: (res) => {
              companyZips = res;

              const dialog = this.matDialog.open(ShowCompanyComponent, {
                data: {
                  company,
                  companyZips,
                  availableZips,
                },
                enterAnimationDuration: '300',
                exitAnimationDuration: '300',
                autoFocus: false,
                disableClose: true,
              });

              dialog.afterClosed().subscribe((updated: boolean) => {
                if (updated) this.ngOnInit();
              });
            },
          });
      },
    });
  }

  openCompanyCreate() {
    this.zipService.zipControllerGetAvailableZips().subscribe({
      next: (res) => {
        const dialog = this.matDialog.open(CreateCompanyComponent, {
          data: {
            availableZips: res,
          },
          enterAnimationDuration: '300',
          exitAnimationDuration: '300',
          autoFocus: false,
          disableClose: true,
        });

        dialog.afterClosed().subscribe((created: boolean) => this.ngOnInit());
      },
    });
  }
}
