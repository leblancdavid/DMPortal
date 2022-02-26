import { ApiReference, Damage, DC, Usage } from "../common/common-models";

export interface MonsterDefinition {
    index: string;
    name: string;
    size: string;
    type: string;
    subtype: string;
    alignment: string;
    armor_class: string;
    hit_points: string;
    hit_dice: string;
    forms: Array<ApiReference>; //list?
    speed: MonsterSpeed;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    proficiencies: Array<MonsterProficiency>;
    damage_vulnerabilities: Array<ApiReference>;
    damage_resistances: Array<ApiReference>;
    damage_immunities: Array<ApiReference>;
    condition_immunities: Array<ApiReference>;
    senses: any;
    languages: string;
    challenge_rating: number;
    special_abilities: Array<MonsterAbility>;
    actions: Array<MonsterAbility>;
    legendary_actions: Array<MonsterAbility>;
    url: string;
}

export interface MonsterSpeed {
    walk: string;
    swim: string;
    fly: string;
}

export interface MonsterProficiency {
    value: number;
    proficiency: ApiReference;
}

export interface MonsterAbility {
    name: string;
    desc: string;
    attack_bonus: number;
    dc: DC;
    damage: Array<Damage>;
    usage: Usage;
}


export class Monster {
    definition: MonsterDefinition;

    constructor(definition: MonsterDefinition) {
        this.definition = definition;
    }
}