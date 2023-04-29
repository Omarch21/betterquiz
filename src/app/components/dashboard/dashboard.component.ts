import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
constructor(private usersService: UsersService){}
user$ = this.usersService.getCurrentAccountProfile$;
card: HTMLElement |  null = null;
flipCard(event: EventTarget| null){
  if(event){
  const cardContainer = event as HTMLElement;
  cardContainer.classList.toggle('flipped');

  }
}
}