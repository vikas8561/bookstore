import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { book } from '../dataType';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit{

  bookData:undefined | book
  updateMessage: undefined | string;
  constructor(private route:ActivatedRoute, private book:BookService) {}
  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id')
    console.log(productId);
    productId && this.book.getBook(productId).subscribe((data) =>{
      console.log(data);
      this.bookData=data;
      
    })
  }
  submit(data:any){
   
    if(this.bookData){
      data.id = this.bookData.id;
    }
    this.book.updateBook(data).subscribe((result) => {
      if(result) {
        this.updateMessage = "Updated Successfully"
      }
    })
    setTimeout(() => {
      this.updateMessage = undefined;
    }, 3000)
    console.log(data);
    
  }

}
