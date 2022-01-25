import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerResponse } from './classes/server-response.class';
import { Todo } from './models/todo';

//const baseUrl = 'http://localhost:8080/todoApi';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  

  getAllTodos(): Observable<ServerResponse<Todo[]>> {
    return this.http.get<ServerResponse<Todo[]>>('http://localhost:3000/todoApi/list');
  }

  createTodo(todo: Todo): Observable<ServerResponse<Todo>> {
    return this.http.post<ServerResponse<Todo>>('http://localhost:3000/todoApi/create', todo);

  }

  deleteTodo(todoId: string) {
    return this.http.delete<ServerResponse<null>>(`http://localhost:3000/todoApi/deleteby/${todoId}`);
  }

  editTodo(updateTodo: Todo,todoId) {
    return this.http.put<ServerResponse<Todo>>(
      `http://localhost:3000/todoApi/editby/${todoId}`,
      updateTodo
    );
  }

}
