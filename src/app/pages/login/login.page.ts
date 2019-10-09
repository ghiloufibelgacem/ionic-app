import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {AuthService} from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

// const USERNAME='username';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  message:string;

  constructor(private router: Router ,private auth:AuthService,private fAuth:AngularFireAuth)
  {
    this.email = "";
    this.password = "";
  }

  ngOnInit() {}

async  login() {
    // get tocken from backend
    try {
      // code here
      // this.auth.setTocken("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      // this.auth.login();
      //fin
      let response = await this.fAuth.auth.signInWithEmailAndPassword(this.email,this.password);
      if (response) {
        console.log("Successfully logged in!");
        console.log(response.user.uid);
        this.auth.setTocken(response.user.uid);
        this.auth.login();
        this.router.navigateByUrl('/menu/home');
      }
    } catch (err) {
      console.error(err);
      this.message = err.message;
    }
  }
}
