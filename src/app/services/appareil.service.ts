export class AppareilService{
    appareils=[
        {
          name:"machine à laver",
          status:'off'
        },
        {
          name:"ordi",
          status:'on'
        },
        {
          name:"aspi",
          status:'off'
        }
      ];
       /*appareilOne = "machine à laver";
       appareilTwo = "télé";*/
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