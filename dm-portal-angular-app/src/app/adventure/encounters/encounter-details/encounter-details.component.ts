import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MonsterInstance } from '../creature-instance';
import { CombatEncounterDefinition } from '../encounter';
import { MonsterInstanceEditorComponent } from '../monster-instance-editor/monster-instance-editor.component';

@Component({
  selector: 'dm-encounter-details',
  templateUrl: './encounter-details.component.html',
  styleUrls: ['./encounter-details.component.scss']
})
export class EncounterDetailsComponent implements OnInit {

  @Input() encounter!: CombatEncounterDefinition;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteMonster(monster: MonsterInstance) {
    this.encounter.removeMonster(monster.name);
  }

  editMonsterInstance(monster: MonsterInstance) {
    const dialogRef = this.showMonsterInstanceEditDialog(monster);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  private showMonsterInstanceEditDialog(monster: MonsterInstance) {
    const dialogRef = this.dialog.open(MonsterInstanceEditorComponent, {
      data: {
        monster: monster,
        isEdit: false
      }
    });

    return dialogRef;
  }

}
