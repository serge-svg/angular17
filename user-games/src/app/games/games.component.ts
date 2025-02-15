import { Component } from '@angular/core';
import { Game } from '../models/model';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  
  games: Game[] = [
    {
        id: 1,
        title: 'Chess',
        rating: 5,
        finished: true
    },
    {
        id: 2,
        title: 'Monopoly',
        rating: 2,
        finished: false
    },
    {
        id: 3,
        title: 'Scrabble',
        rating: 1,
        finished: true
    },
    {
        id: 4,
        title: 'Risk',
        rating: 4,
        finished: false
    },
    {
        id: 5,
        title: 'Clue',
        rating: 3,
        finished: true
    }
];

}
