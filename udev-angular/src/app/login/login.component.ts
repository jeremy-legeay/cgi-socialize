import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'ngu-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false;

  usernameFormControl = new FormControl('',[
    Validators.required
  ]);
  passwordFormControl = new FormControl('',[
    Validators.required
  ]);

  constructor(private router: Router,
              private loginservice: AuthenticationService) {
  }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password) ) {
      this.router.navigate(['/library'])
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
