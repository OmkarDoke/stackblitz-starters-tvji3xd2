import {
  Component,
  Input,
  EventEmitter,
  Output,
  //  computed, signal
} from '@angular/core';
import { DUMMY_USERS } from './Dummy-Users';
import { type UserType } from './user.model';
import { AppCard } from '../shared/card/card';

const index = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [AppCard],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // selectedUser = DUMMY_USERS[index];
  // // get imagePath() {
  // //   return 'src/asset/' + this.selectedUser.avatar;
  // // }
  // onUserClicked() {
  //   // const index = Math.floor(Math.random() * DUMMY_USERS.length);
  //   // this.selectedUser = DUMMY_USERS[index];
  // }

  // signal approch
  // selectedUser = signal(DUMMY_USERS[index]);

  // imagePath = computed(() => {
  //   'src/assets' + this.selectedUser().avatar;
  // });

  // onUserClicked() {
  //   const index = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[index]);
  // }

  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) id!: string;

  @Input({ required: true }) User!: UserType;
  @Input({ required: true }) Selected!: boolean;
  @Output() select = new EventEmitter();
  get imagePath() {
    return 'src/asset/' + this.User.avatar;
  }
  onUserClicked() {
    this.select.emit(this.User.id);
  }
}
