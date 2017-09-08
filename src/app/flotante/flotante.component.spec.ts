import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlotanteComponent } from './flotante.component';

describe('FlotanteComponent', () => {
  let component: FlotanteComponent;
  let fixture: ComponentFixture<FlotanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlotanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlotanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
