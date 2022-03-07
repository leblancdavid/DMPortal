import { Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ApiReference } from 'src/app/common/common-models';
import { MonsterDefinition } from '../monster';
import { MonsterCardComponent } from '../monster-card/monster-card.component';
import { MonsterService } from '../monster.service';

@Component({
  selector: 'dm-monster-lookup',
  templateUrl: './monster-lookup.component.html',
  styleUrls: ['./monster-lookup.component.scss']
})
export class MonsterLookupComponent implements OnInit {
  monsterList: Array<ApiReference> = [];
  monsterDefinition: MonsterDefinition | undefined;
  selectedMonsterIndex: string | undefined;
  @ViewChild("monsterDefinitionContainer", { read: ViewContainerRef }) monsterDefinitionContainer: any;

  constructor(private monsterService: MonsterService, private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.monsterService.getAll().subscribe(x => {
      this.monsterList = x.results;
    }, error => {
      console.error(error);
    })


  }

  expandMonster(monsterIndex: string) {
    this.selectedMonsterIndex = monsterIndex;
    this.monsterDefinition = undefined;
    this.monsterService.getByIndex(monsterIndex).subscribe(x => {
      this.monsterDefinition = x;
    }, error => {
      console.error(error);
    });

  }
}
