import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username: string = '';
  isLogged: boolean = false;

  logOut() {
    this.username = '';
    this.isLogged = false;
  }

  logIn(username: string) {
    console.log(`login>username: ${username}`)
    this.username = username;
    this.isLogged = true;
  }

}

