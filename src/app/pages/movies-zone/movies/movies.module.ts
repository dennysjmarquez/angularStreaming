import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { SortingButtonComponent } from './components/sorting-button/sorting-button.component';
import { FilterYearComponent } from './components/filter-year/filter-year.component';
import { InputOnlyNumbersDirective } from './directives/input-only-numbers.directive';
import { FilterTypeComponent } from './components/filter-type/filter-type.component';

@NgModule({
  declarations: [MoviesComponent, SortingButtonComponent, FilterYearComponent, InputOnlyNumbersDirective, FilterTypeComponent],
  imports: [CommonModule, MoviesRoutingModule, ReactiveFormsModule],
})
export class MoviesModule {}
