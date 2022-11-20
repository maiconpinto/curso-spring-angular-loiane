import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { CategoryPipe } from '../shared/pipes/category.pipe';

@NgModule({
  declarations: [
    CoursesComponent,
    DialogComponent,
    CategoryPipe
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule
  ]
})
export class CoursesModule { }
