import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationModule } from './reservation/reservation.module';
import { ServicesService } from './core/services/services.service';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { WorkersService } from './core/services/workers.service';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { AngularFirestore } from '@angular/fire/firestore';
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './core/services/auth.service';
import { UiService } from './core/services/ui.service';
import { UsersService } from './core/services/users.service';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { UserModule } from './user/user.module';


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
    MatDatepickerModule,
    AdminModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    UserModule
  ],
  providers: [AngularFirestore, ServicesService, WorkersService, AuthService, UiService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
