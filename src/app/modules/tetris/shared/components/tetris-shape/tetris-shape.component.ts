import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TileService } from '@core/services/tile.service';
import { ITileOptions } from '@tetris-shared/components/tetris-tile/models/tile-options.interface';
import { DefaultTetrisConfigs } from '@tetris-shared/config';
import { shapes } from '@tetris-shared/utilities/constants';
import { hex2binstr } from '@tetris-shared/utilities/functions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITileConfigs } from '../tetris-tile/models/tile-configs.interface';

@Component({
  selector: 'app-tetris-shape',
  templateUrl: './tetris-shape.component.html',
  styleUrls: ['./tetris-shape.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TetrisShapeComponent implements OnInit, OnDestroy {

  @Input() type: number = 0;
  @Input() direction: number = 0;
  @Input() top: number;
  @Input() left: number;

  shape = shapes[this.type];
  shapeSnapshot = this.shape[this.direction];

  private _tiles: Array<ITileOptions> = [];

  get tiles$(): Observable<Array<ITileOptions>> {
    return this.tileService.configs$.pipe(
      map((configs) => {
        return this.buildTiles(configs);
      })
    );
  }

  protected buildTiles(tileConfigs: ITileConfigs): Array<ITileOptions> {
    this._tiles = [];
    
    const numberOfTiles = DefaultTetrisConfigs.shape.numberOfTiles;
    const unitArray = [];
    const binstr = hex2binstr(this.shapeSnapshot.toString(), 16);
    for (let i = 0; i < numberOfTiles; i++) {
      const unit = binstr.substr(i * numberOfTiles, numberOfTiles);
      unitArray.push(unit);
    }

    for (let i = 0; i < numberOfTiles; i++) {
      const tileLeft = this.left + i * tileConfigs.size;
      for (let j = 0; j < numberOfTiles ; j++ ) {
        if (unitArray[i].substr(j, 1) === '1') {
          const tileTop = this.top + j * tileConfigs.size;
          const tile: ITileOptions = {
            left: tileLeft,
            top: tileTop,
            iconId: tileConfigs.iconId,
            size: tileConfigs.size,
            colorId: tileConfigs.iconId,    
          };
          this._tiles.push(tile);
        }
      }
    }

    return this._tiles;
  }

  constructor(
    private tileService: TileService,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._tiles = [];
  }

}
