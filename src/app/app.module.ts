import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PuzzleModule } from './modules/puzzle/puzzle.module';
import { TetrisModule } from './modules/tetris/tetris.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,

    CoreModule,
    DashboardModule,
    PuzzleModule,
    TetrisModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
