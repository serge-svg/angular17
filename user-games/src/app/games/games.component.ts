import { Component } from '@angular/core';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  games: Game[] = [
    { id: 1, title: 'Tetris' }, 
    { id: 2, title: 'Snake' },
    { id: 3, title: 'Bubble' }
  ]
}
