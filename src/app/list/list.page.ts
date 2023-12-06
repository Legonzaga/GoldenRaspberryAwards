import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListMoviesPage } from './components/list-movies/list-movies.page';
import { SharedModule } from '../shared/shared/shared.module';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ListMoviesPage, SharedModule]
})
export class ListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
