import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMsg: String;
  constructor(private X: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.signupForm = this.X.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],//validateur obligatoire
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required,
        // Validators.pattern(‘(1=.*[a-z])(1=.*[A-Z])(1=.*[0-9])(1=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,10}’)]
      ]]
    })
  }

  signup() {
    console.log('here signup clicked', this.signupForm.value);
    this.userService.signup(this.signupForm.value).subscribe(
      (response) => {
        console.log('here resp from BE', response);
        if (response.msg == 'Error with signup') {
          this.errorMsg = response.msg;
        } else {
          this.router.navigate(['login']);

        }
      }
    );
  }
}

