import { Component, ComponentFactory, ComponentFactoryResolver, EventEmitter, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
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

  @Output() select: EventEmitter<MonsterDefinition> = new EventEmitter<MonsterDefinition>();

  constructor(private monsterService: MonsterService, private resolver: ComponentFactoryResolver) { }

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

  selectMonster(monsterIndex: string) {
    this.selectedMonsterIndex = monsterIndex;
    this.monsterDefinition = this.filteredList.find(x => x.index == monsterIndex);
    this.select.emit(this.monsterDefinition);
  }

  closeMonster() {
    this.selectedMonsterIndex = undefined;
    this.monsterDefinition = undefined;
    this.select.emit(this.monsterDefinition);
  }

  applyFilter() {
    this.closeMonster();
    this.filteredList = this.filter.apply(this.monsterList);
  }
}
