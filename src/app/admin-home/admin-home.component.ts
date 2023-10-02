import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { book } from '../dataType';
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{
  bookList:undefined | book[];
  bookMessage:undefined | string;
  icon = faTrash
  iconEdit = faEdit
  constructor(private book:BookService) {}

  ngOnInit(): void {
      this.book.bookList().subscribe((result) =>{
        console.log(result);
        if(result) {
          this.bookList=result;
        }
      })
  }

  deleteBook(id:any) {

    this.book.deleteBook(id).subscribe((result) =>{
      if(result){
        this.bookMessage = "Book is deleted"
      }
    });
    setTimeout(() => {
      this.bookMessage=undefined
    }, 3000);
    
  }
}
