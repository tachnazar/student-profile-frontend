import { Component, OnInit } from '@angular/core';
import Student from '../../entity/student';
import { StudentService } from '../../service/student-service';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[];

  constructor(private studentService: StudentService) { }
  ngOnInit() {
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
  }
  averageGpa() {
    let sum = 0;
    if (Array.isArray(this.students)) {
      for (const student of this.students) {
        sum += student.gpa;
      }
      return sum / this.students.length;
    } else {
      return null;
    }

  }

  upQuantity(student: Student) {
    student.penAmount++;
  }

  downQuantity(student: Student) {
    if (student.penAmount > 0) {
      student.penAmount--;
    }
  }

}
