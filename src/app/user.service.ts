import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlApi = 'https://api.github.com/users'

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.urlApi)
  }

  getOneUser(login: string) {
    return this.http.get(`${this.urlApi}/${login}`)
  }
}
