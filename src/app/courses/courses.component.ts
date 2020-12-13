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
    if(this.currentRoute.snapshot.paramMap.get('author'))
    {
      let author = this.currentRoute.snapshot.paramMap.get('author');
      console.log(author);
      this.coursesService.getCourseByAuthorName(author).subscribe((data) => { this.courses = data });
    }
    if(this.currentRoute.snapshot.paramMap.get('name'))
    {
      let name = this.currentRoute.snapshot.paramMap.get('name');
      this.coursesService.getCourseByAuthorName(name).subscribe((data) => { this.courses = data; console.log(data); });
      console.log(this.courses);
    }
    else
    {
      this.coursesService.getCourses().subscribe((data) => {this.courses = data});
    }
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
