import { MonsterInstance } from "./creature-instance";

export class CombatEncounterDefinition {

    monsters: Array<MonsterInstance>;
    constructor(public name: string) {
        this.monsters = [];
    }

    addPlayer(player: Player) {
        let index = 2;
        const originalName = player.characterName;
        while (this.players.some(x => x.characterName == player.characterName)) {
            player.characterName = originalName + ' ' + index;
            index++;
        }
        this.players.push(player);
    }

    removePlayer(characterName: string) {
        const index = this.players.findIndex(p => p.characterName == characterName);
        if (index > -1) {
            this.players.splice(index, 1);
        }
    }

    getEncounterExperience(numMonsters: number) {
        return new EncounterExperienceThresholds(this.players.reduce((sum, current) => sum + current.level, 0), numMonsters);
    }
}


