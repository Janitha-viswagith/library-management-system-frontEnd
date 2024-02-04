import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-viwe-all-book',
  standalone: true,
  imports: [],
  templateUrl: './viwe-all-book.component.html',
  styleUrl: './viwe-all-book.component.css'
})
export class ViweAllBookComponent implements OnInit{
      private http;
      public booklist :any ={};

      constructor(private httpCliant:HttpClient ){
        this.http=httpCliant;


      }
       ngOnInit(): void {
          this.lordBook();
      }
      lordBook(){
       
        this.http.get('http://localhost:8080/book/get').subscribe((data)=>{
         this.booklist=data;  
        console.log(data)
      })
      }
      
    }
