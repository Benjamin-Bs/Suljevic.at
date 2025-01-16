import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgxPayPalModule } from 'ngx-paypal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MyfooterComponent } from './components/myfooter/myfooter.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DonateComponent } from './components/donate/donate.component';
import { EducationPathComponent } from './components/about-me/education-path/education-path.component';
import { CarrerPathComponent } from './components/about-me/carrer-path/carrer-path.component';
import { ContactComponent } from './components/contact/contact.component';
import { TechnologiesComponent } from './components/projects/technologies/technologies.component';
import { ContributionGridComponent } from './components/projects/contribution-grid/contribution-grid.component';
import { AgePipe } from './pipes/age.pipe';
import { FeedbackComponent } from './components/contact/feedback/feedback.component';
import { SettingsComponent } from './components/settings/settings.component';

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
        FeedbackComponent,
        SettingsComponent
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
