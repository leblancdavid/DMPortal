import { MonsterDefinition } from "./monster";

export abstract class BaseMonsterFilter {
    public abstract satisfies(definition: MonsterDefinition): boolean;
}

export abstract class MonsterFilter<TValue> extends BaseMonsterFilter {
    public abstract getOptions(): Array<TValue>;
    public abstract get ignore(): boolean;
    public abstract get currentValue(): TValue;
    public abstract set currentValue(value: TValue);

}

export class MinChallengeRatingFilter implements MonsterFilter<number> {
    private _options: Array<number>;
    private _currentValue = 0;

    constructor() {
        this._options = [
            0.0, 0.125, 0.25, 0.5, 1.0, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30
        ];
    }

    public get ignore(): boolean {
        return this._currentValue <= 0.0;
    }
    public get currentValue(): number {
        return this._currentValue;
    }
    public set currentValue(value: number) {
        this._currentValue = value;
        if (!this._options.some(x => x == value)) {
            this._currentValue = 0.0;
        }
    }

    public getOptions(): number[] {
        return this._options;
    }

    public satisfies(definition: MonsterDefinition): boolean {
        return this.ignore || definition.challenge_rating >= this._currentValue;
    }
}

export class MaxChallengeRatingFilter implements MonsterFilter<number> {
    private _options: Array<number>;
    private _currentValue = 30;

    constructor() {
        this._options = [
            0.0, 0.125, 0.25, 0.5, 1.0, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30
        ];
    }

    public get ignore(): boolean {
        return this._currentValue >= 30.0;
    }
    public get currentValue(): number {
        return this._currentValue;
    }
    public set currentValue(value: number) {
        this._currentValue = value;
        if (!this._options.some(x => x == value)) {
            this._currentValue = 30.0;
        }
    }

    public getOptions(): number[] {
        return this._options;
    }

    public satisfies(definition: MonsterDefinition): boolean {
        return this.ignore || definition.challenge_rating <= this._currentValue;
    }
}

export class SizeFilter implements MonsterFilter<string> {
    private _options: Array<string>;
    private _currentValue = '';

    constructor() {
        this._options = [
            'Tiny',
            'Small',
            'Medium',
            'Large',
            'Huge',
            'Gargantuan'
        ];
    }

    public get ignore(): boolean {
        return this._currentValue == undefined || this._currentValue === '';
    }

    public get currentValue(): string {
        return this._currentValue;
    }

    public set currentValue(value: string) {
        this._currentValue = value;
        if (!this._options.some(x => x == value)) {
            this._currentValue = '';
        }
    }

    public getOptions(): string[] {
        return this._options;
    }

    public satisfies(definition: MonsterDefinition): boolean {
        return this.ignore || definition.size === this._currentValue;
    }
}

export class MonsterTypeFilter implements MonsterFilter<string> {
    private _options: Array<string>;
    private _currentValue = '';

    constructor() {
        this._options = [
            'Aberration',
            'Beast',
            'Celestial',
            'Construct',
            'Dragon',
            'Elemental',
            'Fey',
            'Fiend',
            'Giant',
            'Humanoid',
            'Monstrosity',
            'Ooze',
            'Plant',
            'Undead'
        ];
    }

    public get ignore(): boolean {
        return this._currentValue == undefined || this._currentValue === '';
    }

    public get currentValue(): string {
        return this._currentValue;
    }

    public set currentValue(value: string) {
        this._currentValue = value;
        if (!this._options.some(x => x == value)) {
            this._currentValue = '';
        }
    }

    public getOptions(): string[] {
        return this._options;
    }

    public satisfies(definition: MonsterDefinition): boolean {
        return this.ignore || definition.type.toLowerCase() === this._currentValue.toLowerCase();
    }
}

export class MonsterLookupFilters implements BaseMonsterFilter {
    public minChallengeRatingFilter = new MinChallengeRatingFilter();
    public maxChallengeRatingFilter = new MaxChallengeRatingFilter();
    public sizeFilter = new SizeFilter();
    public typeFilter = new MonsterTypeFilter();

    public satisfies(definition: MonsterDefinition): boolean {
        return this.minChallengeRatingFilter.satisfies(definition) &&
            this.maxChallengeRatingFilter.satisfies(definition) &&
            this.sizeFilter.satisfies(definition) &&
            this.typeFilter.satisfies(definition);
    }

    public apply(definitions: MonsterDefinition[]): MonsterDefinition[] {
        return definitions.filter(x => this.satisfies(x));
    }

}
