import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CombatEncounterDefinition } from '../encounter';
import { EncounterEditorService } from '../encounter-editor.service';

@Component({
  selector: 'dm-encounter-editor',
  templateUrl: './encounter-editor.component.html',
  styleUrls: ['./encounter-editor.component.scss']
})
export class EncounterEditorComponent implements OnInit {

  encounter: CombatEncounterDefinition;
  constructor(private encounterEditorService: EncounterEditorService) {
    if (!this.encounterEditorService.currentEncounterDefinition) {
      this.encounterEditorService.currentEncounterDefinition = new CombatEncounterDefinition('');
    }
    this.encounter = this.encounterEditorService.currentEncounterDefinition;
  }

  ngOnInit(): void {
  }


  addSelectedMonster() {

  }
}
