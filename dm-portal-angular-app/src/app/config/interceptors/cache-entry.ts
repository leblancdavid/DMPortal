import { HttpResponse } from "@angular/common/http";

export class CacheEntry {
    constructor(public url: string,
        public response: HttpResponse<any>,
        public entryTime: number) {

    }
}

export const MAX_CACHE_AGE = 20000000; // in milliseconds 