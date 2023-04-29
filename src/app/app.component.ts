import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router:Router, private usersService: UsersService, private authService: AuthService){}
  user$ = this.usersService.getCurrentAccountProfile$;
  activeLink = '';
  title = 'betterquiz';
setActiveLink(link:string){
this.activeLink = link;
}
logout(){
  this.authService.logout().subscribe(()=>{
    this.router.navigate(['/']);
  })
}
}
