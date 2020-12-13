import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { CoursesServices } from 'src/app/shared/courses-services.service';

@Component({
  selector: 'app-edit-courses',
  templateUrl: './edit-courses.component.html',
  styleUrls: ['./edit-courses.component.css']
})
export class EditCoursesComponent implements OnInit {
  CourseEditForm: FormGroup;
  course: Course;
  constructor(private cService: CoursesServices, private currentRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.cService.getCourseById(id).subscribe(
      (data) => {
        this.CourseEditForm = new FormGroup({
          id: new FormControl(data.id),
          title: new FormControl(data.title,Validators.required),
          author: new FormControl(data.author,Validators.required),
          description: new FormControl(data.description,Validators.required),
          date: new FormControl(data.date,Validators.required),
        });
        console.log(this.CourseEditForm);
      }
      );

  }

  onSubmit(){
    console.log(this.CourseEditForm.value);
    this.course = this.CourseEditForm.value;
    this.course.image = "angular.png";
    this.cService.updateCourse(this.course.id,this.course).subscribe();
    this.router.navigate(['']);
  }



}
