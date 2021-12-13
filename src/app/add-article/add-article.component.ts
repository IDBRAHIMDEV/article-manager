import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActicleService } from '../acticle.service'

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  constructor(private articleService: ActicleService, private router: Router) { }
  oneArticle = {
    id: 0,
    title: '',
    content: '',
    author: '',
    image: ''
  }
  edit: boolean = false

  ngOnInit(): void {
  }


  
  addArticle(data: any) {
    

    if(data.invalid) {
      alert('please check the data on the form !')
      return
    }

    
    this.articleService.createOneArticle(data.value)
        .subscribe(data => {
          this.router.navigate(['/articles'])
        })
  }



  editArticle(data: any) {
    this.edit = true
  }


  updateArticle() {
     
  }

 

}
