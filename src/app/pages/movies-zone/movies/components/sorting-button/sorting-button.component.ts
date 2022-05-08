import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sorting-button',
  templateUrl: './sorting-button.component.html',
  styleUrls: ['./sorting-button.component.css'],
})
export class SortingButtonComponent implements OnInit {
  @Input() label: string;
  @Input() field: string = 'field';
  @Input() onSort: 'asc' | 'desc' | null = null;

  @Output() onClick: EventEmitter<SortDataType> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  sort() {
    const sort = this.onSort;

    this.onSort =
      sort === null
        ? 'desc'
        : sort === 'desc'
        ? 'asc'
        : sort === 'asc'
        ? 'desc'
        : null;

    this.onClick.emit({
      field: this.field,
      sort: this.onSort,
    });
  }
}

export interface SortDataType {
  sort: 'asc' | 'desc' | null;
  field: string;
}
