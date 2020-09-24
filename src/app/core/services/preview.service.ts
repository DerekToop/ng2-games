import { Injectable } from '@angular/core';
import { random } from '../../modules/tetris/shared/utilities/functions';
import { IShapeOptions } from '../../modules/tetris/shared/models/shape-options.interface';
import { TetrisShape } from '../../modules/tetris/shared/entities/tetris-shape.entity';
import * as $constants from '../../modules/tetris/shared/utilities/constants';

@Injectable({
  providedIn: 'root'
})
export class PreviewService {

  private shapeOptions: IShapeOptions;
  private shape: TetrisShape;

  get ShapeOptions(): IShapeOptions { return this.shapeOptions; }
  get TetrisShape(): TetrisShape { return this.shape; }


  init(shapeOptions: IShapeOptions = null): TetrisShape {
    this.shape = new TetrisShape(this.shapeOptions);
    return this.shape;
  }

  generateNext() {
    const iconId = 0;
    const options = Object.assign({}, this.shapeOptions);
    options.colorId = random(7);
    options.typeId = random(7);
    options.direction = random(4);
    options.iconId = iconId;
    options.left = $constants.xOffsets[options.typeId][options.direction];
    options.top = $constants.yOffsets[options.typeId][options.direction];

    this.shapeOptions = options;
    this.shape = new TetrisShape(options);
  }

  constructor() { }
}
