export class Course {
  constructor(public id: string,public title: string, public description: string, public image: string, public author: string,public date: string){
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.author = author;
    this.date = date;
  }
}
