import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveLayerComponent } from './active-layer.component';

describe('ActiveLayerComponent', () => {
  let component: ActiveLayerComponent;
  let fixture: ComponentFixture<ActiveLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
