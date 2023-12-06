import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListYearMultipleWinnersPage } from './list-year-multiple-winners.page';

describe('ListYearMultipleWinnersPage', () => {
  let component: ListYearMultipleWinnersPage;
  let fixture: ComponentFixture<ListYearMultipleWinnersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListYearMultipleWinnersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
