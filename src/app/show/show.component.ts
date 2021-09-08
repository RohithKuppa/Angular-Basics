import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor() { }

  flag = false;
  traineeName : String | undefined;

  ngOnInit(): void {
  }

  fun(userName: any){
    //alert("Sucessfully submitted the data");
    //this.traineeName = userName;
    console.log(userName);
  }

}
