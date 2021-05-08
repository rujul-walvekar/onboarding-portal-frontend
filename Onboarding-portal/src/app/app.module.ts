import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayOnboardeeComponent} from './components/displayOnboardee/displayOnboardee.component';
import { RouterModule} from "@angular/router";
import { FormsModule} from "@angular/forms";
import { ChartModule } from 'angular-highcharts';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from 'angularx-social-login';

import { HttpClientModule } from '@angular/common/http'
import { DisplayAdminComponent } from './components/displayAdmin/displayAdmin.component';
import { AddOnboardeeComponent } from './components/addOnboardee/addOnboardee.component';
import { AddAdminComponent } from './components/addAdmin/addAdmin.component';
import { UpdateAdminComponent } from './components/updateAdmin/updateAdmin.component';
import { UpdateOnboardeeComponent } from './components/updateOnboardee/updateOnboardee.component';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayOnboardeeComponent,
    DisplayAdminComponent,
    AddOnboardeeComponent,
    AddAdminComponent,
    UpdateOnboardeeComponent,
    UpdateAdminComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule,
    ChartModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',  // Used for Open Authentication as AccoliteDigital
      useValue: {
        autoLogin:false,
      providers:[ 
        { 
          id : GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
        '422614742250-ehigpoc263kibvo3ml1hdvpnbnces95i.apps.googleusercontent.com')
        }
      ]
    } as SocialAuthServiceConfig,
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
