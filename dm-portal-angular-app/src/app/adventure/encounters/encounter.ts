import { MonsterInstance } from "./creature-instance";

export class CombatEncounterDefinition {

    monsters: Array<MonsterInstance>;
    constructor(public name: string) {
        this.monsters = [];
    }

    addMonster(monster: MonsterInstance) {
        let index = 2;
        const originalName = monster.name;
        while (this.monsters.some(x => x.name == monster.name)) {
            monster.name = originalName + ' ' + index;
            index++;
        }
        this.monsters.push(monster);
    }

    removeMonster(name: string) {
        const index = this.monsters.findIndex(p => p.name == name);
        if (index > -1) {
            this.monsters.splice(index, 1);
        }
    }

    getEncounterExperience() {
        return this.monsters.reduce((sum, current) => sum + current.xpValue, 0);
    }
}


