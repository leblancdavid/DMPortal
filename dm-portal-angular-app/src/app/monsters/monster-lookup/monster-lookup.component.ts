import { Component, OnInit } from '@angular/core';
import { MonsterDefinition } from '../monster';
import { MonsterService } from '../monster.service';

@Component({
  selector: 'dm-monster-lookup',
  templateUrl: './monster-lookup.component.html',
  styleUrls: ['./monster-lookup.component.scss']
})
export class MonsterLookupComponent implements OnInit {

  currentMonster?: MonsterDefinition;
  constructor(private monsterService: MonsterService) { }

  ngOnInit(): void {
    this.monsterService.getByIndex('aboleth').subscribe(x => {
      this.currentMonster = x;
    }, error => {
      console.error(error);
    });
    
  }

}
