import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasCompartidasComponent } from './listas-compartidas.component';

describe('ListasCompartidasComponent', () => {
  let component: ListasCompartidasComponent;
  let fixture: ComponentFixture<ListasCompartidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasCompartidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasCompartidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
