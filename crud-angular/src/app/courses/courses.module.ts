import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { DialogComponent } from '../shared/dialog/dialog.component';

@NgModule({
  declarations: [
    CoursesComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule
  ]
})
export class CoursesModule { }
