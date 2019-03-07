import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaxoecomponentComponent } from './maxoecomponent/maxoecomponent.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PeppiecomponentComponent } from './peppiecomponent/peppiecomponent.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'maxoe', component: MaxoecomponentComponent },
  { path: 'peppie', component: PeppiecomponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
