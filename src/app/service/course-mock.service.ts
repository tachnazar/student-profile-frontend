import { Injectable } from '@angular/core';
import { CourseService } from './course.service';
import Course from '../entity/course';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseMockService extends CourseService {
  constructor(private http: HttpClient) {
    super();
  }
  getCourses(): Observable<Course[]> { return this.http.get<Course[]>('assets/course.json'); }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course[]>('assets/course.json')
      .pipe(map(courses => {
        const output: Course = (courses as Course[]).find(course => course.id === +id);
        return output;
      }));
  }

  save(course: Course): Observable<Course> {
    return null;
  }
}
