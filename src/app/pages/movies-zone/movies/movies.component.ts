import { Component, OnInit } from '@angular/core';
import {
  EntriesType,
  MoviesService,
  MoviesType,
} from './services/movies.service';
import { SortDataType } from './components/sorting-button/sorting-button.component';
import SortUtils from '../../../utils/SortUtils';
import { catchError, finalize } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  public movies: EntriesType[] = [];
  public sort: { field: string; sort: 'asc' | 'desc' | null } =
    this._moviesService.sort;

  public filterYear: string | null = this._moviesService.filterYear;
  public filterType: string | null = this._moviesService.filterType;

  constructor(private _moviesService: MoviesService) {}

  ngOnInit(): void {
    this._moviesService
      .getMovies()
      .pipe(
        catchError((err): any => {}),
        finalize(() => {})
      )
      .subscribe((movies: MoviesType) => {
        this.movies = movies.entries;
        this._moviesService.movies = movies;
      });
  }

  restSort() {
    this._moviesService.sort = { field: '', sort: null };
    this.sort = this._moviesService.sort;
  }

  runFilter(filter: FilterType) {
    const { name, value } = filter;
    const movies = this._moviesService.movies.entries.slice();
    this.restSort();

    if (
      (this.filterYear !== null && this.filterYear.trim().length === 0) ||
      isNaN(this.filterYear as any)
    ) {
      this.filterYear = null;
    }

    if (name === 'type') {
      this._moviesService.filterType = value;
      this.filterType = this._moviesService.filterType;
    }

    if (name === 'year') {
      this._moviesService.filterYear = value;
      this.filterYear = this._moviesService.filterYear;
    }

    if (this.filterType !== null || this.filterYear !== null) {
      this.movies = movies.filter((movie) => {
        if (this.filterType !== null && this.filterYear !== null) {
          return (
            movie.releaseYear === Number(this.filterYear) &&
            movie.programType === this.filterType
          );
        }

        if (this.filterType !== null) {
          return movie.programType === this.filterType;
        }

        if (this.filterYear !== null) {
          return movie.releaseYear === Number(this.filterYear);
        }

        return movie;
      });
    } else {
      this.movies = movies;
    }
  }

  runSort(sortData: SortDataType) {
    const { field, sort } = sortData;
    this._moviesService.sort = sortData;
    this.sort = this._moviesService.sort;

    if (field === 'name') {
      this.movies = SortUtils.sortString(this.movies, 'title', sort);
    }
    if (field === 'year') {
      this.movies = SortUtils.sortNumber(this.movies, 'releaseYear', sort);
    }
  }
}

export interface FilterType {
  name: string | null;
  value: string | null;
}
