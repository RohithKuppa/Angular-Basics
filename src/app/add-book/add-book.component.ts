import { Component, OnInit } from '@angular/core';
import { Book } from 'src/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor() { }

  book!: Book; 
  books:Array<Book>=[];

  ngOnInit(): void {
    this.book = new Book();
  }

  addBook(f: any){
    this.books.push(f.value);
    console.log(this.book);
  }

}
