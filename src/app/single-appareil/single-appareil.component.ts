import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css']
})
export class SingleAppareilComponent implements OnInit {

  name: string = 'Appareil';
  status: string = 'Statut';
  //ActivatedRoute => contient les infos de la route active 
  constructor(private appareilService: AppareilService
    , private route: ActivatedRoute) { }

  ngOnInit(): void {
    // snapshot => la route courante
    const id = this.route.snapshot.params['id'];
    // + => cast de string en nombre
    this.name = this.appareilService.getAppareilById(+id).name;
    this.status = this.appareilService.getAppareilById(+id).status;

  }

}
