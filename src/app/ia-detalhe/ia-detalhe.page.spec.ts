import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IaDetalhePage } from './ia-detalhe.page';

describe('IaDetalhePage', () => {
  let component: IaDetalhePage;
  let fixture: ComponentFixture<IaDetalhePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IaDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
