import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeContentComponent } from './components/home-content/home-content.component';

@NgModule({
  declarations: [HomeComponent, HomeContentComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
