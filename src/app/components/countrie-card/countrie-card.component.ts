import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Countrie } from '../../interfaces/interfaces';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-countrie-card',
  imports: [RouterModule],
  templateUrl: './countrie-card.component.html',
  styleUrls: ['./countrie-card.component.css']
})
export class CountrieCardComponent {
  @Input() countrie!: Countrie
  @Output() deleteCountrie = new EventEmitter<string>()

  onDelete(id:string){
    this.deleteCountrie.emit(id)
  }
}
