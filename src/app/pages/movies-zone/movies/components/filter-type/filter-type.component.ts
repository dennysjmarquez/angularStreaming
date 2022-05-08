import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterType } from '../../movies.component';

@Component({
  selector: 'app-filter-type',
  templateUrl: './filter-type.component.html',
  styleUrls: ['./filter-type.component.css'],
})
export class FilterTypeComponent implements OnInit {
  @Output() onFilter: EventEmitter<FilterType> = new EventEmitter();
  @Input() selected: string | null = null;
  @Input() field: string | null = null;

  constructor() {}

  onClick(type: string) {
    this.onFilter.emit({ name: this.field, value: type });
  }

  ngOnInit(): void {}
}
