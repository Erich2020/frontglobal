import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGestionComponent } from './form-gestion.component';

describe('FormGestionComponent', () => {
  let component: FormGestionComponent;
  let fixture: ComponentFixture<FormGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
