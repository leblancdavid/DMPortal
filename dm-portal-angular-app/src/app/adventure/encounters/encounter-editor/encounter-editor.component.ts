import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CombatEncounterDefinition } from '../encounter';

@Component({
  selector: 'dm-encounter-editor',
  templateUrl: './encounter-editor.component.html',
  styleUrls: ['./encounter-editor.component.scss']
})
export class EncounterEditorComponent implements OnInit {

  name = new FormControl(this.encounter.name, [Validators.required]);
  constructor(@Inject(MAT_DIALOG_DATA) public encounter: CombatEncounterDefinition) {

  }

  ngOnInit(): void {
  }

}
