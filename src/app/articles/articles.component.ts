import { Component, OnInit } from '@angular/core';
import { ActicleService } from '../acticle.service'
import Swal from 'sweetalert2';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  edit = false
  mode = 1
  oneArticle = {
    id: 0,
    title: '',
    content: '',
    author: '',
    image: ''
  }
  listOfArticles: any[] = []
  constructor(private articleService: ActicleService) { }

  ngOnInit(): void {
    this.retreiveAll()
  }

  retreiveAll() {
    this.articleService.getArticles().subscribe((data: any) => {
      this.listOfArticles = data
    })
  }

  addArticle(data: any) {
    

    if(data.invalid) {
      alert('please check the data on the form !')
      return
    }

    
    this.articleService.createOneArticle(data.value)
        .subscribe(data => {
          this.listOfArticles.push(data)
          
          
        })
  }

  destroyArticle(id: number) {

    Swal.fire({
      title: 'Delete the article ?',
      text: `Are you sure to delete this article n ${id}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.articleService.deleteOneArticle(id)
        .subscribe((data: any) => {
          this.listOfArticles = this.listOfArticles.filter(article => article.id !== id)
        })

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }


  editArticle(data: any) {
    this.oneArticle = data
    this.edit = true
  }


  updateArticle() {
    
    let id = this.oneArticle.id
    let data = {
      title: this.oneArticle.title,
      content: this.oneArticle.content,
      author: this.oneArticle.author
    }
    this.articleService.updateArticle(id, data)
        .subscribe(data => {
          this.oneArticle = {
            id: 0,
            title: '',
            content: '',
            image: '',
            author: ''
          }
          this.edit = false
        })
  }

  layout(val: number) {
    this.mode = val
  }


  log(title: any) {
    console.log(title)
  }

}
