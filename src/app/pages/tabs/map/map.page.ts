import { Component, OnInit } from '@angular/core';
import { Map,tileLayer, marker , icon} from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {
  NativeGeocoder,
  NativeGeocoderResult,
  NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

import {environment} from '../../../../environments/environment';
import{HttpClient} from '@angular/common/http';
import {NotificationService} from '../../../services/notification.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map: Map;
  address:string;
  lat:number;
  lng:number;
  //location:marker;
  constructor(private geolocation:Geolocation,private nativeGeocoder: NativeGeocoder,private http:HttpClient
    ,private notification:NotificationService) {}

  ngOnInit() {}

  ionViewDidEnter() { this.leafletMap(); }
  // init map
  leafletMap()
  {   
        // get current location
        this.geolocation.getCurrentPosition().then((resp) => {

          this.map = new Map('mapId').setView([resp.coords.latitude,resp.coords.longitude],5);
          this.map.dragging.disable();
          this.map.touchZoom.disable();
          this.map.doubleClickZoom.disable();
          this.map.scrollWheelZoom.disable();

          tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
          {
          attribution: 'edupala.com © ionic LeafLet',
          }).addTo(this.map);

          const customMarkerIcon = icon({
		      iconUrl: 'assets/images/custom-marker-icon.png',
		      iconSize: [24,24], 
		      popupAnchor: [0, -20]
    		});

          marker([resp.coords.latitude,resp.coords.longitude],{icon: customMarkerIcon}).addTo(this.map)
          .bindPopup(` your location !!!`);
         //set address
        this.getAddressFromCoords(resp.coords.latitude,resp.coords.longitude);

        }).catch((error) => {
          console.log('Error getting location', error);
        });
 }

 currentLoction()
 {
   this.geolocation.getCurrentPosition().then((response)=>{
      this.lat = response.coords.latitude;
      this.lng = response.coords.longitude;
      this.map.setView([response.coords.latitude,response.coords.longitude],13);
      this.getAddressFromCoords(response.coords.latitude,response.coords.longitude);
   });
 }

// get address from position
getAddressFromCoords(lattitude, longitude)
{
    console.log("getAddressFromCoords "+lattitude+" "+longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = "";
        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if(value.length>0)
          responseAddress.push(value);
        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value+", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) =>
      {
        this.address = "Address Not Available!";
        console.log(error);
      });
  }

  send()
  {   
      console.log('send function is called successfuly');
      let device = this.notification.getPushTocken();
      let data = {device_id:device,location:this.address,lat:this.lat,lng:this.lng};
      this.http.post(environment.SERVER_URL_SET_LOCATION,data).subscribe((response)=>{
            console.log(response);
      });
  }
}
