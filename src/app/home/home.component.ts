import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesServices } from '../shared/courses-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses: Course[];
  loadCoursesIsClicked : boolean = false;
  constructor(private coursesService: CoursesServices) { }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe((data) => {this.courses = data.slice(0,3)});
  }

  loadAllCourses(): void {
    this.loadCoursesIsClicked = !this.loadCoursesIsClicked;
  }
}
