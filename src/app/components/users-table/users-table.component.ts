import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allUsers } from 'src/app/data/dataBase';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  users:any=[] ;
  userId:any;
  findedUser:any;
  constructor(private router:Router ) { }

  ngOnInit() {
    this.users=allUsers;
 
  }
  goToDisplay(x:Number){
    this.router.navigate([`displayedUser/${x}`]) ;
   }
}
