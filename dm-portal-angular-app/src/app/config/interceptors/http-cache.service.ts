import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CacheEntry, MAX_CACHE_AGE } from './cache-entry';

export abstract class HttpCache {
  abstract get(req: HttpRequest<any>): HttpResponse<any> | null;
  abstract put(req: HttpRequest<any>, res: HttpResponse<any>): void;
}

@Injectable({
  providedIn: 'root'
})
export class HttpCacheService implements HttpCache {
  cacheMap = new Map<string, CacheEntry>();
  get(req: HttpRequest<any>): HttpResponse<any> | null {
    const entryJson = localStorage.getItem(req.urlWithParams);
    if (!entryJson) {
      return null;
    }

    const entry = JSON.parse(entryJson);

    const isExpired = (Date.now() - entry.entryTime) > MAX_CACHE_AGE;
    if (isExpired) {
      localStorage.removeItem(req.urlWithParams);
    }
    return isExpired ? null : entry.response;
  }
  put(req: HttpRequest<any>, res: HttpResponse<any>): void {
    const entry: CacheEntry = { url: req.urlWithParams, response: res, entryTime: Date.now() };
    localStorage.setItem(req.urlWithParams, JSON.stringify(entry));
  }

}