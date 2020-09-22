import { Subject } from 'rxjs';


export class AppareilService{

  //Il existe un type d'Observable qui permet non seulement de réagir
  // à de nouvelles informations, mais également d'en émettre.
  //Imaginez une variable dans un service, par exemple, qui peut être modifié
  // depuis plusieurs components ET qui fera réagir tous les components qui y
  // sont liés en même temps.  Voici l'intérêt des Subjects.
  
  //Quand vous déclarez un Subject, il faut dire quel type de données il gere
  appareilSubject = new Subject<any[]>();
  private appareils=[
        {
          id: 1,
          name:"machine à laver",
          status:"off"
        },
        {
          id: 2,
          name:"ordi",
          status:"on"
        },
        {
          id: 3,
          name:"aspi",
          status:"off"
        }
      ];
      //le subject emet la liste des appareils
      emitAppareilSubject()
      {
        //slice = copy
        this.appareilSubject.next(this.appareils.slice());
      }
       /*appareilOne = "machine à laver";
       appareilTwo = "télé";*/

      // find => cherche dans un tableau,
      // on donne un parametre et on fait ce qu'on veut avec
      getAppareilById(id: number){
        const appareil = this.appareils.find(
          appareilObject => {
            return appareilObject.id === id;
          }
        );
        return appareil;
      }

      switchOnAll(){
          for(let appareil of this.appareils)
          {
            appareil.status = 'on';
          }
          this.emitAppareilSubject();
      }
      switchOffAll(){
        for(let appareil of this.appareils)
        {
          appareil.status = 'off';
        }
        this.emitAppareilSubject();
    }

    switchOnOne(index:number)
    {
      this.appareils[index].status = "on";
      this.emitAppareilSubject();
    }
    switchOffOne(index:number)
    {
      this.appareils[index].status = "off";
      this.emitAppareilSubject();
    }

    addAppareil(name: string, status: string)
  {
    const appareilObject = {
        id: 0,
        name: "",
        status: ""
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1 )].id +1; 
    //ajoute au tableau 
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }
}