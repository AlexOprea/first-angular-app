import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { DUMMY_USERS} from '../dummy-users';
import {User} from './user.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

// type User = {
//   id: string;
//   name:string;
//   avatar:string;
// }



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Output() select = new EventEmitter<string>() //emits custom events;
  @Input() selected!: boolean;

  constructor() { }

  ngOnInit() {
  }

  get imagePath() {
    return 'assets/users/'+ this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }

}
