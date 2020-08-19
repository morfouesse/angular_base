import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

//Ces propriétés sont donc des inputs du composant
// aparail et il est maintenant possible
// de les initialiser dans la balise app-apparail.
@Input() appareilName: string;
@Input() appareilStatus: string;
@Input() indexOfAppareil: number;
@Input() id: number;


  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }
  
  getStatus()
  {
    return this.appareilStatus;
  }

  getColor()
  {
    if(this.appareilStatus === 'on')
    {
      return 'green';
    }
    else if(this.appareilStatus === 'off')
    {
      return 'red';
    }
  }
  onSwitchOn()
  {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }
  onSwitchOff()
  {
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}
