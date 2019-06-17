import { Component, OnInit } from '@angular/core';
import Student from '../../entity/student';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { StudentService } from '../../service/student-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-students-view',
  templateUrl: './students.view.component.html',
  styleUrls: ['./students.view.component.css']
})
export class StudentsViewComponent implements OnInit {
  student: Student;
  constructor(private route: ActivatedRoute, private studentService: StudentService) { }
  ngOnInit() {
    this.student = {
      'id': 2,
      'studentId': '',
      'name': '',
      'surname': '',
      'gpa': 0,
      'image': '',
      'featured': false,
      'penAmount': 0
    };
    this.route.params
    .subscribe((params: Params) => {
      this.studentService.getStudent(+params['id'])
        .subscribe((inputStudent: Student) => this.student = inputStudent);
    });
  }
}
