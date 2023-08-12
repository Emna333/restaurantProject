import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allChefs } from 'src/app/data/dataBase';

@Component({
  selector: 'app-chefs-table',
  templateUrl: './chefs-table.component.html',
  styleUrls: ['./chefs-table.component.css']
})
export class ChefsTableComponent implements OnInit {
  chefs:any=[];

  constructor(private router:Router) { }

  ngOnInit() {
    this.chefs=allChefs;
  }
  goToDisplay(x:Number){
    this.router.navigate([`displayedChef/${x}`]) ;
   }
}
