import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Auth0Guard} from "../guards/auth0.guard";

// Routers
const APP_ROUTES: Routes = [
  {
    pathMatch: 'full',
    path: '',
    loadChildren: () => import('../pages/public-zone/home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('../pages/auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: 'movies',
    canLoad: [Auth0Guard],
    canActivate: [Auth0Guard],
    loadChildren: () => import('../pages/movies-zone/movies/movies.module').then(module => module.MoviesModule)
  },
  {path: '', pathMatch: 'full', redirectTo: '/'}
];

const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

@NgModule({
  declarations: [],
  imports: [APP_ROUTING,],
  exports: [RouterModule],
})
export class AppRoutersModule {
}
