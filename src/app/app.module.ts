import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Number2Component } from './question/number2/number2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Com1Component } from './question/number-4/com1/com1.component';
import { Com2Component } from './question/number-4/com2/com2.component';
import { Com3Component } from './question/number-4/com3/com3.component';
import { NavBarComponent } from './question/number-4/nav-bar/nav-bar.component';
import { TreksComponent } from './question/number-3/treks/treks.component';

@NgModule({
  declarations: [
    AppComponent,
    Number2Component,
    Com1Component,
    Com2Component,
    Com3Component,
    NavBarComponent,
    TreksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
