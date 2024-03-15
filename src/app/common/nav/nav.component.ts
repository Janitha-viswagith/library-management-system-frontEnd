import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {LoginComponent} from "../../page/login/login.component";
import Swal from "sweetalert2";
import {RootCommands} from "@angular/cli/src/commands/command-config";


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, LoginComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor(private router: Router) {}
  logOut(){
    let timerInterval : any;
    let timer : any ="";
    Swal.fire({
      title: "Auto close alert!",
      html: "I will close in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
         timer = Swal.getPopup()?.querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
        this.router.navigate(['/login']);
      }
    });
  }

}
