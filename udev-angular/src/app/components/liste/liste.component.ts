import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../models/user';
import {UserRepository} from '../../services/user.repository';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ngu-liste-user',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  listeUser: Observable<User[]>;

  constructor(
    private route: ActivatedRoute,
    private userService: UserRepository
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.listeUser = this.userService.all();
    });
  }

}
