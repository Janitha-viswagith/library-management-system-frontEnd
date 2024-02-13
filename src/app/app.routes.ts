import { Routes } from '@angular/router';
import {LoginComponent} from "./page/login/login.component";
import {ViweAllBookComponent} from "./page/viwe-all-book/viwe-all-book.component";

export const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'viewAllBooks',
    component:ViweAllBookComponent
  }

  ];
