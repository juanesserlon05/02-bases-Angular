import { Injectable } from '@angular/core';
import { v4 } from 'uuid';
console.log(v4());

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [];

  onNewCharacter(character: Character): void {
    this.characters.push(character);

  }

  onDeleteCharacter(index: number) {
    this.characters.splice(index, 1);
  }

  constructor() { }
}
