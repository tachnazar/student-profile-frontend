import { Routes, RouterModule } from '@angular/router';
import { StudentsViewComponent } from './view/students.view.component';
import { StudentsAddComponent } from './add/students.add.component';
import { StudentsComponent } from './list/students.component';
import { NgModule } from '@angular/core';
import { StudentTableComponent } from './student-table/student-table.component';
import { StudentGuard } from '../guards/student.guard';
import { LecturerGuard } from '../guards/lecturer.guard';

const StudentRoutes: Routes = [
    { path: 'add', component: StudentsAddComponent, canActivate: [StudentGuard, LecturerGuard] },
    { path: 'list', component: StudentTableComponent, canActivate: [StudentGuard, LecturerGuard] },
    { path: 'detail/:id', component: StudentsViewComponent, canActivate: [StudentGuard, LecturerGuard]  },
    { path: 'table', component: StudentTableComponent, canActivate: [StudentGuard, LecturerGuard]  }
];
@NgModule({
    imports: [
        RouterModule.forRoot(StudentRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class StudentRoutingModule {

}
