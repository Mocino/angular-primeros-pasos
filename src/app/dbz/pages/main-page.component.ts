import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { dbzServices } from '../servicies/dbz.services';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
  constructor( private dbzServices: dbzServices) {}

  get characters(): Character[]{
    return this.dbzServices.characters;
  }

  onDeleteCharacter(id: string): void {
    this.dbzServices.onDeleteCharacterByID(id)
  }

  onNewCharacter (characters: Character): void {
    this.dbzServices.addCharacter(characters);
  }

}
