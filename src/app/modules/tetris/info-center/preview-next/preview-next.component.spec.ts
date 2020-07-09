import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewNextComponent } from './preview-next.component';

describe('PreviewNextComponent', () => {
  let component: PreviewNextComponent;
  let fixture: ComponentFixture<PreviewNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewNextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
