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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { ArticlesComponent } from './articles/articles.component'
import { LayoutComponent } from './layout/layout.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const appRoutes = [
  { path: 'home', component: LayoutComponent },
  { path: 'articles', component: ArticlesComponent },
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
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
