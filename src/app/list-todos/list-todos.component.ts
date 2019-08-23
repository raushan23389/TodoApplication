import { Component, OnInit } from '@angular/core';


export class Todo{
  constructor(public id: number,
              public description: String,
              public done: boolean,
              public targetDate: Date ){}

  
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

todos = [
  new Todo(1,'learn to dance',false,new Date()),
  new Todo(2,'learn Spring boot',true,new Date()),
  new Todo(2,'learn angular',true,new Date())
  // {id : 1, description : 'learn to dance'},
  // {id : 2, description : 'learn springboot'},
  // {id : 3, description : 'learn to Angular'},
]

  // todo = {
  //   id : 1,
  //   description : 'Learn to Dance'
  // }
  constructor() { }

  ngOnInit() {
  }

}
