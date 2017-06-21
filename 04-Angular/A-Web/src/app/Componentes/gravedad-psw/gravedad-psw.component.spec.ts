import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GravedadPSWComponent } from './gravedad-psw.component';

describe('GravedadPSWComponent', () => {
  let component: GravedadPSWComponent;
  let fixture: ComponentFixture<GravedadPSWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GravedadPSWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GravedadPSWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
