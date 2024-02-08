import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viwe-all-book',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './viwe-all-book.component.html',
  styleUrl: './viwe-all-book.component.css'
  
})
export class ViweAllBookComponent implements OnInit{
      private http;
      public bookList:any ={};

      constructor(private httpCliant:HttpClient ){
        this.http=httpCliant;


      }
       ngOnInit(): void {
          this.lordBook();
      }
      lordBook(){
       
        this.http.get('http://localhost:8080/book/get').subscribe((data)=>{
         this.bookList=data;  
        console.log(this.bookList);
      });
      }
      
    }
