export class Course {
  constructor(public title: string, public description: string, public image: string, public author: string,public date: string){
    this.title = title;
    this.description = description;
    this.image = image;
    this.author = author;
    this.date = date;
  }
}
