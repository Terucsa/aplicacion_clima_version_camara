import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroClimaPage } from './registro-clima.page';

describe('RegistroClimaPage', () => {
  let component: RegistroClimaPage;
  let fixture: ComponentFixture<RegistroClimaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroClimaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
