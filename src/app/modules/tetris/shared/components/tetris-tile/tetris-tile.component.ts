import { Component, OnInit, Input } from '@angular/core';
import { TileService } from '@core/services/tile.service';
import { DefaultTetrisConfigs } from '@tetris-shared/config';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tetris-tile',
  templateUrl: './tetris-tile.component.html',
  styleUrls: ['./tetris-tile.component.scss']
})
export class TetrisTileComponent implements OnInit {

  /**
   * Indicates which part should be taken from the background image
   *
   * @param size the size of the tile
   * @param iconId the icon's id
   * @param colorId the color's id
   */
  backgroundPosition(size: number, iconId: number, colorId: number): [number, number] {
    return [
      0 - colorId * size,
      0 - iconId * size,
    ];
  }

  /**
   * background-position: x
   */
  backgroundPositionX(backgroundPosition: [number, number]): number { return backgroundPosition[0]; }

  /**
   * background-position: y
   */
  backgroundPositionY(backgroundPosition: [number, number]): number { return backgroundPosition[1]; }

  /**
   * Observable ngStyle
   */
  get styles$() {
    return this.service.configs$.pipe(
      map((configs) => {
        const bp = this.backgroundPosition(configs.size, configs.iconId, this.colorId);
        const bpx = this.backgroundPositionX(bp);
        const bpy = this.backgroundPositionY(bp);
        return {
          'top': `${this.top}px`,
          'left': `${this.left}px`,
          'background-position': `${bpx}px ${bpy}px`
        }
      })
    );
  }

  //#region: Input Tile Options
  @Input() colorId?: number = DefaultTetrisConfigs.tile.colorId;
  @Input() top: number = 0;
  @Input() left: number = 0;
  //#endregion

  /**
   *
   * @param service Tile Service
   */
  constructor(
    private service: TileService,
  ) { }

  /**
   *
   */
  ngOnInit() {
  }
}
