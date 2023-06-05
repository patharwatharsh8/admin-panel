import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';

import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentComponent } from './document/document.component';
import { HomeComponent } from './home/home.component';

import { UnauthorisedComponent } from './unauthorised/unauthorised.component';
import { VerificationComponent } from './verification/verification.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login',component:LoginComponent},
  { path: 'signup',component:SignupComponent},
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'verify',component:VerificationComponent },
  { path: 'doc',component:DocumentComponent},
  { path: 'cust-info',component:CustomerInfoComponent},
  { path: 'accessdenied', component: UnauthorisedComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
