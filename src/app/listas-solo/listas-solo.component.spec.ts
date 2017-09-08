import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasSoloComponent } from './listas-solo.component';

describe('ListasSoloComponent', () => {
  let component: ListasSoloComponent;
  let fixture: ComponentFixture<ListasSoloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasSoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasSoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
