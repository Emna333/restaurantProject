import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allUsers } from 'src/app/data/dataBase';



@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  users:any=allUsers ;
userId:any;
findedUser:any;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.findedUser=this.users.find(
      (obj:any)=>{return obj.id == this.userId}
      
    )
  }
  
}