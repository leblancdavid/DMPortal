import { Component, Input, OnInit } from '@angular/core';
import { StatType } from 'src/app/common/stat-type.enum';
import { Player } from '../player';

@Component({
  selector: 'dm-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  statTypes = StatType;

  @Input() player!: Player;
  constructor() { }

  ngOnInit(): void {
  }

}
