import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { NotecardsSetMenuComponent } from './components/notecards-set-menu/notecards-set-menu.component';
const redirectUnauthorized = () => redirectUnauthorizedTo(['login']);
const redirectLoggedIn = () => redirectLoggedInTo(['dashboard']);
const routes: Routes = [
  { path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {path: 'login',
  component: LoginComponent,
  ...canActivate(redirectLoggedIn)
},
{path: 'dashboard',
component: DashboardComponent,
...canActivate(redirectUnauthorized)
},
{
  path: 'create-set',
  component:NotecardsSetMenuComponent,
  ...canActivate(redirectUnauthorized)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
