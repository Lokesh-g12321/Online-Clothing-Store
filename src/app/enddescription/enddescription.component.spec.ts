import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnddescriptionComponent } from './enddescription.component';

describe('EnddescriptionComponent', () => {
  let component: EnddescriptionComponent;
  let fixture: ComponentFixture<EnddescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnddescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnddescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
