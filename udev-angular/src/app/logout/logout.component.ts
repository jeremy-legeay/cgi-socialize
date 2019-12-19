import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'ngu-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authentocationService: AuthenticationService,
    private snackBar: MatSnackBar,
    private router: Router) {
  }

  ngOnInit() {
    this.authentocationService.logOut();
    this.router.navigate(['login']);

    this.openSnackBar('You have been disconnected', 'Redirection');
  }
  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    }).afterDismissed().subscribe(null, null, () => {
      this.router.navigate(['/']);
    });
  }

}
