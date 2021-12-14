import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { IntroComponent } from './intro/intro.component';
import { TableComponent } from './table/table.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { ArticlesComponent } from './articles/articles.component'
import { LayoutComponent } from './layout/layout.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { CardComponent } from './card/card.component';

const appRoutes = [
  { path: 'home', component: LayoutComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/add', component: AddArticleComponent },
  { path: 'articles/:id', component: EditArticleComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:login', component: UserDetailsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    IntroComponent,
    TableComponent,
    FooterComponent,
    LayoutComponent,
    ArticlesComponent,
    UsersComponent,
    UserDetailsComponent,
    AddArticleComponent,
    EditArticleComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
