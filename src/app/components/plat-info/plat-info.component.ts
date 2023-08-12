import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allPlats } from 'src/app/data/dataBase';

@Component({
  selector: 'app-plat-info',
  templateUrl: './plat-info.component.html',
  styleUrls: ['./plat-info.component.css']
})
export class PlatInfoComponent implements OnInit {
  plats:any = []
  platId: any;
  findedPlat:any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.plats=allPlats;
   this.platId = this.activatedRoute.snapshot.paramMap.get('id');
   this.findedPlat=this.plats.find(
    //obj:variable locale d'une methode
    (obj:any)=>{return obj.id==this.platId})
  }

}
