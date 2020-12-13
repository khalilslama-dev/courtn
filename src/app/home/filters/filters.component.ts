import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  AuthorName : string;
  @Output() CourseName = new EventEmitter<string>();
  @Output() filterName = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onNameClicked(name: string)
  {
    this.CourseName.emit(name);
  }

  onSearchClicked()
  {
    console.log(this.AuthorName);
    this.filterName.emit(this.AuthorName);
  }


}
