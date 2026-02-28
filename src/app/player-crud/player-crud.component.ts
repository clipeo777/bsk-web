import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-player-crud',
  templateUrl: './player-crud.component.html',
  styleUrls: ['./player-crud.component.css']
})
export class PlayerCrudComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
