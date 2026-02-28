import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Player {
  id: number;
  name: string;
  position: string;
  jersey: string;
  jerseySize: string;
  joinDate: string;
  birthDate: string;
  photo: string;
}

const DUMMY_PLAYERS: Player[] = [
  {
    id: 1,
    name: 'Juan Pérez',
    position: 'Base',
    jersey: '10',
    jerseySize: 'M',
    joinDate: '2023-01-15',
    birthDate: '1998-04-12',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: 2,
    name: 'Carlos Gómez',
    position: 'Escolta',
    jersey: '7',
    jerseySize: 'L',
    joinDate: '2022-09-10',
    birthDate: '2000-07-23',
    photo: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    id: 3,
    name: 'Mario Ruiz',
    position: 'Pívot',
    jersey: '15',
    jerseySize: 'XL',
    joinDate: '2021-05-22',
    birthDate: '1995-11-05',
    photo: 'https://randomuser.me/api/portraits/men/3.jpg'
  }
];

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css']
})
export class PlayerViewComponent {
  playerId: number | null = null;
  player: Player | undefined;

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.playerId = id ? +id : null;
    this.player = DUMMY_PLAYERS.find(p => p.id === this.playerId!);
  }
}
