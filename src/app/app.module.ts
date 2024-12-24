import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgxPayPalModule } from 'ngx-paypal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module.js';
import { AppComponent } from './app.component.js';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component.js';
import { AboutMeComponent } from './components/about-me/about-me.component.js';
import { MyfooterComponent } from './components/myfooter/myfooter.component.js';
import { HomeComponent } from './components/home/home.component.js';
import { ProjectsComponent } from './components/projects/projects.component.js';
import { DonateComponent } from './components/donate/donate.component.js';
import { EducationPathComponent } from './components/about-me/education-path/education-path.component.js';
import { CarrerPathComponent } from './components/about-me/carrer-path/carrer-path.component.js';
import { ContactComponent } from './components/contact/contact.component.js';
import { TechnologiesComponent } from './components/projects/technologies/technologies.component.js';
import { ContributionGridComponent } from './components/projects/contribution-grid/contribution-grid.component.js';
import { AgePipe } from './pipes/age.pipe.js';
import { FeedbackComponent } from './components/contact/feedback/feedback.component.js';

@NgModule({
    declarations: [
        AppComponent,
        NavigationBarComponent,
        AboutMeComponent,
        MyfooterComponent,
        HomeComponent,
        ProjectsComponent,
        DonateComponent,
        EducationPathComponent,
        CarrerPathComponent,
        ContactComponent,
        TechnologiesComponent,
        ContributionGridComponent,
        AgePipe,
        FeedbackComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    providers: [
        provideHttpClient(withInterceptorsFromDi())
    ]
})
export class AppModule { }
