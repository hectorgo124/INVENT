import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './core/auth/guards/auth.guard';
import { NoAuthGuard } from './core/auth/guards/no-auth.guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { PackagesTypesComponent } from './packages-types/packages-types.component';
import { AdminsComponent } from './admins/admins.component';
import { CompaniesComponent } from './companies/companies.component';
const routes: Routes = [
  {
    path: 'sign-in',
    canMatch: [NoAuthGuard],
    loadChildren: () =>
      import('./sign-in/sign-in.module').then((m) => m.SignInModule),
    component: SignInComponent,
  },

  {
    path: '',
    canMatch: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
        component: HomeComponent,
      },
      {
        path: 'shipments',
        loadChildren: () =>
          import('./shipments/shipments.module').then((m) => m.ShipmentsModule),
        component: ShipmentsComponent,
      },
      {
        path: 'packages-types',
        loadChildren: () =>
          import('./packages-types/packages-types.module').then((m) => m.PackagesTypesModule),
        component: PackagesTypesComponent,
      },
      {
        path: 'companies',
        loadChildren: () =>
          import('./companies/companies.module').then((m) => m.CompaniesModule),
        component: CompaniesComponent,
      },
      {
        path: 'admins',
        loadChildren: () =>
          import('./admins/admins.module').then((m) => m.AdminsModule),
        component: AdminsComponent,
      },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
