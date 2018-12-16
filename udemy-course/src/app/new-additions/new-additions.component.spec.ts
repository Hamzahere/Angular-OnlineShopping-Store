import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdditionsComponent } from './new-additions.component';

describe('NewAdditionsComponent', () => {
  let component: NewAdditionsComponent;
  let fixture: ComponentFixture<NewAdditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAdditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAdditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
