import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MonsterDefinition } from 'src/app/monsters/monster';
import { MonsterInstance } from '../creature-instance';
import { CombatEncounterDefinition } from '../encounter';
import { EncounterEditorService } from '../encounter-editor.service';
import { MonsterInstanceEditorComponent } from '../monster-instance-editor/monster-instance-editor.component';

@Component({
  selector: 'dm-encounter-editor',
  templateUrl: './encounter-editor.component.html',
  styleUrls: ['./encounter-editor.component.scss']
})
export class EncounterEditorComponent implements OnInit {

  encounter: CombatEncounterDefinition;
  selectedMonster?: MonsterDefinition;
  constructor(private encounterEditorService: EncounterEditorService,
    private dialog: MatDialog) {
    if (!this.encounterEditorService.currentEncounterDefinition) {
      this.encounterEditorService.currentEncounterDefinition = new CombatEncounterDefinition('');
    }
    this.encounter = this.encounterEditorService.currentEncounterDefinition;
  }

  ngOnInit(): void {
  }


  addSelectedMonster() {
    if (this.selectedMonster == null) {
      return;
    }

    let monsterInstance = new MonsterInstance(this.selectedMonster, this.selectedMonster.index, this.selectedMonster.name);
    const dialogRef = this.showMonsterInstanceEditDialog(monsterInstance);
    dialogRef.afterClosed().subscribe(result => {
      if (result > 0) {
        for (let count = 0; count < result; ++count) {
          this.encounter.addMonster(monsterInstance);
        }
      }
    });

  }

  private showMonsterInstanceEditDialog(monsterInstance: MonsterInstance) {
    const dialogRef = this.dialog.open(MonsterInstanceEditorComponent, {
      data: {
        monster: monsterInstance,
        isEdit: false
      }
    });

    return dialogRef;
  }

  selectMonster(monster: MonsterDefinition) {
    this.selectedMonster = monster;
  }
}
