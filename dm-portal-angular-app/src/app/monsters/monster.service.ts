import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiReference, ApiSearchResult } from '../common/common-models';
import { MonsterDefinition } from './monster';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  private baseUrl = 'https://www.dnd5eapi.co/api/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ApiSearchResult>(this.baseUrl + 'monsters/');
  }
  getByIndex(index: string) {
    return this.http.get<MonsterDefinition>(this.baseUrl + 'monsters/' + index);
  }
}
