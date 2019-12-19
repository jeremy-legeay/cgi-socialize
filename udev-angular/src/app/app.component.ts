import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'ngu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private location: Location, private router: Router, private loginService: AuthenticationService) {
  }

  ngOnInit() {}
}
