import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import{Router} from '@angular/router';
import {NotificationService} from '../../services/notification.service';
import{HttpClient} from '@angular/common/http';
import { Device } from '@ionic-native/device/ngx';
import {environment} from '../../../environments/environment';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import {
  NativeGeocoder,
  NativeGeocoderResult,
  NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  name:string;
  email:string;
  password:string;
  message:string;

  constructor(private fAuth:AngularFireAuth,
              private router:Router,
              private notification:NotificationService,
              private http:HttpClient,
              private device:Device,
              private geolocation:Geolocation,
              private nativeGeocoder:NativeGeocoder) {}

ngOnInit() {}

async register()
{
   try {
       let response = await this.fAuth.auth.createUserWithEmailAndPassword(this.email,this.password);
       if (response)
       {
         
          let username =this.name;
          let pushToken =this.notification.getPushTocken();
          let email =this.email;
          let device =this.device.platform;;
          let version =this.device.version;
          console.log(' register : before send request to the server');

          this.locationSetup().then((response:any)=>{

            console.log(response);

            let lat = response.first;
            let lng = response.second;
            let address = response.third;

            let data ={username:username,email:email,push:pushToken,device:`${device} ${version}`,location:address,lat:lat,lng:lng};
            console.log(data);
            this.http.post(environment.SERVER_URL,data).subscribe((response)=>{
                      console.log(" request has been send successfuly !!!!!");
                      console.log(response);
                    });

            });
         // navigate  to login page 
        this.router.navigate(['login']);
       }

     } catch (err)
     {
       // console.error(err);
       this.message = err.message;
     }
}


getAdress(lat,lng)
{
  return new Promise((resolve,reject)=>
  {
     let address = '';
     let options: NativeGeocoderOptions =

     {
      useLocale: true,
      maxResults: 5,
     };

           this.nativeGeocoder.reverseGeocode(lat,lng,options).then((result: NativeGeocoderResult[]) =>
            {
              address = " ";
              let responseAddress = [];
              for (let [key, value] of Object.entries(result[0])) {
                if(value.length > 0)
                responseAddress.push(value);
              }
              responseAddress.reverse();
              for (let value of responseAddress) {
                address += value+", ";
              }
              address = address.slice(0, -2);
              console.log(' get Address :  address is resolved wihout errer');
              resolve(address);  
            })
            .catch((error: any) =>{
              address  = "Address Not Available!";
              console.log(' get Address :  address is resolved with errer');
              resolve(address);
              console.log(error);
            });      
  });
}

locationSetup()
{ 

  return new Promise((resolve,reject)=>
      {

        this.geolocation.getCurrentPosition().then((response)=>{
        let lat = response.coords.latitude;
        let lng = response.coords.longitude;
        let address ='';
         this.getAdress(lat,lng).then((response :any)=>{
           console.log(response);
           address = response;
           let data = {first:lat,second:lng,third:address};
           resolve(data);

         });
        

        });
                      
      });
}

}
