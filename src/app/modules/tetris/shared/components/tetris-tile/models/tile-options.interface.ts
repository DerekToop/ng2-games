import { ITileConfigs } from './tile-configs.interface';

export interface ITileOptions extends ITileConfigs {
  left?: number;
  top?: number;
  colorId?: number;
}
