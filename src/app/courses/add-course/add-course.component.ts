import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { CoursesServices } from 'src/app/shared/courses-services.service';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course: Course;
  submitted = false;
  url : string;
  constructor(private coursesService: CoursesServices,private currentRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.course = <Course>form.value;
    this.course.image="angular.png";
    this.coursesService.addCourse(this.course).subscribe(
      () => { this.router.navigate(['']);}
    );
    console.log(this.course);
    this.submitted = true;
  }
}
