import { Injectable } from '@angular/core';
import * as _how from 'howler'
import { Numeric } from 'd3';
@Injectable()
export class PlayerService {


 volume : number = 0.8;
  constructor() { }
//'https://upload.wikimedia.org/wikipedia/en/d/d0/Rick_Astley_-_Never_Gonna_Give_You_Up.ogg'

  public firePlayer(url:string,loop:boolean,volume:number) : Howl {
    var sound = new _how.Howl({
      src: [url],
      autoplay: true,
      loop: loop,
      volume: volume
    });
return sound;


  }

  public WaterPlayer(url:string,loop:boolean,volume:number) :Howl {
    var sound = new _how.Howl({
      src: [url],
      autoplay: true,
      loop: loop,
      volume: volume
    });
    return sound;


  }

  // sound.play();
  // sound.stop();
}
