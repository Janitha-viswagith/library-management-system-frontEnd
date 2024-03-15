import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import Swal from "sweetalert2";
import { NavComponent } from "../../common/nav/nav.component";


@Component({
    selector: 'app-borrower',
    standalone: true,
    templateUrl: './borrower.component.html',
    styleUrl: './borrower.component.css',
    imports: [HttpClientModule, FormsModule, CommonModule, NavComponent]
})
export class BorrowerComponent {

  public borrowerList: any = {};
  public SelectedBorrower: any ={};

 constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.loadBorrower();
  }

  loadBorrower(): void {
    this.httpClient.get('http://localhost:8081/user/get-All-User').subscribe((data) => {
      this.borrowerList = data;
      console.log(this.borrowerList);
    });
  }

   deleteBorrower(){
       if (!this.SelectedBorrower){

         console.error('No book selected to delete');
         return;
       }

       const api = `http://localhost:8081/user/delete/${this.SelectedBorrower.id}`;

       this.httpClient.delete(api,{responseType:'text'}).subscribe((response:string)=>{
         console.log(response);

        Swal.fire({
           title: "Deleted !",
           text:`${this.SelectedBorrower.name} borrower is deleted`,
           icon: "success"
        });

        this.loadBorrower();
        this.SelectedBorrower=null;
       });
   }

   setSelectBorrower(borrower:any):void{
     this.SelectedBorrower=borrower;
     console.log("setSelectBorrower  "+ borrower.name);
   }

   saveBorrower(){
     let postApi = "http://localhost:8081/add-user";
     this.httpClient.post(postApi, this.SelectedBorrower).subscribe(data=>{
       console.log("saved  !!");
       Swal.fire({
         title: "Update !",
         text: `${this.SelectedBorrower.name} borrower is Updated`,
         icon: "success"
       });
       this.loadBorrower();
       this.SelectedBorrower={};
     });
   }

}
