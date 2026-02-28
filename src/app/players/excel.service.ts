// Servicio para leer archivos Excel en Angular
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExcelService {
  constructor(private http: HttpClient) {}

  public getPlayersFromExcel(filePath: string): Observable<any[]> {
    return this.http.get(filePath, { responseType: 'arraybuffer' }).pipe(
      map((data: ArrayBuffer) => {
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        // Obtener el rango de la hoja
        const range = XLSX.utils.decode_range(sheet['!ref']!);
        const rows: any[] = [];
        // Suponiendo que la primera fila (row 0) es encabezado, empezamos en row 1
        for (let rowNum = range.s.r + 1; rowNum <= range.e.r; rowNum++) {
          const row: any = {};
          for (let colNum = range.s.c; colNum <= range.e.c; colNum++) {
            const cellAddress = XLSX.utils.encode_cell({ r: rowNum, c: colNum });
            const value = sheet[cellAddress]?.v;
            if (value !== undefined && value !== null && value !== '') {
              row[cellAddress] = value;
            }
          }
          // Solo agregar la fila si tiene al menos una celda con datos
          if (Object.keys(row).length > 0) {
            rows.push(row);
          }
        }
        return rows;
      })
    );
  }
}
