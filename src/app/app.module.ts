import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule // import the FormsModule before binding with [(ngModel)]
  ],
  declarations: [ //You must declare every component in an NgModule class.
    AppComponent,
    HeroDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
