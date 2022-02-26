import { Component, Input, OnInit } from '@angular/core';
import { StatType } from 'src/app/common/stat-type.enum';
import { MonsterDefinition } from '../monster';

@Component({
  selector: 'dm-monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss']
})
export class MonsterCardComponent implements OnInit {

  @Input() definition!: MonsterDefinition;

  statTypes = StatType;
  
  constructor() { }

  ngOnInit(): void {
  }

}
