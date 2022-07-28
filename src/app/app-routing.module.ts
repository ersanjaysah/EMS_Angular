import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EmpLoginComponent } from './component/emp-login/emp-login.component';
import { HomeComponent } from './component/home/home.component';

import { SigninComponent } from './component/signin/signin.component';
import { UpdateComponent } from './component/update/update.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:"/home",pathMatch:'full'},
  {path:'signin',component:SigninComponent},
  {path:'emplogin',component:EmpLoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'update',component:UpdateComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
