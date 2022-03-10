import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Player } from '../player';

@Component({
  selector: 'dm-player-editor',
  templateUrl: './player-editor.component.html',
  styleUrls: ['./player-editor.component.scss']
})
export class PlayerEditorComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  characterName = new FormControl('', [Validators.required]);
  characterClass = '';


  classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']

  constructor(@Inject(MAT_DIALOG_DATA) public player: Player) {
    this.characterClass = player.characterClass;
    if (this.characterClass == '') {
      this.characterClass = this.classes[0];
    }
    this.name.setValue(this.player.name);
    this.characterName.setValue(this.player.characterName);
    this.name.setValue(this.player.name);
    this.name.setValue(this.player.name);
    this.name.setValue(this.player.name);
    this.name.setValue(this.player.name);
    this.name.setValue(this.player.name);
  }

  ngOnInit(): void {
  }

  save() {
    this.player.name = this.name.value;
    this.player.characterName = this.characterName.value;
  }

}
