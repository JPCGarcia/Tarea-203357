import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Endpoints } from '../networking/endpoints';
import { URL } from '../networking/base_url';
import { ToDo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private apiUrl = `${URL.BASE_URL}${Endpoints.TODOS}`;

  constructor(private http: HttpClient) { }

  index(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.apiUrl).pipe();
  }

  get(id : string):Observable<ToDo>{
    return this.http.get<ToDo>(this.apiUrl+id).pipe();
  }
}

