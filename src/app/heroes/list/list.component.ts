import { Component } from '@angular/core';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  public heroNames: string[] = ['Superman', 'Samus', 'Megaman'];


  public heroeeliminado?: string = '';

  removeLastHero(): void {
    this.heroeeliminado =  this.heroNames.pop();
  }
}
