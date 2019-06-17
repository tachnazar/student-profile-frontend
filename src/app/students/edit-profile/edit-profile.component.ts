import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { FormBuilder, Validators } from '@angular/forms';
import { LecturerService } from 'src/app/service/lecturer.service';
import { CourseService } from 'src/app/service/course.service';
import { Router } from '@angular/router';
import Lecturer from 'src/app/entity/lecturer';
import Course from 'src/app/entity/course';
import { StudentService } from 'src/app/service/student-service';
import Student from 'src/app/entity/student';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  profileForm = this.fb.group({
    password: [null],
    name: [null],
    surname: [null]
  });


  constructor(private fb: FormBuilder, private lecturerService: LecturerService
    , private courseService: CourseService, private router: Router, private studentService: StudentService) { }

  ngOnInit() {
  }
  onSubmit() {
    const model: Student = this.profileForm.value;
    this.studentService.saveStudent(model).subscribe(
      student => {
        this.router.navigate(['students/profile']);
      }
    );
    }
}
