import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanciaComponent } from './lancia.component';

describe('LanciaComponent', () => {
  let component: LanciaComponent;
  let fixture: ComponentFixture<LanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
