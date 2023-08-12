import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {
  addChefForm:FormGroup;
  constructor(private X:FormBuilder) { }

  ngOnInit() {this.addChefForm= this.X.group({
    name: ['', [Validators.required, Validators.minLength(3)]],//validateur obligatoire
    specialty: ['',[Validators.required]],
    experience: ['',[Validators.required]],
    
  })
  }
 addChef(){

 }
}
