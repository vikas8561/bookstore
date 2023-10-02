import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { book } from '../dataType';

@Component({
  selector: 'app-admin-add-book',
  templateUrl: './admin-add-book.component.html',
  styleUrls: ['./admin-add-book.component.css']
})
export class AdminAddBookComponent implements OnInit {

  addBookMessage:string | undefined;
  constructor(private book:BookService) {}

  ngOnInit(): void {
      
  }

  submit(data:book){
    this.book.addBook(data);
    this.book.addBook(data).subscribe((result) => {
      console.log(result);
      if(result){
        this.addBookMessage="Product is added successfully";
      }
      
    });

    setTimeout(() =>{
      this.addBookMessage=undefined
    }, 3000)
  }
}
