import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { User } from './user/user';
import { AppTasks } from './app-tasks/app-tasks';
import { DUMMY_USERS } from './user/Dummy-Users';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // standalone:true,
  // imports: [HeaderComponent, User, AppTasks, NgFor, NgIf],
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string; //? means it can be undefined like in js

  get selectedUserData() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
