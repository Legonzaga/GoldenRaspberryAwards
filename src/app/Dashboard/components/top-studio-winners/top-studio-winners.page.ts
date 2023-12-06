import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Studio, StudioList } from 'src/app/core/models/studios';
import { HttpClient } from '@angular/common/http';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-top-studio-winners',
  templateUrl: './top-studio-winners.page.html',
  styleUrls: ['./top-studio-winners.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TopStudioWinnersPage implements OnInit {


  studioList!: StudioList;

  topWinners!: Studio[];

  constructor(
    private http: HttpClient,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getTopStudios();
  }

  getTopStudios() {

    this.movieService.listWinnersStudios().subscribe({
      next: (list) => {
        this.studioList = list;

        this.gatherTopWinners(this.studioList);

      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  gatherTopWinners(list: StudioList) {
    this.topWinners = list.studios.slice(0, 3);
  }
}
