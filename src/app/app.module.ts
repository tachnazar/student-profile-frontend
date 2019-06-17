import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentService } from './service/student-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StudentsComponent } from './students/list/students.component';
import { StudentsAddComponent } from './students/add/students.add.component';
import { StudentsViewComponent } from './students/view/students.view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule
  , MatIconModule, MatListModule, MatGridListModule, MatCardModule
  , MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule
} from '@angular/material';
import { MatInputModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { FileNotFoundComponent } from './shared/file-not-found/file-not-found.component';
import { StudentRoutingModule } from './students/student-routing.module';
import { StudentTableComponent } from './students/student-table/student-table.component';
import { StudentsRestImplService } from './service/students-rest-impl.service';
import { MatProgressSpinnerModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { CourseListComponent } from './course/list/list.component';
import { InfoComponent } from './course/info/info.component';
import { CourseService } from './service/course.service';
import { CourseMockService } from './service/course-mock.service';
import { CourseAddComponent } from './course/add/add.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { CourseServerService } from './service/course-server.service';
import { LecturerServerService } from './service/lecturer-server.service';
import { LecturerService } from './service/lecturer.service';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './helpers/jwt-interceptor.service';
import { ListEnrolledComponent } from './students/list-enrolled/list-enrolled.component';
import { AdminService } from './service/admin.service';
import { AdminServerService } from './service/admin-server.service';
import { ProfileComponent } from './students/profile/profile.component';
import { EditProfileComponent } from './students/edit-profile/edit-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentsAddComponent,
    StudentsViewComponent,
    MyNavComponent,
    FileNotFoundComponent,
    StudentTableComponent,
    CourseListComponent,
    InfoComponent,
    CourseAddComponent,
    LoginComponent,
    ListEnrolledComponent,
    ProfileComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatProgressSpinnerModule,
    StudentRoutingModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule,
    MatFileUploadModule
  ],
  providers: [
    { provide: StudentService, useClass: StudentsRestImplService },
    { provide: CourseService, useClass: CourseServerService },
    { provide: LecturerService, useClass: LecturerServerService },
    { provide: AdminService, useClass: AdminServerService },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
