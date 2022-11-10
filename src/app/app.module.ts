import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NevBarComponent } from './nev-bar/nev-bar.component';
import { FormDetailComponent } from './form-detail/form-detail.component';
import { TableDetailComponent } from './table-detail/table-detail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NevBarComponent,
    FormDetailComponent,
    TableDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
