import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPayPalModule } from 'ngx-paypal';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MyfooterComponent } from './components/myfooter/myfooter.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DonateComponent } from './components/donate/donate.component';
import { EducationPathComponent } from './components/about-me/education-path/education-path.component';
import { CarrerPathComponent } from './components/about-me/carrer-path/carrer-path.component';
import { ContactComponent } from './components/contact/contact.component';
import { TechnologiesComponent } from './components/projects/technologies/technologies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ProfileComponent,
    AboutMeComponent,
    MyfooterComponent,
    HomeComponent,
    ProjectsComponent,
    DonateComponent,
    EducationPathComponent,
    CarrerPathComponent,
    ContactComponent,
    TechnologiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPayPalModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
