import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../types';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book:Book = {} as Book;
  // @Output() bookEmitter = new EventEmitter<Book>;

  isIncart: boolean = false;

  constructor(private cartService:CartService){}


  addToCard() {
    this.isIncart = true;
    this.cartService.add(this.book)
    // this.bookEmitter.emit(this.book);
  }

  removeFromcart() {
    this.isIncart = false;
    this.cartService.remove(this.book)
  }

}
