import { Injectable } from '@angular/core';
import { CourseService } from './course.service';
import { HttpClient } from '@angular/common/http';
import Course from '../entity/course';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseServerService extends CourseService {

  constructor(private http: HttpClient) {
    super();
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(environment.courseApi);
  }
  getCourse(id: number): Observable<Course> { return null; }

  save(course: Course): Observable<Course> {
    return this.http.post<Course>(environment.courseApi, course);
  }
  getCourseWhoseStudentNameIs(studentName: String): Observable<Course[]> {
    return this.http.post<Course[]>(environment.courseApi, studentName);
  }
}
