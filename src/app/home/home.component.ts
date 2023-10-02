import { Component, OnInit } from '@angular/core';
import { book } from '../dataType';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trendyBooks:undefined | book[];
  
  constructor(private product:BookService) {}

  ngOnInit(): void {
    this.product.trendyBooks().subscribe((data)=>{
      console.log(data);
      
      this.trendyBooks=data;
    })
  }
 }
