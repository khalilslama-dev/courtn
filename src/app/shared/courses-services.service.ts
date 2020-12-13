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

  addCourse (course: Course): Observable<Course> {
    return this.http.post<Course>(this.coursesUrl, course);}
}
