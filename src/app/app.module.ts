import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import{HttpClientModule} from  '@angular/common/http';
import{IonicStorageModule} from  '@ionic/storage';

// import firebase
import {AngularFireModule} from '@angular/fire';
import{AngularFireAuthModule} from '@angular/fire/auth';
import{environment} from '../environments/environment';
//import geolocation
import { Geolocation } from '@ionic-native/geolocation/ngx';
//import one signal
import { OneSignal } from '@ionic-native/onesignal/ngx';
// import device
import { Device } from '@ionic-native/device/ngx';
//import native geocoder
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    OneSignal,
    Device,
    NativeGeocoder,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
