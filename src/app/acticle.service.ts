import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActicleService {
 
  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get("http://localhost:3000/articles")
  }

  createOneArticle(data: any) {
    return this.http.post("http://localhost:3000/articles", data)
  }

  deleteOneArticle(id: number) {
    return this.http.delete(`http://localhost:3000/articles/${id}`)
  }

  updateArticle(id: number, data: any) {
    return this.http.put(`http://localhost:3000/articles/${id}`, data)
  }

  getOneArticle(id: number) {
    return this.http.get(`http://localhost:3000/articles/${id}`)
  }
}
