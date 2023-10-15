import { Component, EnvironmentInjector } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
interface booksCard {
  ISBN: number,
  image: string,
  title: string,
  author: string,
  price: {currency:string;value:number;displayValue:string},
  summary: string
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Output() ejectBooks:EventEmitter<booksCard>=new EventEmitter();
  @Input() bookCard: booksCard | undefined;
  addBooksToCart(e:booksCard){
    this.ejectBooks.emit(e);
  }
}
