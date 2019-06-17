import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { StudentTableDataSource } from './student-table-datasource';
import { StudentService } from '../../service/student-service';
import Student from '../../entity/student';
import { Observable, of as observableOf, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-students-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: StudentTableDataSource;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'studentId', 'name', 'surname', 'image', 'penAmount', 'gpa'];
  students: Student[];
  filter: string;
  filter$: BehaviorSubject<string>;
  loading: boolean;
  constructor(private studentService: StudentService) { }
  ngOnInit() {
    this.loading = true;
    this.studentService.getStudents()
      .subscribe(students => {
        this.dataSource = new StudentTableDataSource(this.paginator, this.sort);
        this.dataSource.data = students;
        this.students = students;
        this.filter$ = new BehaviorSubject<string>('');
        this.dataSource.filter$ = this.filter$;
        setTimeout(() => {
          this.loading = false;
        }, 1000);

      }
      );
  }
  applyFilter(filterValue: string) {
    this.filter$.next(filterValue.trim().toLowerCase());
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
