import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';
import { FilterType } from '../../movies.component';

@Component({
  selector: 'app-filter-year',
  templateUrl: './filter-year.component.html',
  styleUrls: ['./filter-year.component.css'],
})
export class FilterYearComponent implements OnInit, OnDestroy {
  @Output() runFilter: EventEmitter<FilterType> = new EventEmitter();
  @Input() field: string = 'year';

  public yearInput = new FormControl('', [
    Validators.pattern('^[0-9]*$'),
    Validators.maxLength(4),
    Validators.min(0),
    Validators.max(new Date().getFullYear()),
  ]);

  private yearOnChanges: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.yearOnChanges = this.yearInput.valueChanges
      .pipe(debounceTime(600))
      .subscribe((value: string) => {
        if (this.yearInput.valid) {
          this.runFilter.emit({
            name: this.field,
            value: value.length === 0 ? null : value,
          });
        }
      });
  }

  ngOnDestroy(): void {
    this.yearOnChanges.unsubscribe();
  }
}
