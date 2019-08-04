import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'TODO list';

  newText = '';
  newErr = 'must include text';

  todosArray = [];

  addNew() {

    const newItem = {
      id : 0,
      status : false,
      text : this.newText,
      error : this.newErr
    };

    if (this.newText.length > 0) {
      this.todosArray.unshift(newItem);
    }
  }

  delItem(text){

    const index = this.todosArray
      .findIndex((el) => el.text === text);

    this.todosArray.splice(index, 1);
    // console.log(text)
  }

  show() {
    console.log(this.todosArray);
  }

  getData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => todos.map((td) => {
        return {
          id: td.id,
          status: td.completed,
          text: td.title,
          title: td.reqtitle ? td.reqtitle : `Untitled ${td.id}`
        }
      }))
      .then(todos => {
        todos.length = 10;
        return todos;
      })
      .then(todos => {
        this.todosArray = todos;
      });
  }


  ngOnInit() {
    this.getData();
  }
}


