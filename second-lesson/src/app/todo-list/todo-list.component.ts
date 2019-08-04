import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

}

export class GetDate {
  now : number = 123;
  title : string = "AAA"
}

// let today = new Date();
// today.getUTCHours();
