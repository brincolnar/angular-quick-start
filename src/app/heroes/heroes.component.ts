import { Component, OnInit } from '@angular/core';
import { Hero } from  '../hero';
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  styles: ['h2 { color: red }'] // defined by me
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = []; 

  constructor(private heroService: HeroService, private messageService: MessageService) { } // injection

  ngOnInit(): void { // after creating component
    this.getHeroes();
  }

  getHeroes(): void {
    
    // waits for heroes to be fetched
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
