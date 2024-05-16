
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl:'./hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age:  number = 45;

  changeName(){
    this.name = "spiderman";
  }
  changeAge(){
    this.age = 25;
  }
  getHeroDescription():string{
    return `${this.name}-${this.age}`;
  }
  resetForm(){
    this.name = 'ironman'
    this.age = 45
  }
}
