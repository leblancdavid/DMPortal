import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Player } from '../player';

@Component({
  selector: 'dm-player-editor',
  templateUrl: './player-editor.component.html',
  styleUrls: ['./player-editor.component.scss']
})
export class PlayerEditorComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public player: Player) { }

  ngOnInit(): void {
  }

}
