import { Component, OnInit, Input } from '@angular/core';
import { TileService } from '@core/services/tile.service';
import { DefaultTetrisConfigs } from '@tetris-shared/config';
import { map } from 'rxjs/operators';
import { ITileConfigs } from './models/tile-configs.interface';
import { ITileOptions } from './models/tile-options.interface';

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
      map((configs: ITileConfigs) => {
        return this.getStyles(configs);
      })
    );
  }

  getStyles(configs: ITileConfigs) {
    const bp = this.backgroundPosition(configs.size, configs.iconId, this.colorId);
        const bpx = this.backgroundPositionX(bp);
        const bpy = this.backgroundPositionY(bp);
        return {
          'top': `${this.top}px`,
          'left': `${this.left}px`,
          'background-position': `${bpx}px ${bpy}px`
        }
  }

  //#region: Tile Options
  @Input() options: ITileOptions = {
    colorId: DefaultTetrisConfigs.tile.colorId,
    size: DefaultTetrisConfigs.tile.size,
    iconId: DefaultTetrisConfigs.tile.iconId,
    top: 0,
    left: 0,
  };


  get colorId() { return this.options?.colorId; }
  get top() { return this.options?.top; }
  get left() { return this.options?.left; }
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
