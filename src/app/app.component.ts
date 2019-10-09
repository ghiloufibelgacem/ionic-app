import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';
import {environment} from '../environments/environment';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import {ToastController} from '@ionic/angular';
import{NotificationService} from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth:AuthService,
    private router:Router,
    private oneSignal:OneSignal,
    private notification:NotificationService,
    private toast:ToastController
  ) {
    this.initializeApp();
    }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.oneSignalPush();
      console.info(' after initilization of oneSignal !!!!!!!!!!!');
      this.auth.authenticationState.subscribe((state)=>{
        console.log('login state :' +state);
        if(state)
        {
          this.router.navigate(['menu','home']);
        }
        else
        {
         this.router.navigate(['login']);
        }
      });
    });
  }

  // setup one OneSignal
  oneSignalPush()
  {

  this.oneSignal.startInit(environment.ONESIGNAL_APP_ID,environment.ANDROID_ID);
  this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

  // Notifcation was received in general
  this.oneSignal.handleNotificationReceived().subscribe(data => {
    let title = data.payload.title;
    let body = data.payload.body;
    let notif ={title:data.payload.title,content:data.payload.body,img:'./assets/images/60.png'};
    this.notification.setNotification(notif);
    // console.log(notif);
    // console.log("notification is received");
    // show toast
    this.toast.create({
      message:title+'\n'+ body,
      showCloseButton: true,
      duration: 5000,
      color:'primary',
    }).then((toast) =>{
      toast.present();
    });
  });

  // Notification was really clicked/opened
  this.oneSignal.handleNotificationOpened().subscribe(data => {
    // Just a note that the data is a different place here!
    // let additionalData = data.notification.payload.additionalData;
  });

  this.oneSignal.endInit();
  // get user pushTocken and store it in the local storage
  this.oneSignal.getIds().then((id) => {
    console.log(id);
    this.notification.setPushTocken(id.userId);
    console.log("tocken is set successfuly");

   }).catch((error)=>{
     console.log(error);
   });
}

}
