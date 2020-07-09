import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TetrisComponent } from './tetris.component';
import { ScreenModule } from './screen/screen.module';
import { InfoCenterModule } from './info-center/info-center.module';

@NgModule({
  declarations: [TetrisComponent],
  exports: [TetrisComponent],
  imports: [
    CommonModule,

    ScreenModule,
    InfoCenterModule,
  ]
})
export class TetrisModule { }
