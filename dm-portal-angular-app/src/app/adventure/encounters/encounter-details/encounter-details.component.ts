import { Component, Input, OnInit } from '@angular/core';
import { MonsterInstance } from '../creature-instance';
import { CombatEncounterDefinition } from '../encounter';

@Component({
  selector: 'dm-encounter-details',
  templateUrl: './encounter-details.component.html',
  styleUrls: ['./encounter-details.component.scss']
})
export class EncounterDetailsComponent implements OnInit {

  @Input() encounter!: CombatEncounterDefinition;
  constructor() { }

  ngOnInit(): void {
  }

  deleteMonster(monster: MonsterInstance) {

  }

  editMonsterInstance(monster: MonsterInstance) {

  }

}
