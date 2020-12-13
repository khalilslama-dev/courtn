import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../model/course';
import { CoursesServices } from '../shared/courses-services.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[];

  constructor(private coursesService: CoursesServices,private router: Router, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe((data) => {this.courses = data});
  }

  onDelete(id: string){
    this.coursesService.deleteCourse(id).subscribe(() => {console.log('deleted id: ',id);});
    window.location.reload();
  }

  edit(id: string) : void
  {
    this.router.navigate(['editCourse/',id]);
  }
}
