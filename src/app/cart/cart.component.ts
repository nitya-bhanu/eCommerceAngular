import { Component, INJECTOR, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
interface booksCart {
  ISBN: number,
  image: string,
  title: string,
  author: string,
  price: {currency:string;value:number;displayValue:string},
  summary: string,
  quantity:number
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() bookCarts:booksCart|undefined;
  @Output() removeBooks:EventEmitter<booksCart> =new EventEmitter();
  callRemoveBooksEmitter(e:booksCart){
    this.removeBooks.emit(e);
  }
  @Output() changeIncQuantity:EventEmitter<number>=new EventEmitter();
  increaseQuant(e:number|undefined){
    this.changeIncQuantity.emit(e);
  }
  @Output() changeDecQuantity:EventEmitter<number>=new EventEmitter();
  decreaseQuant(e:number|undefined){
    this.changeDecQuantity.emit(e);
  }
}
