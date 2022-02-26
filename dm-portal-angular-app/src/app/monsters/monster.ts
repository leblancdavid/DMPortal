export interface MonsterDefinition {
    index: string;
    name: string;
    size: string;
    type: string;
    subtype: string;
    alignment: string;

    //TODO add remaining properties
}

export class Monster {
    definition: MonsterDefinition;

    constructor(definition: MonsterDefinition) {
        this.definition = definition;
    }
}