import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MonsterLookupFilters } from '../../monster-filter';

@Component({
  selector: 'dm-monster-lookup-filter',
  templateUrl: './monster-lookup-filter.component.html',
  styleUrls: ['./monster-lookup-filter.component.scss']
})
export class MonsterLookupFilterComponent implements OnInit {

  @Input() filter!: MonsterLookupFilters;
  @Output() change: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  filterUpdated() {
    this.change?.emit('');
  }

}
