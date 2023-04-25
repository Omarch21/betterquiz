import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard'
const redirectUnauthorized = () => redirectUnauthorizedTo(['login']);
const redirectLoggedIn = () => redirectLoggedInTo(['home']);
const routes: Routes = [
  { path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {path: 'login',
  component: LoginComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
