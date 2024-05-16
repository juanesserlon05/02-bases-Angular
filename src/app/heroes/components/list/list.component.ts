import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
public deletedHero?:string;

  heroNames: string[] = ['Spiderman','Ironman','Hulk','Falcon','Antman','Black widow',];

  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();
  }

}
