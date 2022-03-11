import { Component, OnInit } from '@angular/core';
import { CombatEncounterDefinition } from '../encounter';

@Component({
  selector: 'dm-encounter-lookup',
  templateUrl: './encounter-lookup.component.html',
  styleUrls: ['./encounter-lookup.component.scss']
})
export class EncounterLookupComponent implements OnInit {

  encounters: Array<CombatEncounterDefinition> = [];
  constructor() { }

  ngOnInit(): void {
  }

  addEncounter() {
    let encounter = new CombatEncounterDefinition('');
    /*
    const dialogRef = this.showEncounterEditDialog(player);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.party.addPlayer(player);
      }
    })
    */
  }

  editEncounter(encounter: CombatEncounterDefinition) {
    //const dialogRef = this.showEncounterEditDialog(encounter);
  }

  /*
  private showEncounterEditDialog(encounter: CombatEncounterDefinition) {
    
    const dialogRef = this.dialog.open(PlayerEditorComponent, {
      data: player
    });

    return dialogRef;
  }
  */

  deleteEncounter(encounter: CombatEncounterDefinition) {
    //this.party.removePlayer(encounter.characterName);
  }
}
