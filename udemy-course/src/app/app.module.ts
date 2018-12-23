import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListofprodService } from './listofprod.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { SignComponent } from './auth/sign/sign.component';
import { LoginComponent } from './auth/login/login.component';
import { HampersComponent } from './hampers/hampers.component';
import { HampersDetailsComponent } from './hampers-details/hampers-details.component';
import { CustomBasketsComponent } from './custom-baskets/custom-baskets.component';
import { NewAdditionsComponent } from './new-additions/new-additions.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { LoggingCheckService } from './logging-check.service';
import { AuthService } from './auth.service';



// import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    LoginComponent,
    HampersComponent,
    HampersDetailsComponent,
    CustomBasketsComponent,
    NewAdditionsComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [ListofprodService,LoggingCheckService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {

  

  
  
 }
