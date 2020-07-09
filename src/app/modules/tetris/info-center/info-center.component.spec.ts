import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCenterComponent } from './info-center.component';

describe('InfoCenterComponent', () => {
  let component: InfoCenterComponent;
  let fixture: ComponentFixture<InfoCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
