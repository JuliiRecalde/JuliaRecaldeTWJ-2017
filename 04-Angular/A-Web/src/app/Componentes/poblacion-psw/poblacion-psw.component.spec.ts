import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoblacionPSWComponent } from './poblacion-psw.component';

describe('PoblacionPSWComponent', () => {
  let component: PoblacionPSWComponent;
  let fixture: ComponentFixture<PoblacionPSWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoblacionPSWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoblacionPSWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
