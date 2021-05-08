import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:SocialAuthService, private router: Router) { }

  ngOnInit() {
  }
  SignIn(){
    this.authservice.signIn(GoogleLoginProvider.PROVIDER_ID).then(socialusers => {  
      console.log(socialusers);

      // localStorage.setItem("name" ,socialusers.firstName);
      this.router.navigate(['/displayOnboardee']);
    }).catch(err=>{
      alert('Login Unsuccessful');
      console.log(err);
    }
      );

  }
}