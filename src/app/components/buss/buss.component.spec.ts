import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussComponent } from './buss.component';

describe('BussComponent', () => {
  let component: BussComponent;
  let fixture: ComponentFixture<BussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
