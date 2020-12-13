import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courtn';

  constructor(private router: Router){}

  searchByAuthor(author: string): void{
    this.router.navigate(['/courses',author]);
  }
}
