import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HampersComponent } from './hampers.component';

describe('HampersComponent', () => {
  let component: HampersComponent;
  let fixture: ComponentFixture<HampersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HampersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HampersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
