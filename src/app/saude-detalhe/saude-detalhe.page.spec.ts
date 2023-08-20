import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaudeDetalhePage } from './saude-detalhe.page';

describe('SaudeDetalhePage', () => {
  let component: SaudeDetalhePage;
  let fixture: ComponentFixture<SaudeDetalhePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SaudeDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
