import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

 isAuth = false;
 lastUpdate = new Promise(
  (resolve,reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
    }
 )

 appareils: any[];

 
 constructor(private appareilService: AppareilService)// liaison par interpolarition
 {
   setTimeout(
    () =>{
      this.isAuth = true;
    },4000
   );
 }
 onAllumer()//liaison par évènnement
 {
  this.appareilService.switchOnAll();
 }

 onEteindre()//liaison par évènnement
 {
   this.appareilService.switchOffAll();
 }

 ngOnInit(){//called after the constructor and called  after the first ngOnChanges()   
   // prend les appareils et les mets dans unn tableau
   this.appareils = this.appareilService.appareils;
 }
}
