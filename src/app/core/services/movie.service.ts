import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Interval } from '../models/interval';
import { YearMultipleWinner } from '../models/year-multiple-winner';
import { Movie } from './../models/movie';
import { SearchMovie } from './../models/search';
import { environment } from 'src/environments/environment';
import { StudioList } from '../models/studios';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * * Lists movies winners by year
   * @param year : number
   * @returns : Movie[]
   */
  listMoviesWinnersByYear(year: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(environment.apiUrl + `?winner=true&year=${year}`);
  }

  /**
   * * List movies given the parameters below:
   * @param search : Paginator => Pagination attributes are setted here
   * @param winner : boolean => yes : true / no : false
   * @param year : number => Movie year
   * @returns : Observable<SearchMovie>
   */
  listMovies(urlSuffix: string): Observable<SearchMovie> {
    return this.http.get<SearchMovie>(environment.apiUrl + urlSuffix);
  }

  /**
   * * List producers with the longest and shortest interval between victories
   * @returns: Interval
   */
  producersWinInterval(): Observable<Interval> {
    return this.http.get<Interval>(environment.apiUrl + `?projection=max-min-win-interval-for-producers`);
  }

  /**
   * Lists studios winners
   * @returns
   */
  listWinnersStudios(): Observable<StudioList> {
    return this.http.get<StudioList>(environment.apiUrl + `?projection=studios-with-win-count`);
  }

  listYearsWithMostWinners(): Observable<YearMultipleWinner> {
    return this.http.get<YearMultipleWinner>(environment.apiUrl + `?projection=years-with-multiple-winners`);
  }


}