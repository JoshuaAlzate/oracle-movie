import { TestBed } from '@angular/core/testing';

import { HackerRankMoviesService } from './hacker-rank-movies.service';

describe('HackerRankMoviesService', () => {
  let service: HackerRankMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HackerRankMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
