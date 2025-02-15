export interface User {
    username: string;
    games: Game[];
}

export interface Game {
    id: number;
    title: string;
    rating: Rating;
    finished: boolean;
}

type Rating = 1 | 2 | 3 | 4 | 5;
