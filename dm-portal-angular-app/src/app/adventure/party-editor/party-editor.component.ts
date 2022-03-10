import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Party, Player } from '../player';
import { PlayerEditorComponent } from '../player-editor/player-editor.component';

@Component({
  selector: 'dm-party-editor',
  templateUrl: './party-editor.component.html',
  styleUrls: ['./party-editor.component.scss']
})
export class PartyEditorComponent implements OnInit {

  @Input() party!: Party;
  constructor(public dialog: MatDialog) {
    this.party = new Party('');
  }

  ngOnInit(): void {
  }


  addPlayer() {
    let player = new Player();
    const dialogRef = this.dialog.open(PlayerEditorComponent, {
      data: player
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.party.addPlayer(player);
      }
    })

  }

}
