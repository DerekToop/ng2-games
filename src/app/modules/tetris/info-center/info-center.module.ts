import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewNextComponent } from './preview-next/preview-next.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { InfoCenterComponent } from './info-center.component';
import { TetrisSharedModule } from '@tetris-shared/tetris-shared.module';


@NgModule({
  declarations: [PreviewNextComponent, GameInfoComponent, InfoCenterComponent],
  exports: [InfoCenterComponent],
  imports: [
    CommonModule,

    TetrisSharedModule,
  ]
})
export class InfoCenterModule { }
