import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { Movie } from '../../../core/models/movie';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-list-movie-winners-year',
  templateUrl: './list-movie-winners-year.page.html',
  styleUrls: ['./list-movie-winners-year.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedModule,ReactiveFormsModule]
})
export class ListMovieWinnersYearPage implements OnInit {

  searchMovieForm: FormGroup;

  isLoading: boolean = false;

  winnersMovieList: Movie[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private movieService: MovieService
  ) {

    this.searchMovieForm = this.formBuilder.group({
      movieYear: [null, [
        Validators.required,
        Validators.maxLength(4),
        Validators.max(2999),
        Validators.min(1900),
      ],]
    });

  }

  ngOnInit(): void {

  }

  searchMovieByYear() {

    this.isLoading = true;

    let movieYear: number = this.searchMovieForm.controls["movieYear"].value;

    this.movieService.listMoviesWinnersByYear(movieYear).subscribe({
      next: (movies: Movie[]) => {
        this.winnersMovieList = movies;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });

  }

}
