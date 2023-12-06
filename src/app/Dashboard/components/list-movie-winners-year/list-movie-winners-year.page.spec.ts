import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListMovieWinnersYearPage } from './list-movie-winners-year.page';

describe('ListMovieWinnersYearPage', () => {
  let component: ListMovieWinnersYearPage;
  let fixture: ComponentFixture<ListMovieWinnersYearPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListMovieWinnersYearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
