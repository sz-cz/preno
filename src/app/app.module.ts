import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationModule } from './reservation/reservation.module';
import { ServicesService } from './core/services/services.service';
import { SharedModule } from './shared/shared.module';
import { NavigationComponent } from './core/navigation/navigation.component';
import { CoreModule } from './core/core.module';
import { WorkersService } from './core/services/workers.service';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { AngularFirestore } from '@angular/fire/firestore';

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
    MatDatepickerModule
  ],
  providers: [AngularFirestore, ServicesService, WorkersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
