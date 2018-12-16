import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBasketsComponent } from './custom-baskets.component';

describe('CustomBasketsComponent', () => {
  let component: CustomBasketsComponent;
  let fixture: ComponentFixture<CustomBasketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomBasketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomBasketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
