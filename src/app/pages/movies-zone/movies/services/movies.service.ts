import { Injectable } from '@angular/core';
import { environment as env } from '@env';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  public movies: MoviesType;

  getMovies(): Observable<MoviesType> {
    return this.http.get<MoviesType>(`${env.SERVER_URL}/api/movies`);
  }
}

export interface MoviesType {
  total: number;
  entries: EntriesType[];
}

export interface EntriesType {
  title: string;
  description: string;
  programType: string;
  images: ImagesType;
  releaseYear: number;
}

export interface ImagesType {
  'Poster Art': PosterArtType;
}

export interface PosterArtType {
  url: string;
  width: number;
  height: number;
}
