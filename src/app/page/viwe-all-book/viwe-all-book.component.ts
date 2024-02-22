import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viwe-all-book',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './viwe-all-book.component.html',
  styleUrls: ['./viwe-all-book.component.css']
})
export class ViweAllBookComponent implements OnInit {
  public bookList: any = {};
  public SelectedBook: any ={} ;
 public http: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.loadBook();
  }

  loadBook(): void {
    this.httpClient.get('http://localhost:8080/book/get').subscribe((data) => {
      this.bookList = data;

    });
  }

  deleteBook(): void {
    if (!this.SelectedBook) {
      console.error('No book selected to delete');
      return;
    }

    const api = `http://localhost:8080/book/${this.SelectedBook.id}`;

    this.httpClient.delete(api, { responseType: 'text' }).subscribe((response: string) => {
      console.log(response);

      Swal.fire({
        title: "Deleted !",
        text: `${this.SelectedBook.title} book is deleted`,
        icon: "success"
      });
      this.loadBook();
      this.SelectedBook = null;
    });
  }

  setSelectBook(book: any): void {
    this.SelectedBook = book;
    console.log("setSelectBook " + book.id);

  }

  saveBook(): void {
    let postApi = "http://localhost:8080/book/add";
    this.httpClient.post(postApi, this.SelectedBook).subscribe(data=>{
      console.log("saved  !!");
      Swal.fire({
        title: "Update !",
        text: `${this.SelectedBook.title} book is Updated`,
        icon: "success"
      });
      this.loadBook();
      this.SelectedBook={};
    });

}
}
