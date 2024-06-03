import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToDo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todo : ToDo = { userId : 0, id : 0, title : "", completed : false };

  constructor(private todosService : TodosService, private router: Router) {

    var id = this.router.parseUrl(this.router.url).toString().split("/")[2];

    this.todosService.get(id).subscribe(
      (todos : ToDo) => { this.todo = todos; }
    );
  }
}
