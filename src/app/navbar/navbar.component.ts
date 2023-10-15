import { Component, EventEmitter, Input, Output } from '@angular/core';
interface booksCard {
  ISBN: number,
  image: string,
  title: string,
  author: string,
  price: {currency:string;value:number;displayValue:string},
  summary: string
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  bookName:string|undefined;
  @Input() showItems:booksCard |undefined;
  @Output() ejectSearchName:EventEmitter<string>=new EventEmitter();
  getBookName(e:string){
    this.bookName=e;
    console.log(this.bookName)
    this.ejectSearchName.emit(e);
  }
}
