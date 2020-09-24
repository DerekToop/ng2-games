/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TileService } from './tile.service';

describe('Service: Tile', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TileService]
    });
  });

  it('should ...', inject([TileService], (service: TileService) => {
    expect(service).toBeTruthy();
  }));
});
