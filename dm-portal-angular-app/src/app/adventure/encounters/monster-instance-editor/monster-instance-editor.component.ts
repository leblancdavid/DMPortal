import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MonsterInstance } from '../creature-instance';

export interface MonsterInstanceEditorDialogData {
  monster: MonsterInstance;
  isEdit: boolean;
}

@Component({
  selector: 'dm-monster-instance-editor',
  templateUrl: './monster-instance-editor.component.html',
  styleUrls: ['./monster-instance-editor.component.scss']
})
export class MonsterInstanceEditorComponent implements OnInit {

  overwriteHp: boolean = false;
  overwriteAc: boolean = false;
  copies: number = 1;
  constructor(@Inject(MAT_DIALOG_DATA) public data: MonsterInstanceEditorDialogData) {
    this.overwriteAc = data.monster.acOverride != null;
    this.overwriteHp = data.monster.hpOverride != null;

  }

  ngOnInit(): void {
  }

  ok() {
    if(!this.overwriteAc) {
      this.data.monster.acOverride = undefined;
    }
    if(!this.overwriteHp) {
      this.data.monster.hpOverride = undefined;
    }
  }

  containsErrors(): boolean {
    return false;
  }
}
