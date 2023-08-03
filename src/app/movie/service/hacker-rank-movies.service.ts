import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Movie } from '../type/movie.type';

@Injectable({ providedIn: 'root' })
export class HackerRankMoviesService {
  private http = inject(HttpClient);

  searchMovies(searchYear: number): Observable<Movie[]> {
    const apiUrl = `https://jsonmock.hackerrank.com/api/moviesdata?Year=${searchYear}`;

    return this.http
      .get<Movie[]>(apiUrl)
      .pipe(map((response: any) => response.data));
  }
}
