/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TetrisMatrixService } from './tetris-matrix.service';

describe('Service: TetrisMatrix', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TetrisMatrixService]
    });
  });

  it('should ...', inject([TetrisMatrixService], (service: TetrisMatrixService) => {
    expect(service).toBeTruthy();
  }));
});
