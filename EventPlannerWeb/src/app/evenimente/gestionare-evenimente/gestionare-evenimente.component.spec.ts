import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionareEvenimenteComponent } from './gestionare-evenimente.component';

describe('GestionareEvenimenteComponent', () => {
  let component: GestionareEvenimenteComponent;
  let fixture: ComponentFixture<GestionareEvenimenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionareEvenimenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionareEvenimenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
