import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { ToDo } from '../../models/todo';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {

  todos : ToDo[] = [];
  search : string = "";
  notification : string = "";

  constructor(private todosService: TodosService) {
    this.notification = "";
    this.search = "";
  }

  _search() {
    this.todosService.index().subscribe(
      (todos : ToDo[]) => {
        var todosAux = todos.filter( td => td.title.includes(this.search));
        if (todosAux.length == 0){
          this.notification = "No hay todo's para mostrar con ese título.";
          this.todos = [];
        }else{
          this.notification = "";
          this.todos = todosAux;
        }
      },
      (error : any) => {this.notification = error.error.message;});
  }
}
