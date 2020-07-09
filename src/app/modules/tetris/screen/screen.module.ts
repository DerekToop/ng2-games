import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenContainerComponent } from './screen-container/screen-container.component';
import { BaseLayerComponent } from './base-layer/base-layer.component';
import { ActiveLayerComponent } from './active-layer/active-layer.component';



@NgModule({
  declarations: [ScreenContainerComponent, BaseLayerComponent, ActiveLayerComponent],
  exports: [ScreenContainerComponent],
  imports: [
    CommonModule
  ]
})
export class ScreenModule { }
