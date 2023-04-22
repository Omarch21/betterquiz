import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeLink = 'home';
  title = 'betterquiz';
setActiveLink(link:string){
this.activeLink = link;
}
}
