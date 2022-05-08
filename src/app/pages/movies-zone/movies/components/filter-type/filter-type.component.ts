import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterType } from '../../movies.component';

@Component({
  selector: 'app-filter-type',
  templateUrl: './filter-type.component.html',
  styleUrls: ['./filter-type.component.css'],
})
export class FilterTypeComponent implements OnInit {
  @Output() runFilter: EventEmitter<FilterType> = new EventEmitter();
  @Input() selected: string | null = null;
  @Input() field: string | null = null;

  constructor() {}

  onClick(type: string) {
    this.runFilter.emit({ name: this.field, value: type });
  }

  ngOnInit(): void {}
}
