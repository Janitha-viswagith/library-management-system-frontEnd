import { Routes } from '@angular/router';
import {LoginComponent} from "./page/login/login.component";
import {ViweAllBookComponent} from "./page/viwe-all-book/viwe-all-book.component";
import {RegisterComponent} from "./page/register/register.component";
import {BorrowerComponent} from "./page/borrower/borrower.component";
import {AddBooksComponent} from "./page/add-books/add-books.component";

export const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'viewAllBooks',
    component:ViweAllBookComponent
  },
  {
    path:'sign-up',
    component:RegisterComponent
  },
  {
    path:'borrower',
    component:BorrowerComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'addBooks',
    component:AddBooksComponent

  }
  ];
