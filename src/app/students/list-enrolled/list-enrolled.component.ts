import { Component, OnInit, ViewChild } from '@angular/core';
import Student from 'src/app/entity/student';
import { StudentService } from 'src/app/service/student-service';
import { CourseService } from 'src/app/service/course.service';
import { MatPaginator, MatSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { CourseTableDataSource } from './course-table-datasource';
import Course from 'src/app/entity/course';

@Component({
  selector: 'app-list-enrolled',
  templateUrl: './list-enrolled.component.html',
  styleUrls: ['./list-enrolled.component.css']
})
export class ListEnrolledComponent implements OnInit {
  currentUser: Student;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: CourseTableDataSource;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'Course Id', 'Course Name', 'Content', 'Lecturer'];
  courses: Course[];
  filter: string;
  filter$: BehaviorSubject<string>;
  loading: boolean;
  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.loading = true;
    this.courseService.getCourses()
      .subscribe(courses => {
        this.dataSource = new CourseTableDataSource(this.paginator, this.sort);
        this.dataSource.data = courses;
        this.courses = courses;
        this.filter$ = new BehaviorSubject<string>('');
        this.dataSource.filter$ = this.filter$;
        setTimeout(() => {
          this.loading = false;
        }, 1000);

      });
  }

  constructor(private studentService: StudentService, private courseService: CourseService) {
  }
  applyFilter(filterValue: string) {
    this.filter$.next(filterValue.trim().toLowerCase());
  }
  // averageGpa() {
  //   let sum = 0;
  //   if (Array.isArray(this.students)) {
  //     for (const student of this.students) {
  //       sum += student.gpa;
  //     }
  //     return sum / this.students.length;
  //   } else {
  //     return null;
  //   }

  // }

  upQuantity(student: Student) {
    student.penAmount++;
  }

  downQuantity(student: Student) {
    if (student.penAmount > 0) {
      student.penAmount--;
    }
  }
}
