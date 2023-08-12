import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allPlats } from 'src/app/data/dataBase';

@Component({
  selector: 'app-plats-table',
  templateUrl: './plats-table.component.html',
  styleUrls: ['./plats-table.component.css']
})
export class PlatsTableComponent implements OnInit {
  plats: any = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.plats = allPlats;
  }
  goToDisplay(x: Number) {
    this.router.navigate([`displayedPlat/${x}`]);
  }
  priceColor(S) {
    if (S > 2 && S < 20) {
      return "green";
    }

    else if (S > 21 && S < 50) {
      return "orange";
    }
    else {
      return "red";
    }

  }
}
