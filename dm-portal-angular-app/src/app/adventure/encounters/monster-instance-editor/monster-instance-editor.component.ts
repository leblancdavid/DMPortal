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
  constructor(@Inject(MAT_DIALOG_DATA) public data: MonsterInstanceEditorDialogData) {
    this.overwriteAc = data.monster.acOverride != null;
    this.overwriteHp = data.monster.hpOverride != null;
  }

  ngOnInit(): void {
  }

  save() {
  }

  containsErrors(): boolean {
    return false;
  }
}
