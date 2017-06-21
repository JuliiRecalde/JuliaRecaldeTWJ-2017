import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrenoPSWComponent } from './terreno-psw.component';

describe('TerrenoPSWComponent', () => {
  let component: TerrenoPSWComponent;
  let fixture: ComponentFixture<TerrenoPSWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrenoPSWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrenoPSWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
