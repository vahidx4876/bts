

import { Injectable } from '@angular/core';
import { NotificationService } from './NotificationService';
import { BTSNotification } from './ServicesModels';
import { not } from '@angular/compiler/src/output/output_ast';
import * as _mqtt from 'mqtt'
@Injectable()
export class RealTimeService {

    client: _mqtt.MqttClient;
 constructor(private messageService: NotificationService) { 

 

 }

public BrodaCast(){
    // var notifMsg = new Notification();
    // notifMsg.alarmUrl = "https://upload.wikimedia.org/wikipedia/en/d/d0/Rick_Astley_-_Never_Gonna_Give_You_Up.ogg";
    // notifMsg.id = "1234";
    // notifMsg.isAlarm = true;
    // notifMsg.state = "Door open";
    // notifMsg.time = "23:43:87";
    // notifMsg.title = "Ahwaz B1";
    // notifMsg.btsName = "Ahwaz B1";
    // notifMsg.btsID = "123456";
    // notifMsg.lat = 35.7;
    // notifMsg.lng = 51.5;

 
  //   this.sendMessage(notifMsg);
}

    sendMessage(message : any): void {
        // send message to subscribers via observable subject
        this.messageService.sendMessage(message);
    }

    clearMessage(): void {
        // clear message
        this.messageService.clearMessage();
    }
  
mqttPublisher(topic:string , payload : string){
    if(this.client != null){
        this.client.publish(topic,payload , { qos: 2, retain: true })
        this.client.on('message', function (topic, message, packet) {
            //Get recived message ......published
            console.log('Received Message published := ' + message.toString() + '\nOn topic:= ' + topic)
          })
    }

}
    mattSubscriber(topic:string){
        if(this.client != null){
            var _this = this;
            this.client.subscribe(topic, { qos: 2 })
            this.client.on('message', function (topic, message, packet) {
                //Get recived message ...... subscribed
                console.log('Received Message subscribed := ' + message.toString() + '\nOn topic:= ' + topic)
               
                try {
                    var obj = JSON.parse(message.toString());
                    var isValid = obj as BTSNotification;
                    if(isValid)
                    _this.sendMessage(obj);
                } catch(e) {
                    alert(e); // error in the above string (in this case, yes)!
                }
             
              })
        }
     

    }
    mqttLauncher(hostport:string , username:string , passwoed : string){
        
    var clientId = 'akamtechno_' + Math.random().toString(16).substr(2, 8)
    
   
    var host = hostport;
    
    var options = {
      keepalive: 10,
      clientId: clientId,
      // protocolId: 'MQTT',
      protocolVersion: 4,
      clean: true,
      reconnectPeriod: 1000,
      connectTimeout: 30 * 1000,
      topic : "test",
      qos: 2,
      retain: false,
      
      // topic: 'WillMsg',
      // payload: 'Connection Closed abnormally..!',
      // retain: false,
      // qos: 0,
      // will: {
      //   topic: 'WillMsg',
      //   payload: 'Connection Closed abnormally..!',
      //   qos: 0,
      //   retain: false
      // },
      username: username,
      password: passwoed,
      rejectUnauthorized: true
    }
    
     this.client = _mqtt.connect(host, options)
    
     this.client.on('error', function (err) {
      console.log(err)
      this.client.end()
    })
    
    this.client.on('connect', function () {
      console.log('client connected:' + clientId)
    })
    
    
    this.client.on('close', function () {
      console.log(clientId + ' disconnected')
    })

  
    }
}


