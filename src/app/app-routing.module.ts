import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TetrisRoutes } from '@tetris/tetris.routes';
import { PuzzleRoutes } from '@puzzle/puzzle.routes';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  ...TetrisRoutes,
  ...PuzzleRoutes,

  { path: '', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
