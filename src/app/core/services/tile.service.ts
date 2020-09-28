import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DefaultTetrisConfigs } from '@tetris-shared/config';
import { ITileConfigs } from '@tetris-shared/components/tetris-tile/models/tile-configs.interface';

@Injectable({
  providedIn: 'root'
})
export class TileService {

  private _configs: ITileConfigs = {
    size: DefaultTetrisConfigs.tile.size,
    iconId: DefaultTetrisConfigs.tile.iconId,
  };

  private configsSubject: BehaviorSubject<ITileConfigs> = new BehaviorSubject(this._configs);

  constructor() { }

  /**
   * The Observable config values
   */
  get configs$(): Observable<ITileConfigs> {
    return this.configsSubject.asObservable();
  }

  /**
   *
   */
  get configs(): ITileConfigs {
    return Object.assign({}, this._configs);
  }

  /**
   * The Observable config value of tile icon's Id
   */
  get iconId$(): Observable<number> {
    return this.configs$.pipe(
      map((configs) => configs.iconId)
    );
  }

  /**
   * The Observable config value of tile size
   */
  get size$(): Observable<number> {
    return this.configs$.pipe(
      map((configs) => configs.size)
    );
  }

  /**
   * Reset configurations for all tiles
   *
   * @param configs Optional parameter with expected config values
   */
  resetConfigs(configs?: ITileConfigs) {
    this._configs = {
      size: configs?.size || this._configs.size,
      iconId: configs?.iconId || this._configs.iconId,
    };

    this.configsSubject.next(this._configs);
  }


  /**
   * Update the config icon of all titles
   * @param iconId number: the expected icon's Id
   */
  setIcon(iconId: number): void {
    this._configs.iconId = iconId || this._configs.iconId;
    this.resetConfigs(this._configs);
  }

  /**
   * Update the config size of all titles
   * @param size number: the expected tile size
   */
  setSize(size: number): void {
    this._configs.size = size || this._configs.size;
    this.resetConfigs(this._configs);
  }

  /**
   * Implements the old occupyCell()
   *
   * @param tile TetrisTile
   */
  // sendToBackground(tile: TetrisTile) {

  // }
}
