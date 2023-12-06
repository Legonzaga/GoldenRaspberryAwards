import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopStudioWinnersPage } from './top-studio-winners.page';

describe('TopStudioWinnersPage', () => {
  let component: TopStudioWinnersPage;
  let fixture: ComponentFixture<TopStudioWinnersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TopStudioWinnersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
