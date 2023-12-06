import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Paginator } from 'src/app/core/models/search';
import { Movie } from 'src/app/core/models/movie';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { MovieService } from 'src/app/core/services/movie.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

export interface PaginableItens {
  link: string[];
  pageNumber: number;
}

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.page.html',
  styleUrls: ['./list-movies.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule, ReactiveFormsModule, RouterModule],
  providers: [MovieService]
})
export class ListMoviesPage implements OnInit {


  movieForm: FormGroup;

  isLoading: boolean = false;

  paginator: Paginator = new Paginator();

  previusPage!: number;

  nextPage!: number;

  totalPages: number = 0;

  totalElements: number = 0;

  movies: Movie[] = [];

  urlSuffix: string = '';

  paginationItems: PaginableItens = {
    link: [],
    pageNumber: 0
  }

  searchTerm: string = '';

  filterResult: Movie[] = [];

  showYearErroType: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private movieService: MovieService,
    private route: ActivatedRoute,
  ) {

    this.movieForm = this.formBuilder.group({
      movieYear: [0, [Validators.minLength(4), Validators.maxLength(4)]],
      winnerSelect: ['default']
    });

    this.paginator.pageNumber = this.route.snapshot.params['pageNumber'];

    this.paginationItems.link = [''];

    this.paginationItems.pageNumber = 0;
  }

  ngOnInit(): void {

    this.paginator.pageNumber = this.route.snapshot.params['pageNumber'];

    this.paginator.pageSize = 15;

    this.urlSuffix = this.urlBuilder(this.paginator, null, null);

    this.listMovies(this.paginator, this.urlSuffix);

    this.movieForm.controls['movieYear'].setValue(null);

  }

  listMovies(search: Paginator | null, url: string | '') {

    this.isLoading = true;

    this.movies = [];

    this.movieService.listMovies(url).subscribe({
      next: (result) => {

        this.movies = result.content

        this.settingPagination(result.totalPages);

        this.totalElements = result.totalElements;

      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;

        //!deprecated
        

        this.movieForm.enable();
      },
      complete: () => {
        this.isLoading = false;
        
        this.movieForm.enable();

        this.previusPage = this.paginator.pageNumber - 1;

        this.nextPage = parseInt(this.paginator.pageNumber.toString()) + 1;

      }
    });

  }

  /**
   * * Constructs an url to search movies
   * @param pageable : Pageale => Pagination settings
   * @param winner: boolean => yes:true / no:false
   * @param year : number => movie year
   * @returns : string => An URL to listMovies method
   */
  urlBuilder(pageable: Paginator | null, winner: boolean | null, year: number | null): string {

    let pagination = new Paginator();

    pagination.pageNumber = 0;

    pagination.pageSize = 15;

    pagination = pageable ?? pagination;

    let url: string = '?';

    if (pagination?.pageNumber >= 0) {
      url += `page=${pagination?.pageNumber}`;
    }

    if (pagination?.pageSize) {
      url += `&size=${pagination?.pageSize}`;
    }

    if (winner) {
      url += `&winner=${winner}`;
    }

    if (year) {
      url += `&year=${year}`;
    }

    return url;
  }



  settingPagination(totalPages: number) {

    this.paginationItems.link = [];

    this.paginationItems.pageNumber = 0;

    for (let i = 0; i < totalPages; i++) {
      this.paginationItems.link.push(`/list/${i.toString()}`);
    }

    this.paginationItems.pageNumber = totalPages;

    this.totalPages = (totalPages - 1);

  }


  filtering() {

    if (isNaN(this.movieForm.value.movieYear)) {

      this.movieForm.controls['movieYear'].setValue('');
  
      this.hideYearTypeError();

      return;      
    }

    let winner = this.movieForm.value.winnerSelect;

    let movieYear = parseInt(this.movieForm.value.movieYear);

    if (this.movieForm.controls['movieYear'].value.length === 4) {

      this.filterResult = [];

      this.paginator.pageNumber = 0;

      if (movieYear >= 1000 && winner !== 'default') {

        this.movieForm.disable();

        this.urlSuffix = this.urlBuilder(this.paginator, winner, movieYear);

        this.listMovies(this.paginator, this.urlSuffix);

      }
      else if (movieYear >= 1000 && winner === 'default') {        

        this.movieForm.disable();

        this.urlSuffix = this.urlBuilder(this.paginator, null, movieYear);

        this.listMovies(this.paginator, this.urlSuffix);

      }
      else if (isNaN(movieYear) && winner === 'default') {
       
        this.movieForm.disable();

        this.urlSuffix = this.urlBuilder(this.paginator, null, null);

        this.listMovies(this.paginator, this.urlSuffix);

      }
      else {       

        this.movieForm.enable();

      }


    }
  }

  hideYearTypeError() {

    this.showYearErroType = true;

    setTimeout(() => {
      this.showYearErroType = false;
    }, 3000);
  }

  filteringByWinner() {

    let winner = this.movieForm.value.winnerSelect;

    let movieYear = this.movieForm.value.movieYear;

    this.filterResult = [];

    this.paginator.pageNumber = 0;

    if (winner !== 'default' && movieYear >= 1000) {

      this.urlSuffix = this.urlBuilder(this.paginator, winner, movieYear);

      this.listMovies(this.paginator, this.urlSuffix);

    }
    else if (winner !== 'default' && movieYear <= 1000) {

      this.urlSuffix = this.urlBuilder(this.paginator, winner, null);

      this.listMovies(this.paginator, this.urlSuffix);

    }
    else if (winner === 'default' && movieYear >= 1000) {

      this.urlSuffix = this.urlBuilder(this.paginator, null, movieYear);

      this.listMovies(this.paginator, this.urlSuffix);

    }
    else if (winner === 'default' && movieYear <= 1000) {

      this.urlSuffix = this.urlBuilder(this.paginator, null, null);

      this.listMovies(this.paginator, this.urlSuffix);

    }
    else {

      this.urlSuffix = this.urlBuilder(this.paginator, winner, null);

      this.listMovies(this.paginator, this.urlSuffix);

    }

  }

}
