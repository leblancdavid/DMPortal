export class Player {

    currentHp: number;
    level: number;
    xp: number;
    constructor(public name: string,
        public characterName: string,
        public characterClass: string,
        public maxHp: number,
        public strength: number,
        public dexterity: number,
        public constitution: number,
        public intelligence: number,
        public wisdom: number,
        public charisma: number) {
        this.currentHp = maxHp;
        this.level = 1;
        this.xp = 0;
    }

}

export class Party {

    players: Array<Player>;
    constructor(public name: string) {
        this.players = [];
    }

    addPlayer(player: Player) {
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

export class EncounterExperienceThresholds {
    easy: number;
    medium: number;
    hard: number;
    deadly: number;

    constructor(totalPlayerLevel: number, numMonsters: number) {
        this.easy = totalPlayerLevel * 25;
        this.medium = this.easy * 2;
        this.hard = this.easy * 3;
        this.deadly = this.easy * 4;
        let multiplier = 1;
        if (numMonsters >= 15) {
            multiplier = 4;
        } else if (numMonsters >= 11) {
            multiplier = 3;
        } else if (numMonsters >= 7) {
            multiplier = 2.5;
        } else if (numMonsters >= 3) {
            multiplier = 2;
        } else if (numMonsters == 2) {
            multiplier = 1.5;
        }

        this.easy /= multiplier;
        this.medium /= multiplier;
        this.hard /= multiplier;
        this.deadly /= multiplier;
    }
}