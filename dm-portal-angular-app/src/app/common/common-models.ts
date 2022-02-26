export interface ApiReference {
    index: string;
    name: string;
    url: string;
}

export interface ClassApiReference {
    index: string;
    class: string;
    url: string;
}

export interface Choice {
    choose: number;
    type: string;
    from: Array<ApiReference>;
}

export interface Cost {
    quantity: number;
    unit: string;
}

export interface AbilityBonus {
    bonus: number;
    ability_score: Array<ApiReference>;
}

export interface DC {
    dc_value: number;
    success_type: string;
    dc_type: ApiReference;
}

export interface Damage {
    damage_dice: string;
    damage_bonus: number;
    damage_type: ApiReference;
}

export interface Usage {
    type: string;
    times: number;
}