import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./Dashboard/Dashboard.page').then((m) => m.DashboardPage),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'list/:pageNumber',
    loadComponent: () => import('./list/list.page').then( m => m.ListPage)
  },
  {
    path: 'interval-between-wins',
    loadComponent: () => import('./Dashboard/components/interval-between-wins/interval-between-wins.page').then( m => m.IntervalBetweenWinsPage)
  },
  {
    path: 'list-movie-winners-year',
    loadComponent: () => import('./Dashboard/components/list-movie-winners-year/list-movie-winners-year.page').then( m => m.ListMovieWinnersYearPage)
  },
  {
    path: 'list-year-multiple-winners',
    loadComponent: () => import('./Dashboard/components/list-year-multiple-winners/list-year-multiple-winners.page').then( m => m.ListYearMultipleWinnersPage)
  },
  {
    path: 'top-studio-winners',
    loadComponent: () => import('./Dashboard/components/top-studio-winners/top-studio-winners.page').then( m => m.TopStudioWinnersPage)
  },
  {
    path: 'list-movies',
    loadComponent: () => import('./list/components/list-movies/list-movies.page').then( m => m.ListMoviesPage)
  },
];
