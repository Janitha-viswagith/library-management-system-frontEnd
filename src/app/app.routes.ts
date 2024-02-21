import { Routes } from '@angular/router';
import {LoginComponent} from "./page/login/login.component";
import {ViweAllBookComponent} from "./page/viwe-all-book/viwe-all-book.component";
import {RegisterComponent} from "./page/register/register.component";
import {BorrowerComponent} from "./page/borrower/borrower.component";

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

  ];
