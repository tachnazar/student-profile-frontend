import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Course from '../entity/course';


export abstract class CourseService {
  abstract getCourses(): Observable<Course[]>;
  abstract getCourse(id: number): Observable<Course>;
  abstract save(course: Course): Observable<Course>;
  // abstract getCourseWhoseStudentNameIs(studentName: String): Observable<Course[]>;
}
