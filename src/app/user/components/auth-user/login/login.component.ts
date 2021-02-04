import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromUserStore from 'user/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private UserStore$: Store<fromUserStore.UserState>) { }

  ngOnInit(): void {
  }
submit()
{
  let x = {number:12,password:'1234'}
  this.UserStore$.dispatch(new fromUserStore.Login(x));
}
}
