import { Component, OnInit } from '@angular/core';
import { Book } from '../types';
import { BooksService } from './books.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  constructor(private booksService:BooksService ) { }


books:Book[] =[];





ngOnInit():void {

  this.books = this.booksService.getBook();

}

  // name:string='happiest person in the world';
  // author:string= 'ken';
  // src:string = 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg';

  isShowing:boolean = true;
  // showAndHide () {
  //   //true ->false
  //   //false ->true
  //   this.isShowing = !this.isShowing;
  // }

  // addToCard(book:Book) {
  //     console.log(book);
      
  // }

}
