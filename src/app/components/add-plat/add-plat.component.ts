import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {
  addPlatForm:FormGroup;

  constructor(private X:FormBuilder) { }

  ngOnInit() {this.addPlatForm= this.X.group({
    name: ['', [Validators.required, Validators.minLength(3)]],//validateur obligatoire
    description: ['',[Validators.required]],
    price: ['',[Validators.required]],
    
  })
  }
  addPlat(){

  }
}
