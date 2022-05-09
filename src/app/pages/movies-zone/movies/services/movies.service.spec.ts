import { TestBed } from '@angular/core/testing';

import { MoviesService } from './movies.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

xdescribe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule],
      providers: [MoviesService],
    });
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
