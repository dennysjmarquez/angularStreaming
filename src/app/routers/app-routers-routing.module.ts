import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Routers


const APP_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        pathMatch: 'full',
        path: '',
        loadChildren: () => import('../pages/public-zone/home/home.module').then(module => module.HomeModule),
      },
      {
        path: 'movies',
        loadChildren: () => import('../pages/movies-zone/movies/movies.module').then(module => module.MoviesModule),
      }
    ]
  },
  {path: '', pathMatch: 'full', redirectTo: '/'},
];

const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});

@NgModule({
  declarations: [],
  imports: [APP_ROUTING,],
  exports: [RouterModule],
})
export class AppRoutersModule {
}
