import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Year } from 'src/app/core/models/year-multiple-winner';
import { HttpClient } from '@angular/common/http';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-list-year-multiple-winners',
  templateUrl: './list-year-multiple-winners.page.html',
  styleUrls: ['./list-year-multiple-winners.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListYearMultipleWinnersPage implements OnInit {

  yearsWithMostWinners: Year[] = [];

  constructor(
    private http: HttpClient,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getYearsWithMostWinners();
  }

  getYearsWithMostWinners() {

    this.movieService.listYearsWithMostWinners().subscribe({
      next: (list) => {
        this.yearsWithMostWinners = list.years;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }


}
