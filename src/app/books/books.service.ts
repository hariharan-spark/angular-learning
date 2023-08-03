import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBook() {
    return [{
      name:'happiest person in the world',
      author:'ken',
      image:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
      amount:100,
    },
    {
      name:'happiest person in the earth',
      author:'kenjohn',
      image:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
      amount:200,
    }];
  }

}
