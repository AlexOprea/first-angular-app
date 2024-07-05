import { Component } from '@angular/core';
import { UserComponent } from "./user/user.component"
import { HeaderComponent } from './header/header.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //decorators!!
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(userId:string){
    this.selectedUserId = userId;
  }

 
}
