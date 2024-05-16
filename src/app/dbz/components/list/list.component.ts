import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name: 'trunks',
    power: 12
  }
  ]
  @Output()
  onDelete: EventEmitter<number> = new EventEmitter();


  // onDelete = index value:number

  onDeleteCharatcter(index: number): void {
    this.onDelete.emit(index);
  }
}
