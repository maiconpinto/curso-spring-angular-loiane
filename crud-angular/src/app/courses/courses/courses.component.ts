import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { DialogModel } from 'src/app/shared/dialog/dialog.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses$: Observable<Course[]>;

  displayedColumns = ['name', 'category'];

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog) {
    this.courses$ = this.coursesService.list().pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    const dialogModel: DialogModel = {
      title: 'Erro no sistema',
      content: errorMsg
    };

    this.dialog.open(DialogComponent, {
      data: dialogModel
    });
  }
}
