import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { CourseDataSource } from './list-datasource';
import { CourseService } from 'src/app/service/course.service';
import { BehaviorSubject } from 'rxjs';
import { CourseTableDataSource } from 'src/app/students/list-enrolled/course-table-datasource';
import Course from 'src/app/entity/course';


@Component({
  selector: 'app-course-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class CourseListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: CourseTableDataSource;

  displayedColumns = ['id', 'Course Name', 'Content', 'Lecturer'];
  courses: Course[];
  filter: string;
  filter$: BehaviorSubject<string>;
  loading: boolean;
  constructor(private courseService: CourseService) { }
  ngOnInit() {
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
  applyFilter(filterValue: string) {
    this.filter$.next(filterValue.trim().toLowerCase());
  }
}
