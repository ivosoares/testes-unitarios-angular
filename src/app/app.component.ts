import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testes-unitarios-angular';
  users: Array<User> = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }

  getUsers() {
    this.userService.getUsers().subscribe((response: User[]) => {
      this.users = response;
    })
  }
}
