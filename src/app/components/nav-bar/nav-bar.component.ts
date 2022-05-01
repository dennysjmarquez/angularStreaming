import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit(): void {}

  login() {
    this.auth.isAuthenticated$.subscribe((login) => {
      if (login) {
        this.auth.logout({ returnTo: this.doc.location.origin });
      } else {
        this.auth.loginWithRedirect();
      }
    });
  }
}
