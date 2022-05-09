import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MoviesService } from './services/movies.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { InputOnlyNumbersDirective } from './directives/input-only-numbers.directive';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let serviceMovies: MoviesService;
  let fixture: ComponentFixture<MoviesComponent>;
  let dataLoad: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesComponent, InputOnlyNumbersDirective],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule],
      providers: [MoviesService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    serviceMovies = fixture.debugElement.injector.get(MoviesService);
    fixture.detectChanges();
    dataLoad = {
      total: 100,
      entries: [
        {
          title: 'Wolf Creek',
          description: '',
          programType: 'series',
          images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
          releaseYear: 2016,
        },
        {
          title: 'No Activity',
          description: '',
          programType: 'movie',
          images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
          releaseYear: 2015,
        },
        {
          title: 'Billions',
          description: '',
          programType: 'series',
          images: { 'Poster Art': { url: '', width: 720, height: 1080 } },
          releaseYear: 2016,
        },
        {
          title: 'Better Call Saul',
          description: '',
          programType: 'series',
          images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
          releaseYear: 2015,
        },
        {
          title: 'Younger',
          description: '',
          programType: 'movie',
          images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
          releaseYear: 2015,
        },
      ],
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Cargar de la DATA las Películas', () => {
    spyOn(serviceMovies, 'getMovies').and.callFake(() => {
      return of(dataLoad);
    });

    component.ngOnInit();

    // Comprueba que el valor devuelto sea mayor que el valor especificado, Si no hay ítems no paso la prueba
    expect(component.movies.length).toBeGreaterThan(0);
  });

  it('Function runSort, "Sort name asc"', () => {
    const dataSort = [
      {
        title: 'Better Call Saul',
        description: '',
        programType: 'series',
        images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
        releaseYear: 2015,
      },
      {
        title: 'Billions',
        description: '',
        programType: 'series',
        images: { 'Poster Art': { url: '', width: 720, height: 1080 } },
        releaseYear: 2016,
      },
      {
        title: 'No Activity',
        description: '',
        programType: 'movie',
        images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
        releaseYear: 2015,
      },
      {
        title: 'Wolf Creek',
        description: '',
        programType: 'series',
        images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
        releaseYear: 2016,
      },
      {
        title: 'Younger',
        description: '',
        programType: 'movie',
        images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
        releaseYear: 2015,
      },
    ];

    spyOn(serviceMovies, 'getMovies').and.callFake(() => {
      return of(dataLoad);
    });

    component.ngOnInit();
    component.runSort({ field: 'name', sort: 'asc' });

    expect(component.movies).toEqual(dataSort);
  });

  it('Function runSort, "Sort name desc"', () => {
    const dataSort = [
      {
        title: 'Younger',
        description: '',
        programType: 'movie',
        images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
        releaseYear: 2015,
      },
      {
        title: 'Wolf Creek',
        description: '',
        programType: 'series',
        images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
        releaseYear: 2016,
      },
      {
        title: 'No Activity',
        description: '',
        programType: 'movie',
        images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
        releaseYear: 2015,
      },
      {
        title: 'Billions',
        description: '',
        programType: 'series',
        images: { 'Poster Art': { url: '', width: 720, height: 1080 } },
        releaseYear: 2016,
      },
      {
        title: 'Better Call Saul',
        description: '',
        programType: 'series',
        images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
        releaseYear: 2015,
      },
    ];

    spyOn(serviceMovies, 'getMovies').and.callFake(() => {
      return of(dataLoad);
    });

    component.ngOnInit();
    component.runSort({ field: 'name', sort: 'desc' });

    expect(component.movies).toEqual(dataSort);
  });

  it('Function runSort, "Sort year asc"', () => {
    const dataSort = [
      {
        title: 'No Activity',
        description: '',
        programType: 'movie',
        images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
        releaseYear: 2015,
      },
      {
        title: 'Better Call Saul',
        description: '',
        programType: 'series',
        images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
        releaseYear: 2015,
      },
      {
        title: 'Younger',
        description: '',
        programType: 'movie',
        images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
        releaseYear: 2015,
      },
      {
        title: 'Wolf Creek',
        description: '',
        programType: 'series',
        images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
        releaseYear: 2016,
      },
      {
        title: 'Billions',
        description: '',
        programType: 'series',
        images: { 'Poster Art': { url: '', width: 720, height: 1080 } },
        releaseYear: 2016,
      },
    ];

    spyOn(serviceMovies, 'getMovies').and.callFake(() => {
      return of(dataLoad);
    });

    component.ngOnInit();
    component.runSort({ field: 'year', sort: 'asc' });

    expect(component.movies).toEqual(dataSort);
  });

  it('Function runSort, "Sort year desc"', () => {
    const dataSort = [
      {
        title: 'Wolf Creek',
        description: '',
        programType: 'series',
        images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
        releaseYear: 2016,
      },
      {
        title: 'Billions',
        description: '',
        programType: 'series',
        images: { 'Poster Art': { url: '', width: 720, height: 1080 } },
        releaseYear: 2016,
      },
      {
        title: 'No Activity',
        description: '',
        programType: 'movie',
        images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
        releaseYear: 2015,
      },
      {
        title: 'Better Call Saul',
        description: '',
        programType: 'series',
        images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
        releaseYear: 2015,
      },
      {
        title: 'Younger',
        description: '',
        programType: 'movie',
        images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
        releaseYear: 2015,
      },
    ];

    spyOn(serviceMovies, 'getMovies').and.callFake(() => {
      return of(dataLoad);
    });

    component.ngOnInit();
    component.runSort({ field: 'year', sort: 'desc' });

    expect(component.movies).toEqual(dataSort);
  });

  it('Function runFilter, "Filter year 2015"', () => {
    const dataFilter = [
      {
        title: 'No Activity',
        description: '',
        programType: 'movie',
        images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
        releaseYear: 2015,
      },
      {
        title: 'Better Call Saul',
        description: '',
        programType: 'series',
        images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
        releaseYear: 2015,
      },
      {
        title: 'Younger',
        description: '',
        programType: 'movie',
        images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
        releaseYear: 2015,
      },
    ];

    spyOn(serviceMovies, 'getMovies').and.callFake(() => {
      return of(dataLoad);
    });

    component.ngOnInit();
    component.runFilter({ name: 'year', value: '2015' });

    expect(component.movies).toEqual(dataFilter);
  });

  it('Function runFilter, "Filter year 2016"', () => {
    const dataFilter = [
      {
        title: 'Wolf Creek',
        description: '',
        programType: 'series',
        images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
        releaseYear: 2016,
      },
      {
        title: 'Billions',
        description: '',
        programType: 'series',
        images: { 'Poster Art': { url: '', width: 720, height: 1080 } },
        releaseYear: 2016,
      },
    ];

    spyOn(serviceMovies, 'getMovies').and.callFake(() => {
      return of(dataLoad);
    });

    component.ngOnInit();
    component.runFilter({ name: 'year', value: '2016' });

    expect(component.movies).toEqual(dataFilter);
  });

  it('Function runFilter, "Filter type movie"', () => {
    const dataFilter = [
      {
        title: 'No Activity',
        description: '',
        programType: 'movie',
        images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
        releaseYear: 2015,
      },
      {
        title: 'Younger',
        description: '',
        programType: 'movie',
        images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
        releaseYear: 2015,
      },
    ];

    spyOn(serviceMovies, 'getMovies').and.callFake(() => {
      return of(dataLoad);
    });

    component.ngOnInit();
    component.runFilter({ name: 'type', value: 'movie' });

    expect(component.movies).toEqual(dataFilter);
  });

  it('Function runFilter, "Filter type series"', () => {
    const dataFilter = [
      {
        title: 'Wolf Creek',
        description: '',
        programType: 'series',
        images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
        releaseYear: 2016,
      },
      {
        title: 'Billions',
        description: '',
        programType: 'series',
        images: { 'Poster Art': { url: '', width: 720, height: 1080 } },
        releaseYear: 2016,
      },
      {
        title: 'Better Call Saul',
        description: '',
        programType: 'series',
        images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
        releaseYear: 2015,
      },
    ];

    spyOn(serviceMovies, 'getMovies').and.callFake(() => {
      return of(dataLoad);
    });

    component.ngOnInit();
    component.runFilter({ name: 'type', value: 'series' });

    expect(component.movies).toEqual(dataFilter);
  });

  it('Function runFilter, "Filters year and type combined 2015 movie"', () => {
    const dataFilter = [
      {
        description: '',
        images: {
          'Poster Art': {
            url: '',
            width: 1000,
            height: 1500,
          },
        },
        programType: 'movie',
        releaseYear: 2015,
        title: 'No Activity',
      },
      {
        description: '',
        images: {
          'Poster Art': {
            url: '',
            width: 1000,
            height: 1500,
          },
        },
        programType: 'movie',
        releaseYear: 2015,
        title: 'Younger',
      },
    ];

    spyOn(serviceMovies, 'getMovies').and.callFake(() => {
      return of(dataLoad);
    });

    component.ngOnInit();
    component.runFilter({ name: 'year', value: '2015' });
    component.runFilter({ name: 'type', value: 'movie' });

    expect(component.movies).toEqual(dataFilter);
  });

  it('Function runFilter, "Filters year and type combined 2016 series"', () => {
    const dataFilter = [
      {
        description: '',
        images: {
          'Poster Art': {
            url: '',
            width: 1000,
            height: 1500,
          },
        },
        programType: 'series',
        releaseYear: 2016,
        title: 'Wolf Creek',
      },
      {
        description: '',
        images: {
          'Poster Art': {
            url: '',
            width: 720,
            height: 1080,
          },
        },
        programType: 'series',
        releaseYear: 2016,
        title: 'Billions',
      },
    ];

    spyOn(serviceMovies, 'getMovies').and.callFake(() => {
      return of(dataLoad);
    });

    component.ngOnInit();
    component.runFilter({ name: 'year', value: '2016' });
    component.runFilter({ name: 'type', value: 'series' });

    expect(component.movies).toEqual(dataFilter);
  });

  xit('Function runSort, "Sort name asc with filters year 2016 and type movie"', () => {});
  xit('Function runSort, "Sort name desc with filters year 2016 and type movie"', () => {});
  xit('Function runSort, "Sort name asc with filters year 2016 and type series"', () => {});
  xit('Function runSort, "Sort name desc with filters year 2016 and type series"', () => {});
  xit('Function runSort, "Sort year asc with filter type movie"', () => {});
  xit('Function runSort, "Sort year desc with filter type movie"', () => {});
  xit('Function runSort, "Sort year asc with filter type series"', () => {});
  xit('Function runSort, "Sort year desc with filter type series"', () => {});
  xit('Function runSort, "Sort name asc with filter type movie"', () => {});
  xit('Function runSort, "Sort name desc with filter type movie"', () => {});
  xit('Function runSort, "Sort name asc with filter type series"', () => {});
  xit('Function runSort, "Sort name desc with filter type series"', () => {});

});
