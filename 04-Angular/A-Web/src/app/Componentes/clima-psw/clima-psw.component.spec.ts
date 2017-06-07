import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaPSWComponent } from './clima-psw.component';

describe('ClimaPSWComponent', () => {
  let component: ClimaPSWComponent;
  let fixture: ComponentFixture<ClimaPSWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimaPSWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimaPSWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
