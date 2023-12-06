import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';
import { Interval } from '../../../core/models/interval';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-interval-between-wins',
  templateUrl: './interval-between-wins.page.html',
  styleUrls: ['./interval-between-wins.page.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class IntervalBetweenWinsPage implements OnInit {

  producerWinInterval: Interval = new Interval();

  constructor(
    private http: HttpClient,
    private movieService: MovieService 
  ) { }

  ngOnInit(): void {
    this.getProducerWinInterval();
  }

  getProducerWinInterval() {

    this.movieService.producersWinInterval().subscribe({
      next: (interval) => {
        this.producerWinInterval = interval;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

}
