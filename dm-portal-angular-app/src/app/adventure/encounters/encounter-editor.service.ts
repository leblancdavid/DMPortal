import { Injectable } from '@angular/core';
import { CombatEncounterDefinition } from './encounter';

@Injectable({
  providedIn: 'root'
})
export class EncounterEditorService {

  currentEncounterDefinition?: CombatEncounterDefinition;
  constructor() { }
}
