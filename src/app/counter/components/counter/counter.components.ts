import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>counter: {{counter}}</h3>

    <button (click)="incresaBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="incresaBy(-1)">-1</button>
  `
})
export class counterComponent{


  public counter: number = 1

  incresaBy(value: number):void{
    this.counter += value;
  }

  resetCounter() {
    this.counter = 1;
  }
}

