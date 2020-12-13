import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { HomeComponent } from './home/home.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { EditCoursesComponent } from './courses/edit-courses/edit-courses.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addCourse',
    component: AddCourseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'editCourse/:id',
    component: EditCoursesComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'courses/:author',
    component: CoursesComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
