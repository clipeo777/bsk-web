import { Component } from '@angular/core';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent {
  displayConfirmDialog: boolean = false;
  playerToDelete: string | null = null;

  constructor() {}

  showDeleteDialog(playerName: string) {
    this.playerToDelete = playerName;
    this.displayConfirmDialog = true;
  }

  confirmDelete(playerName: string) {
    const confirmed = window.confirm(`¿Está seguro que desea eliminar al jugador ${playerName}?`);
    if (confirmed) {
      // Aquí iría la lógica para eliminar el jugador
      alert('Jugador eliminado (dummy)');
    }
  }

  cancelDelete() {
    this.displayConfirmDialog = false;
    this.playerToDelete = null;
  }

}
