export class AppareilService{
    appareils=[
        {
          id: 1,
          name:"machine à laver",
          status:'off'
        },
        {
          id: 2,
          name:"ordi",
          status:'on'
        },
        {
          id: 3,
          name:"aspi",
          status:'off'
        }
      ];
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
      }
      switchOffAll(){
        for(let appareil of this.appareils)
        {
          appareil.status = 'off';
        }
    }

    switchOnOne(index:number)
    {
      this.appareils[index].status = "on";
    }
    switchOffOne(index:number)
    {
      this.appareils[index].status = "off";
    }
}