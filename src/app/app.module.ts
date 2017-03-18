import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VolunteerSignupComponent } from './VolunteerSignup/volunteer-signup.component';

@NgModule({
  imports: [BrowserModule],

  declarations: [AppComponent,
    VolunteerSignupComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
