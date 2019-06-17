import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  addressForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  });
  lecturerId: number;

  validation_messages = {
    'username': [
      { type: 'required', message: 'username is <strong>required</strong>' },
    ],
    'password': [
      { type: 'required', message: 'the password is <strong>required</strong>' }
    ]
  };
  hide = true;
  returnUrl: string;

  constructor(private fb: FormBuilder, private router: Router
    , private authenService: AuthenticationService, private route: ActivatedRoute) { }

  isError = false;
  home: Boolean;
  ngOnInit(): void {
    // reset login status
    this.authenService.logout();
    this.isError = false;
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    if (this.returnUrl === '/') {
      this.home = true;
    } else {
      this.home = false;
    }
    console.log('return url ' + this.returnUrl);
  }

  onSubmit() {
    const value = this.addressForm.value;
    this.authenService.login(value.username, value.password)
      .subscribe(
        data => {
          this.isError = false;
          this.router.navigate([this.returnUrl]);
          alert(' work');
        },
        error => {
          this.isError = true;
          alert('doesnt work');
        }
      );
    console.log(this.addressForm.value);
  }

}
