import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    FormsModule,
    CheckboxModule
  ]
})
export class HomeModule { }
