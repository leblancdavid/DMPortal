import { Component, Input, OnInit } from '@angular/core';
import { StatType } from '../stat-type.enum';

@Component({
  selector: 'dm-creature-stat',
  templateUrl: './creature-stat.component.html',
  styleUrls: ['./creature-stat.component.scss']
})
export class CreatureStatComponent implements OnInit {

  @Input() value!: number;
  @Input() type!: StatType;

  modifier = '';
  constructor() { }

  ngOnInit(): void {
    if(this.value >= 12) {
      this.modifier = '+' + Math.floor((this.value - 10) / 2); 
    } else if(this.value < 10) {
      this.modifier = Math.floor((this.value - 10) / 2).toString(); 
    } else {
      this.modifier = '-';
    }
  }

}
