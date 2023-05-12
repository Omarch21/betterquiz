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
cards: any[] = [];
divArray: number[] = [];
divCount: number=5;
flipCard(event: Event){
  const cardContainer = (event.target as HTMLElement).closest('.card-container');
  if(cardContainer){
    cardContainer.classList.toggle('flipped');
  }
}
ngOnInit():void{
  this.divCount = 10;
  const count = 10;
  this.user$.subscribe((user) =>{
    const value= user?.val;
  if(value){
  this.divArray = Array(value).fill(0).map((x,i)=>i);
  const cardContainer = document.querySelectorAll('.card-container') as NodeListOf<HTMLElement>
  console.log(cardContainer);
  if(value > 0){
    this.cardwidth = cardContainer[0].offsetWidth ;
    for (let i = 0; i < value; i++) {

      this.cards.push(i);
    }

  }
}
})
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
  console.log(this.cards)
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