import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentroDeListaComponent } from './dentro-de-lista.component';

describe('DentroDeListaComponent', () => {
  let component: DentroDeListaComponent;
  let fixture: ComponentFixture<DentroDeListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentroDeListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentroDeListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
