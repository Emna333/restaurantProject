import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allChefs } from 'src/app/data/dataBase';

@Component({
  selector: 'app-chef-info',
  templateUrl: './chef-info.component.html',
  styleUrls: ['./chef-info.component.css']
})
export class ChefInfoComponent implements OnInit {
  chefs:any = [];

  chefId: any;
  findedChef:any;
    constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   this.chefs=allChefs;
   this.chefId = this.activatedRoute.snapshot.paramMap.get('id');
   this.findedChef=this.chefs.find(
    //obj:variable locale d'une methode
    (obj:any)=>{return obj.id==this.chefId})
  }

}
 