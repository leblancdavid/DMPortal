import { Component, Input, OnInit } from '@angular/core';
import { Party } from '../player';

@Component({
  selector: 'dm-party-creator',
  templateUrl: './party-creator.component.html',
  styleUrls: ['./party-creator.component.scss']
})
export class PartyCreatorComponent implements OnInit {

  @Input() party!: Party;
  constructor() {
    this.party = new Party('');
  }

  ngOnInit(): void {
  }

}
