import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,HttpClientModule,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: any = {
    email: "",
    password: ""
  };

  constructor(private http: HttpClient, private router: Router) {

  }

  // @ts-ignore
  login() {
     console.log(this.loginObj);

     this.http.post("http://localhost:8081/login/request-login", this.loginObj).subscribe((res: any) => {
      console.log(res);
       if (res === true) {
         Swal.fire({
           title: "User Registration Success!",
           text: `Hello ${this.loginObj.email}`,
           icon: "success"
         });

         this.router.navigate(['/viewAllBooks']);
       }else {
         Swal.fire({
           title: "User Registration Failed!",
           text: `Hello ${this.loginObj.email}`,
           icon: "error"
         });
       }
    })


  }
}
