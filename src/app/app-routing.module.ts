import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {AboutComponent} from './about/about.component'
import { from } from 'rxjs';

const routes: Routes = [
  {path:'',component:MyProfileComponent},
  {path:'about',component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
