import { Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { forkJoin } from 'rxjs';
import { MonsterDefinition } from '../monster';
import { MonsterLookupFilters } from '../monster-filter';
import { MonsterService } from '../monster.service';

@Component({
  selector: 'dm-monster-lookup',
  templateUrl: './monster-lookup.component.html',
  styleUrls: ['./monster-lookup.component.scss']
})
export class MonsterLookupComponent implements OnInit {
  monsterList: Array<MonsterDefinition> = [];
  filteredList: Array<MonsterDefinition> = [];
  monsterDefinition: MonsterDefinition | undefined;
  selectedMonsterIndex: string | undefined;
  filter: MonsterLookupFilters = new MonsterLookupFilters();
  @ViewChild("monsterDefinitionContainer", { read: ViewContainerRef }) monsterDefinitionContainer: any;

  constructor(private monsterService: MonsterService, private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.monsterService.getAll().subscribe(x => {
      debugger;
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

  expandMonster(monsterIndex: string) {
    this.selectedMonsterIndex = monsterIndex;
    this.monsterDefinition = undefined;
  }

  applyFilter() {
    this.filter.apply(this.monsterList);
  }
}
