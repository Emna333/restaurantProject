import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      pwd: ['',[Validators.required]],

    })
  }
  login() {
    console.log('here login clicked', this.loginForm.value);
    this.userService.login(this.loginForm.value).subscribe((response)=>{
      console.log('here final resp from BE' , response);

    }

    );
  }


}
