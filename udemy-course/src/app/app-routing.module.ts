import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignComponent } from './auth/sign/sign.component';
import { LoginComponent } from './auth/login/login.component';
import { HampersComponent } from './hampers/hampers.component';
import { HampersDetailsComponent } from './hampers-details/hampers-details.component';
import { CustomBasketsComponent } from './custom-baskets/custom-baskets.component';
import { NewAdditionsComponent } from './new-additions/new-additions.component';
import {UserProfileComponent} from './user-profile/user-profile.component';


const routes: Routes = [
  {path:'', component:WelcomeComponent},
  {path:'sign', component:SignComponent},
  {path:'login', component:LoginComponent},
  {path:'hampers', component:HampersComponent},
  {path:'hampers-details', component:HampersDetailsComponent},
  {path:'custom', component:CustomBasketsComponent},
  {path:'new-additions', component:NewAdditionsComponent},
  {path:'user-profile', component:UserProfileComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
