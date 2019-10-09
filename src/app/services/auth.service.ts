import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Storage} from '@ionic/storage';
import {Platform} from '@ionic/angular';
const TOKEN_KEY='auth-token';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticationState = new BehaviorSubject(false);
  tocken:string;
  constructor(private storage:Storage,private plt:Platform)
   {
      this.plt.ready().then (()=>{
      this.checkTocken();
   });

   }

   setTocken(tocken:string)
   {
     this.tocken = tocken;
   }

  login()
  {
    return this.storage.set(TOKEN_KEY,this.tocken).then(res=>{
      console.log(res);
      this.authenticationState.next(true);
    });
  }
  logout()
  {
    this.storage.remove(TOKEN_KEY).then(()=>{
      this.authenticationState.next(false);
    });
  }
  isAuthenticated()
  {
    return this.authenticationState.value;
  }
  checkTocken()
  {
    this.storage.get(TOKEN_KEY).then((res)=>{
      if(res)
      {
        this.authenticationState.next(true);
      }
      // TODO: do somthing if the tocken is not valide
    });
  }
}
