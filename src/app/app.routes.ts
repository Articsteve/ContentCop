import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DescriptionComponent } from './components/description/description.component';
import { KeywordComponent } from './components/keyword/keyword.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'description/:id', component: DescriptionComponent },
  { path: 'keyword/:word', component: KeywordComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
