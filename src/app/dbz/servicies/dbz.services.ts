import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


@Injectable({providedIn: 'root'})
export class dbzServices {

  public characters: Character[]=[{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },{
    id: uuid(),
    name: 'goku',
    power: 9500
  },{
    id: uuid(),
    name: 'vegeta',
    power: 6500
  }];

  addCharacter(character: Character ): void {

    const newCharacter: Character = {id: uuid(), ...character}

    this.characters.push(newCharacter);
  }

  onDeleteCharacterByID(id:string){
    this.characters = this.characters.filter( character => character.id !== id );

  }


  constructor() { }
}
