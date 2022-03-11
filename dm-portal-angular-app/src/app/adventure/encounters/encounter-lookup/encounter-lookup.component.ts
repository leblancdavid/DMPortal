import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CombatEncounterDefinition } from '../encounter';
import { EncounterEditorComponent } from '../encounter-editor/encounter-editor.component';

@Component({
  selector: 'dm-encounter-lookup',
  templateUrl: './encounter-lookup.component.html',
  styleUrls: ['./encounter-lookup.component.scss']
})
export class EncounterLookupComponent implements OnInit {

  encounters: Array<CombatEncounterDefinition> = [];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addEncounter() {
    let encounter = new CombatEncounterDefinition('');

    const dialogRef = this.showEncounterEditDialog(encounter);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.encounters.push(encounter);
      }
    })

  }

  editEncounter(encounter: CombatEncounterDefinition) {
    const dialogRef = this.showEncounterEditDialog(encounter);
  }


  private showEncounterEditDialog(encounter: CombatEncounterDefinition) {

    const dialogRef = this.dialog.open(EncounterEditorComponent, {
      data: encounter
    });

    return dialogRef;
  }


  deleteEncounter(encounter: CombatEncounterDefinition) {
    //this.party.removePlayer(encounter.characterName);
  }
}
