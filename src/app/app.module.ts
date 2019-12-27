import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationModule } from './reservation/reservation.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AngularFirestore } from '@angular/fire/firestore';
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { UserModule } from './user/user.module';
import { AuthService, BookingsService, ServicesService, UiService, UsersService, WorkersService } from './core/services'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    ReservationModule,
    SharedModule,
    CoreModule,
    AdminModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    UserModule
  ],
  providers: [AngularFirestore, BookingsService, ServicesService, WorkersService, AuthService, UiService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
