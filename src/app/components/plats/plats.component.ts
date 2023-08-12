import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allPlats } from 'src/app/data/dataBase';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {
  plats: any = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.plats=allPlats;
  }

}
