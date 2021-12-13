import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  listUsers: any[] = []

  ngOnInit(): void {
    this.afficheUsers()
  }

  afficheUsers() {
    this.userService.getUsers().subscribe((data: any) => {
      this.listUsers = data
    })
  }

}
