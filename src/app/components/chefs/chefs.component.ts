import { Component, OnInit } from '@angular/core';
import { allChefs } from 'src/app/data/dataBase';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {
chefs:any =[];
  constructor() { }

  ngOnInit() {
    this.chefs = allChefs;

  }

}
