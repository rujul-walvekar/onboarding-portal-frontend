import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayOnboardeeComponent} from './components/displayOnboardee/displayOnboardee.component';
import { RouterModule} from "@angular/router";
import { FormsModule} from "@angular/forms";

import { HttpClientModule } from '@angular/common/http'
import { DisplayAdminComponent } from './components/displayAdmin/displayAdmin.component';
import { AddOnboardeeComponent } from './components/addOnboardee/addOnboardee.component';
import { AddAdminComponent } from './components/addAdmin/addAdmin.component';
import { UpdateAdminComponent } from './components/updateAdmin/updateAdmin.component';
import { UpdateOnboardeeComponent } from './components/updateOnboardee/updateOnboardee.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayOnboardeeComponent,
    DisplayAdminComponent,
    AddOnboardeeComponent,
    AddAdminComponent,
    UpdateOnboardeeComponent,
    UpdateAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
