import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TetrisShapeComponent } from './components/tetris-shape/tetris-shape.component';
import { TetrisTileComponent } from './components/tetris-tile/tetris-tile.component';

@NgModule({
  declarations: [
    TetrisShapeComponent,
    TetrisTileComponent,
  ],
  exports: [
    TetrisShapeComponent,
    TetrisTileComponent,
  ],
  imports: [
    CommonModule,

  ]
})
export class TetrisSharedModule { }
