import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayAdminComponent } from './components/displayAdmin/displayAdmin.component';
import { DisplayOnboardeeComponent } from './components/displayOnboardee/displayOnboardee.component';
import { AddOnboardeeComponent} from './components/addOnboardee/addOnboardee.component';
import { AddAdminComponent } from './components/addAdmin/addAdmin.component';
import { UpdateOnboardeeComponent } from './components/updateOnboardee/updateOnboardee.component';
import { UpdateAdminComponent } from './components/updateAdmin/updateAdmin.component';
// import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/displayOnboardee', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  { path: 'displayOnboardee' , component:DisplayOnboardeeComponent},
  { path: 'displayAdmin' , component:DisplayAdminComponent},
  { path: 'addOnboardee' ,component:AddOnboardeeComponent},
  { path: 'addAdmin' ,component:AddAdminComponent},
  { path: 'updateOnboardee/:emailID', component:UpdateOnboardeeComponent},
  { path: 'updateAdmin/:aemail', component:UpdateAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
