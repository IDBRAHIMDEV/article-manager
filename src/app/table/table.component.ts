import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  new = false
  title: string = "List of Courses"
  newCourse: any = {
    id: null,
    label: '',
    price: 0
  }
  etat: boolean = true

  listCourses = [
    {id: 1, label: "Angular", price: 120},
    {id: 2, label: "ReactJS", price: 420},
    {id: 3, label: "Laravel", price: 760},
    {id: 4, label: "Python", price: 340},
  ]
  
  constructor() { }

  changeTitle() {
    this.title = "the data is added successfully"
  }

  createCourse() {
    
    if(this.newCourse) {
      //this.listCourses.unshift(this.newCourse)
      this.newCourse.id = this.listCourses.length + 1
      console.log(this.newCourse)
      this.listCourses = [...this.listCourses, this.newCourse]
      this.newCourse = {
        id: null,
        label: "",
        price: 0
      }
    }else{
      alert('Please enter a new Course')
    }
  }


  deleteCourse(course: any) {

    if(!confirm('Are you sure to delete this course ?')) {
      return 

    }

    let index = this.listCourses.indexOf(course)
    this.listCourses.splice(index, 1)
  }

  toggleForm() {
    
    this.new = !this.new
  }




}
