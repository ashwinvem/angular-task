import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dupli=[
    {
    name:"ashwin",
    age:'21',
    city:"chennai",
    edit: false
    },

    {
    name:"rog",
    age:'21',
    city:"chennai",
    edit: false
    },
    {
    name:"ram",
    age:'21',
    city:"chennai",
    edit: false
    },
    {
    name:"ting",
    age:'22',
    city:"chennai",
    edit: false
    },
    {
      name:"hari",
      age:'21',
      city:"chennai",
      edit: false
      },

    {
      name:"tik",
      age:'21',
      city:"chennai",
      edit: false
    },
    {
      name:"tom",
      age:'21',
      city:"chennai",
      edit: false
    },
    {
      name:"perk",
      age:'21',
      city:"chennai",
      edit: false
    }
    ];
    constructor(private router:Router) {}
        changeEdit(index: number) {
      console.log('calling');
      this.dupli[index].edit = !this.dupli[index].edit;
       }
      deleteData(index){
        console.log("deleting");
        this.dupli.splice(index,1);
      }


    ngOnInit() {
    }
}
