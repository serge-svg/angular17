import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
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
    this.username = username;
    this.isLogged = true;
  }

}

