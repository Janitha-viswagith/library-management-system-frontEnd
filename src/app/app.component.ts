import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './common/nav/nav.component';
import { ViweAllBookComponent } from './page/viwe-all-book/viwe-all-book.component';
import {AddBooksComponent} from "./page/add-books/add-books.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,ViweAllBookComponent,AddBooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'libary-management-frontEnd';
}
