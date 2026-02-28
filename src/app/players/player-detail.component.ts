import { Component, OnInit } from '@angular/core';
import { ExcelService } from './excel.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  displayConfirmDialog: boolean = false;
  playerToDelete: string | null = null;
  players: any[] = [];

  constructor(private excelService: ExcelService) {}

  ngOnInit() {
    this.excelService.getPlayersFromExcel('assets/files/nomina_BSK_2026.xlsx').subscribe(data => {
      console.log('Datos cargados desde Excel:', data);
      this.players = data;
    });
  }

  showDeleteDialog(playerName: string) {
    this.playerToDelete = playerName;
    this.displayConfirmDialog = true;
  }

  confirmDelete() {
    // Aquí iría la lógica para eliminar el jugador
    this.displayConfirmDialog = false;
    this.playerToDelete = null;
  }

  cancelDelete() {
    this.displayConfirmDialog = false;
    this.playerToDelete = null;
  }
}
