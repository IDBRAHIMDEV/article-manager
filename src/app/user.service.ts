import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://api.github.com/users')
  }

  getOneUser(login: string) {
    return this.http.get(`https://api.github.com/users/${login}`)
  }
}
