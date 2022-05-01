import {Component, OnInit} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {Router} from '@angular/router';


@Component({
  selector: 'app-auth',
  template: ``,
  styles: []
})
export class AuthComponent implements OnInit {


  constructor(private _router: Router, public auth: AuthService) {

  }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(async (loggedIn) => {
      if (!loggedIn) await this._router.navigateByUrl('/');
    })
  }

}
