import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileNotFoundComponent } from './shared/file-not-found/file-not-found.component';
import { CourseListComponent } from './course/list/list.component';
import { CourseAddComponent } from './course/add/add.component';
import { LoginComponent } from './login/login.component';
import { StudentGuard } from './guards/student.guard';
import { LecturerGuard } from './guards/lecturer.guard';
import { ListEnrolledComponent } from './students/list-enrolled/list-enrolled.component';
import { AdminGuard } from './guards/admin.guard';
import { ProfileComponent } from './students/profile/profile.component';
import { EditProfileComponent } from './students/edit-profile/edit-profile.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path: 'course/list',
    component: CourseListComponent,
    canActivate: [StudentGuard]
  },
  {
    path: 'students/listEnrolled',
    component: ListEnrolledComponent,
    canActivate: [StudentGuard]
  },
  {
    path: 'course/add',
    component: CourseAddComponent,
    canActivate: [StudentGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'students/profile',
    component: ProfileComponent,
    canActivate: [StudentGuard]
  },
  {
    path: 'students/profile/editProfile',
    component: EditProfileComponent,
    canActivate: [StudentGuard]
  },
  { path: '**', component: FileNotFoundComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
