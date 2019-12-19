import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../models/user';
import {UserRepository} from '../../services/user.repository';

@Component({
  selector: 'ngu-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  listeUser: Observable<User[]>;

  constructor(
    private userService: UserRepository
  ) {
  }

  ngOnInit() {
    this.listeUser = this.userService.all();
  }

}
