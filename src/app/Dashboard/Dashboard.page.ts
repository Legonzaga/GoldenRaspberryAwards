import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { IntervalBetweenWinsPage } from './components/interval-between-wins/interval-between-wins.page';
import { SharedModule } from '../shared/shared/shared.module';
import { MovieService } from '../core/services/movie.service';
import { ListMovieWinnersYearPage } from './components/list-movie-winners-year/list-movie-winners-year.page';
import { ListYearMultipleWinnersPage } from './components/list-year-multiple-winners/list-year-multiple-winners.page';
import { TopStudioWinnersPage } from './components/top-studio-winners/top-studio-winners.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'Dashboard.page.html',
  styleUrls: ['Dashboard.page.scss'],
  standalone: true,
  imports: [
    SharedModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IntervalBetweenWinsPage,
    ListMovieWinnersYearPage,
    ListYearMultipleWinnersPage,
    TopStudioWinnersPage
  ],
  providers: [MovieService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class DashboardPage {
  constructor() {}
}
