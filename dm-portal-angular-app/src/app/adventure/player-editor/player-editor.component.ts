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
  maxHp = new FormControl('', [Validators.min(0)]);
  strength = new FormControl('', [Validators.min(0), Validators.max(30)]);
  dexterity = new FormControl('', [Validators.min(0), Validators.max(30)]);
  constitution = new FormControl('', [Validators.min(0), Validators.max(30)]);
  intelligence = new FormControl('', [Validators.min(0), Validators.max(30)]);
  wisdom = new FormControl('', [Validators.min(0), Validators.max(30)]);
  charisma = new FormControl('', [Validators.min(0), Validators.max(30)]);
  level = new FormControl('', [Validators.min(0), Validators.max(20)]);
  xp = new FormControl('', [Validators.min(0)]);


  classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']

  constructor(@Inject(MAT_DIALOG_DATA) public player: Player) {
    this.characterClass = player.characterClass;
    if (this.characterClass == '') {
      this.characterClass = this.classes[0];
    }
    this.name.setValue(this.player.name);
    this.characterName.setValue(this.player.characterName);
    this.maxHp.setValue(this.player.maxHp);
    this.strength.setValue(this.player.strength);
    this.dexterity.setValue(this.player.dexterity);
    this.constitution.setValue(this.player.constitution);
    this.intelligence.setValue(this.player.intelligence);
    this.wisdom.setValue(this.player.wisdom);
    this.charisma.setValue(this.player.charisma);
    this.level.setValue(this.player.level);
    this.xp.setValue(this.player.xp);


  }

  ngOnInit(): void {
  }

  save() {
    this.player.name = this.name.value;
    this.player.characterName = this.characterName.value;
    this.player.maxHp = this.maxHp.value;
    this.player.strength = this.strength.value;
    this.player.dexterity = this.dexterity.value;
    this.player.constitution = this.constitution.value;
    this.player.intelligence = this.intelligence.value;
    this.player.wisdom = this.wisdom.value;
    this.player.charisma = this.charisma.value;
    this.player.level = this.level.value;
    this.player.xp = this.xp.value;
  }

  containsErrors(): boolean {
    return this.name.errors != null ||
      this.characterName.errors != null ||
      this.maxHp.errors != null ||
      this.strength.errors != null ||
      this.dexterity.errors != null ||
      this.constitution.errors != null ||
      this.intelligence.errors != null ||
      this.wisdom.errors != null ||
      this.charisma.errors != null ||
      this.level.errors != null ||
      this.xp.errors != null;

  }

}
