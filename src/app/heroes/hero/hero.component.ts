import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  public name: string = 'Iroman';
  public age: number = 45;

  ElMetodo(): string{
    return `${this.name} - ${this.age}`;
  }

  get capitalizedName():string {
    return this.name.toUpperCase()
  }

  changeHero(): void{
    this.name = 'Spiderman'
  }

  changeAge(): void {
    this.age = 25
  }

  resertForm(): void {
    this.name = 'Iroman'
    this.age = 45

    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML = '<h1>Desde angular</h1>';
    })
  }
}
