import { Component, OnInit } from '@angular/core';
import { ApiReference } from 'src/app/common/common-models';
import { MonsterDefinition } from '../monster';
import { MonsterService } from '../monster.service';

@Component({
  selector: 'dm-monster-lookup',
  templateUrl: './monster-lookup.component.html',
  styleUrls: ['./monster-lookup.component.scss']
})
export class MonsterLookupComponent implements OnInit {

  currentMonster?: MonsterDefinition;
  monsterList: Array<ApiReference> = [];
  constructor(private monsterService: MonsterService) { }

  ngOnInit(): void {
    this.monsterService.getAll().subscribe(x => {
      this.monsterList = x.results;
    }, error => {
      console.error(error);
    })
    
    
  }

  selectMonster(selectedMonsterIndex: string) {
    if(selectedMonsterIndex == null) {
      return;
    }

    this.monsterService.getByIndex(selectedMonsterIndex).subscribe(x => {
      this.currentMonster = x;
    }, error => {
      console.error(error);
    });
  }

}
