import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService: UserService, private router: ActivatedRoute) { }

  user: any = {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((data: Params) => {
      
      let { login } = data.params
      
      this.userService.getOneUser(login).subscribe(user => this.user = user)
    })
  }



}
