import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HampersDetailsComponent } from './hampers-details.component';

describe('HampersDetailsComponent', () => {
  let component: HampersDetailsComponent;
  let fixture: ComponentFixture<HampersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HampersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HampersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
