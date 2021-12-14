import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthorService } from './../author.service';
import { ActicleService } from '../acticle.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  articleForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern('[a-zA-Z0-9 ]*')]),
    content: new FormControl('', Validators.required),
    author: new FormControl(null)
  })

  get form(){
    return this.articleForm.controls;
  }

  constructor(
    private route: ActivatedRoute, 
    private acticleService: ActicleService,
    private authorService: AuthorService) 
    { 


    }

  listAuthors: any[] = []

  myArticle = {
    title: '',
    content: '',
    author: {
      id: 0,
      name: ''
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((data: Params) => {
      let { id } = data.params

      this.authorService.getAuthors().subscribe((authors: any) => this.listAuthors = authors)

      this.retreiveOneArticle(id)
    })


  }

  retreiveOneArticle(id: number) {
    this.acticleService.getOneArticle(id).subscribe((data: any) => {
      this.articleForm.patchValue(data)
    })
  }

  updateArticle() {
    console.log(this.articleForm)
  }

}
