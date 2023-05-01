import { Component, ViewChild,ElementRef,AfterViewInit,OnInit, Renderer2 } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  

constructor(private usersService: UsersService, private renderer: Renderer2){}
user$ = this.usersService.getCurrentAccountProfile$;
card: HTMLElement |  null = null;
cardindex = 0;
cardwidth:number = 0;
cards: HTMLElement[] = [];
flipCard(event: Event){
  const cardContainer = (event.target as HTMLElement).closest('.card-container');
  if(cardContainer){
    cardContainer.classList.toggle('flipped');
  }
}
ngOnInit():void{
  const cardContainer = document.querySelectorAll('.card-container') as NodeListOf<HTMLElement>
  if(cardContainer.length > 0){
    this.cardwidth = cardContainer[0].offsetWidth ;
    for (let i = 0; i < cardContainer.length; i++) {
      this.renderer.setStyle(cardContainer[i], 'width', `${this.cardwidth}px`);
      this.cards.push(cardContainer[i]);
    }

  }
}



nextCard(): void {
  if (this.cardindex === this.cards.length - 1) {
    this.cardindex = 0;
  } else {
    this.cardindex++;
  }
  const leftPosition = -(this.cardindex * this.cardwidth) ;
  const carousel = document.querySelector('.card-carousel') as HTMLElement;
  carousel.style.transform = `translateX(${leftPosition}px)`;
  console.log(this.cardwidth);
}

prevCard(): void {
  if (this.cardindex === 0) {
    this.cardindex = this.cards.length - 1;
  } else {
    this.cardindex--;
  }
  const leftPosition = -(this.cardindex * this.cardwidth);
  const carousel = document.querySelector('.card-carousel') as HTMLElement;
  carousel.style.transform = `translateX(${leftPosition}px)`;
}
  }