import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './component/home/home.component';
import { SigninComponent } from './component/signin/signin.component';
import {EmpLoginComponent } from './component/emp-login/emp-login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { UpdateComponent } from './component/update/update.component';
import { ViewdeteilComponent } from './component/viewdeteil/viewdeteil.component';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    EmpLoginComponent,
    DashboardComponent,
    UpdateComponent,
    DialogComponent,
    ViewdeteilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,MatInputModule,MatCheckboxModule,MatDialogModule,
    ReactiveFormsModule,MatToolbarModule,MatIconModule,MatButtonModule,
    MatSelectModule,FormsModule,HttpClientModule,MatTableModule,MatPaginatorModule,
    MatSortModule,MatSnackBarModule,MatExpansionModule,FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
