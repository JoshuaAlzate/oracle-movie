import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { first, tap } from 'rxjs';
import { HackerRankMoviesService } from './service/hacker-rank-movies.service';
import { Movie } from './type/movie.type';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule],
})
export class MovieComponent {
  searchYear: FormControl<number> = new FormControl();
  movies = signal<Movie[]>([]);
  noResults = signal<boolean>(false);

  hackerRankMoviesService = inject(HackerRankMoviesService);

  searchMovies() {
    const movieYear: number = this.searchYear.value;
    if (movieYear === null) return;
    this.hackerRankMoviesService
      .searchMovies(movieYear)
      .pipe(
        tap((movies: Movie[]) => {
          this.movies.update(() => movies);
          this.noResults.update(() => !this.movies().length);
        }),
        first()
      )
      .subscribe();
  }
}
