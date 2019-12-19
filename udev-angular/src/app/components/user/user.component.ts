import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../models/user';
import {UserRepository} from '../../services/user.repository';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'ngu-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [
    trigger('slideToggle', [
      state('initial', style({
        transform: 'translateY(-100%)'
      })),
      state('final', style({
        transform: 'translateY(0%)'
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ])
    // trigger('slideInOut', [
    //   transition(':enter', [
    //     style({transform: 'translateY(-100%)'}),
    //     animate('200ms ease-in', style({transform: 'translateY(0%)'}))
    //   ]),
    //   transition(':leave', [
    //     animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
    //   ])
    // ])
  ]
})
export class UserComponent implements OnInit {

  listeUser: Observable<User[]>;
  visible: boolean;

  constructor( private userService: UserRepository) {
  }

  ngOnInit() {
    this.listeUser = this.userService.all();
    this.visible = false;
  }

  toggleUsersList() {
    if (this.visible === false) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }
}
