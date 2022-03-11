import { MonsterInstance } from "./creature-instance";

export class CombatEncounterDefinition {

    monsters: Array<MonsterInstance>;
    constructor(public name: string) {
        this.monsters = [];
    }

    addMonster(monster: MonsterInstance) {
        let index = 2;
        const originalName = monster.id;
        while (this.monsters.some(x => x.id == monster.id)) {
            monster.name = originalName + ' ' + index;
            index++;
        }
        this.monsters.push(monster);
    }

    removeMonster(id: string) {
        const index = this.monsters.findIndex(p => p.id == id);
        if (index > -1) {
            this.monsters.splice(index, 1);
        }
    }

    getEncounterExperience() {
        return this.monsters.reduce((sum, current) => sum + current.xpValue, 0);
    }
}


