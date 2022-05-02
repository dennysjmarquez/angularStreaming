import { Component, OnInit } from '@angular/core';
import {
  EntriesType,
  MoviesService,
  MoviesType,
} from './services/movies.service';
import { catchError, finalize } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  public movies: EntriesType[] = [];

  constructor(private _moviesService: MoviesService) {
    _moviesService
      .getMovies()
      .pipe(
        catchError((err): any => {}),
        finalize(() => {})
      )
      .subscribe((movies: MoviesType) => {
        this.movies = movies.entries;
      });
  }

  ngOnInit(): void {}
}
