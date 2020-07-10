import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TetrisComponent } from './tetris.component';
import { ScreenModule } from './screen/screen.module';
import { InfoCenterModule } from './info-center/info-center.module';
import { ControlPanelModule } from './control-panel/control-panel.module';

@NgModule({
  declarations: [TetrisComponent],
  exports: [TetrisComponent],
  imports: [
    CommonModule,

    ScreenModule,
    InfoCenterModule,
    ControlPanelModule,
  ]
})
export class TetrisModule { }
