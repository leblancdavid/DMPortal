import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { MonsterDefinition } from '../monster';
import { MonsterLookupFilters } from '../monster-filter';
import { MonsterService } from '../monster.service';

@Component({
  selector: 'dm-monster-select-list',
  templateUrl: './monster-select-list.component.html',
  styleUrls: ['./monster-select-list.component.scss']
})
export class MonsterSelectListComponent implements OnInit {

  monsterList: Array<MonsterDefinition> = [];
  filteredList: Array<MonsterDefinition> = [];
  monsterDefinition: MonsterDefinition | undefined;
  selectedMonsterIndex: string | undefined;
  filter: MonsterLookupFilters = new MonsterLookupFilters();

  constructor(private monsterService: MonsterService) { }

  ngOnInit(): void {
    this.monsterService.getAll().subscribe(x => {
      forkJoin(x.results.map(y => this.monsterService.getByIndex(y.index))).subscribe(m => {
        this.monsterList = m;
        this.filteredList = this.monsterList;
      }, error => {
        console.error(error);
      });


    }, error => {
      console.error(error);
    })
  }

  applyFilter() {
    this.filteredList = this.filter.apply(this.monsterList);
  }

}
