import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPanelComponent } from './control-panel.component';



@NgModule({
  declarations: [ControlPanelComponent],
  exports: [ControlPanelComponent],
  imports: [
    CommonModule
  ]
})
export class ControlPanelModule { }
