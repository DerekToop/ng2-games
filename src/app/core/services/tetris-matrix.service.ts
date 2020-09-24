import { Injectable } from '@angular/core';
import { TetrisMatrix } from '../../modules/tetris/shared/models/tetris-matrix.type';
import { TetrisConfig } from '../../modules/tetris/shared/config';

@Injectable({
  providedIn: 'root'
})
export class TetrisMatrixService {

  private matrix: TetrisMatrix;

  constructor() {
  }

  /**
   *
   */
  init() {
    this.matrix = [];
    for (let r = 0; r < TetrisConfig.matrixRows; r++) {
      const row = [];
      for (let c = 0; c < TetrisConfig.matrixCols; c++) {
        row.push(-1);
      }
      this.matrix.push(row);
    }
  }

}
