import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { DetailsComponent } from './views/details/details.component';

const routes: Routes = [
  { path: 'movie', component: HomeComponent },
  { path: 'tv-show', component: HomeComponent },
  { path: 'anime', component: HomeComponent },

  { path: 'movie/:id', component: DetailsComponent },
  { path: 'tv-show/:id', component: DetailsComponent },
  { path: 'anime/:id', component: DetailsComponent },

  { path: '**', redirectTo: 'movie' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
