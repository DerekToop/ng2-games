import { Injectable } from '@angular/core';
import { TetrisTile } from '../../shared/entities/tetris-tile.entity';

@Injectable({
  providedIn: 'root'
})
export class TileService {

  constructor() { }

  /**
   * Implements the old occupyCell()
   *
   * @param tile TetrisTile
   */
  sendToBack(tile: TetrisTile) {

  }

  draw(tile: TetrisTile) {

  }

}
