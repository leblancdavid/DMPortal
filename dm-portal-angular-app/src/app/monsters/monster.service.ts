import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MonsterDefinition } from './monster';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  private baseUrl = 'https://www.dnd5eapi.co/api/';

  constructor(private http: HttpClient) { }

  getByIndex(index: string) {
    return this.http.get<MonsterDefinition>(this.baseUrl + 'monsters/' + index)
  }
}
