import { Component, Input, OnInit } from '@angular/core';
import { ApiReference } from 'src/app/common/common-models';
import { StatType } from 'src/app/common/stat-type.enum';
import { MonsterDefinition } from '../monster';
import { MonsterService } from '../monster.service';

@Component({
  selector: 'dm-monster-ref-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss']
})
export class MonsterRefCardComponent implements OnInit {

  @Input() reference!: ApiReference;
  definition?: MonsterDefinition;

  statTypes = StatType;
  displayedColumns: string[] = ['name', 'description', 'attack', 'dc', 'usage'];

  constructor(private monsterService: MonsterService) { }

  ngOnInit(): void {
    this.monsterService.getByIndex(this.reference.index).subscribe(x => {
      this.definition = x;
    }, error => {
      console.error(error);
    });
  }

}

@Component({
  selector: 'dm-monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss']
})
export class MonsterCardComponent implements OnInit {

  @Input() definition!: MonsterDefinition;

  statTypes = StatType;
  displayedColumns: string[] = ['name', 'description', 'attack', 'dc', 'usage'];

  constructor() { }

  ngOnInit(): void {
  }

}
