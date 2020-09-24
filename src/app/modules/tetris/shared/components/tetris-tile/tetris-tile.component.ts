import { Component, OnInit, Input } from '@angular/core';
import { TetrisConfig } from '@tetris-shared/config';

@Component({
  selector: 'app-tetris-tile',
  templateUrl: './tetris-tile.component.html',
  styleUrls: ['./tetris-tile.component.scss']
})
export class TetrisTileComponent implements OnInit {

  // background color id
  @Input() colorId?: number = 0;

  // background icon id
  @Input() iconId?: number = 0;

  //
  @Input() top: number = 0;
  @Input() left: number = 0;

  get backgroundPosition(): [number, number] {
    const width = TetrisConfig.tileSize;
    return [
      0 - this.colorId * width,
      0 - this.iconId * width,
    ];
  }


  /**
   * background-position: x
   */
  get bpx(): number { return this.backgroundPosition[0]; }

  /**
   * background-position: y
   */
  get bpy(): number { return this.backgroundPosition[1]; }

  /**
   * ngStyle
   */
  get styles() {
    return {
      'top': `${this.top}px`,
      'left': `${this.left}px`,
      'background-position': `${this.bpx}px ${this.bpy}px`
    }
  }

  constructor(
  ) { }

  ngOnInit() {
  }
}
