import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  NavigationCancel,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import {first, Observable} from 'rxjs';
import {take, tap} from 'rxjs/operators';
import {AuthService} from "@auth0/auth0-angular";

@Injectable({
  providedIn: 'root',
})
export class Auth0Guard implements CanActivate, CanLoad, CanActivateChild {
  constructor(private auth: AuthService, private _router: Router) {
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.auth.isAuthenticated$.pipe(take(1), tap((loggedIn) => {
      if (!loggedIn) {
        this._router.events.pipe(first(event => event instanceof NavigationCancel)).subscribe((event: NavigationCancel) => {
          this.auth.loginWithRedirect({
            appState: {target: event.url},
          });
        });
      }
    }));
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.redirectIfUnauthenticated(state);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.redirectIfUnauthenticated(state);
  }

  private redirectIfUnauthenticated(
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.auth.isAuthenticated$.pipe(
      tap((loggedIn) => {
        if (!loggedIn) {
          this.auth.loginWithRedirect({
            appState: {target: state.url},
          });
        }
      })
    );
  }
}
