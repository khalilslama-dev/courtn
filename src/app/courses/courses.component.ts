import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';
import { CoursesServices } from '../shared/courses-services.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[];

  constructor(private coursesService: CoursesServices) { }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe((data) => {this.courses = data});
  }

}
