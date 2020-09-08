import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{

  secondes: number;
  counterSubscription: Subscription;
  constructor(){}

  ngOnInit()
  {
    const counter = interval(1000);
    // subscribe =>observe une observable et y réagir
    //trois fonctions : la première va se déclencher à
    // chaque émission de données par l'Observable et
    // va attribuer cette valeur à la variable "secondes" ;
    // la deuxième gèrera toute erreur éventuelle ; et
    // la troisième se déclenchera si l'Observable s'achève
   this.counterSubscription = counter.subscribe(
     (value: number) =>{
       this.secondes = value;
     }
    );
  }
  ngOnDestroy(){
    // detruit la subscription à la fin de la vie du component
    this.counterSubscription.unsubscribe();
  }
}
