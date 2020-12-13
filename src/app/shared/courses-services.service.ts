import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../model/course';


@Injectable({
  providedIn: 'root'
})

export class CoursesServices {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  coursesUrl: string = "/api/courses";

  getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(this.coursesUrl);
  }

  getCourseById(id: string): Observable<Course>{
    return this.http.get<Course>(this.coursesUrl+'/'+id);
  }

  addCourse (course: Course): Observable<Course> {
    return this.http.post<Course>(this.coursesUrl, course);
  }
  updateCourse(id:string, newCourse:Course): Observable<Course>{
    return this.http.put<Course>(this.coursesUrl+'/'+ id, newCourse);
  }
  deleteCourse(id: string) {
    return this.http.delete<Course>(this.coursesUrl+'/'+id);
  }
}
