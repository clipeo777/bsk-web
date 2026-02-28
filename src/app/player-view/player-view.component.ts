import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExcelService } from '../players/excel.service';




@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css']
})
export class PlayerViewComponent implements OnInit {
  playerId: number | null = null;
  player: any;

  constructor(private route: ActivatedRoute, private excelService: ExcelService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.playerId = id ? +id : null;
    this.excelService.getPlayersFromExcel('assets/files/nomina_BSK_2026.xlsx').subscribe(data => {
      // playerId corresponde a la columna A (N°), que es A2, A3, ...
      this.player = data.find(row => row['A' + (this.playerId! + 1)] == this.playerId);
      // Si no encuentra por columna A, buscar por la primera columna
      if (!this.player) {
        this.player = data.find(row => Object.values(row)[0] == this.playerId);
      }
    });
  }
}
