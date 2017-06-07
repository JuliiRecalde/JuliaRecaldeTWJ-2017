import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiametroPSWComponent } from './diametro-psw.component';

describe('DiametroPSWComponent', () => {
  let component: DiametroPSWComponent;
  let fixture: ComponentFixture<DiametroPSWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiametroPSWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiametroPSWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
