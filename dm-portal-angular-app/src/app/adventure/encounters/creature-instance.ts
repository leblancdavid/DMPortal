import { MonsterDefinition } from "src/app/monsters/monster";
import { Player } from "../players/player";

export interface ICreatureInstance {
    id: string;
    name: string;
    type: string;

    hpOverride?: number;
    acOverride?: number;

    initiativeValue: number;
    currentHp: number;

    isDead(): boolean;
    isUnconcious(): boolean;

    heal(amount: number): void;
    damage(amount: number): void;

}

export class PlayerInstance implements ICreatureInstance {
    id: string;
    name: string;
    type: string;
    hpOverride?: number | undefined;
    acOverride?: number | undefined;
    initiativeValue: number;
    currentHp: number;

    player: Player;

    constructor(player: Player) {
        this.player = player;
        this.id = player.characterName;
        this.name = player.name;
        this.type = 'player';
        this.initiativeValue = 0;
        this.currentHp = player.maxHp;
    }

    isDead(): boolean {
        if (this.hpOverride) {
            return this.currentHp - this.hpOverride <= 0;
        }
        return this.currentHp - this.player.maxHp <= 0;
    }
    isUnconcious(): boolean {
        return this.currentHp <= 0 && !this.isDead();
    }

    heal(amount: number): void {
        this.currentHp += amount;
        if (this.hpOverride) {
            if (this.currentHp > this.hpOverride) {
                this.currentHp = this.hpOverride;
            }
        } else {
            if (this.currentHp > this.player.maxHp) {
                this.currentHp = this.player.maxHp;
            }
        }
    }

    damage(amount: number): void {
        this.currentHp -= amount;
    }

}

export class MonsterInstance implements ICreatureInstance {
    id: string;
    name: string;
    type: string;
    hpOverride?: number | undefined;
    acOverride?: number | undefined;
    initiativeValue: number;
    currentHp: number;

    monster: MonsterDefinition;

    constructor(monster: MonsterDefinition, id?: string, nameOverride?: string) {
        this.monster = monster;
        if (id) {
            this.id = id;
        } else {
            this.id = monster.index;
        }

        if (nameOverride) {
            this.name = nameOverride;
        }
        this.name = monster.name;
        this.type = monster.type;
        this.initiativeValue = 0;
        this.currentHp = monster.hit_points;
    }

    isDead(): boolean {
        if (this.hpOverride) {
            return this.currentHp - this.hpOverride <= 0;
        }
        return this.currentHp - this.monster.hit_points <= 0;
    }
    isUnconcious(): boolean {
        return this.currentHp <= 0 && !this.isDead();
    }

    heal(amount: number): void {
        this.currentHp += amount;
        if (this.hpOverride) {
            if (this.currentHp > this.hpOverride) {
                this.currentHp = this.hpOverride;
            }
        } else {
            if (this.currentHp > this.monster.hit_points) {
                this.currentHp = this.monster.hit_points;
            }
        }
    }

    damage(amount: number): void {
        this.currentHp -= amount;
    }
}