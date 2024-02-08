import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viwe-all-book',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './viwe-all-book.component.html',
  styleUrls: ['./viwe-all-book.component.css'] // Corrected styleUrl to styleUrls
})
export class ViweAllBookComponent implements OnInit {
  public bookList: any = {};
  public setSelectedBook: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.loadBook();
  }

  loadBook(): void {
    this.httpClient.get('http://localhost:8080/book/get').subscribe((data) => {
      this.bookList = data;
      console.log(this.bookList);
    });
  }

  deleteBook(): void {
    if (!this.setSelectedBook) {
      console.error('No book selected to delete');
      return;
    }

    let api = `http://localhost:8080/book/${this.setSelectedBook.id}`;

    this.httpClient.delete(api, { responseType: 'text' }).subscribe((response: string) => {
      console.log(response);
      this.loadBook();
      this.setSelectedBook = null;
    });
  }

  setSelectBook(book: any): void {
    this.setSelectedBook = book;
    console.log("setSelectBook" + book.id);
    this.deleteBook();
  }
}
