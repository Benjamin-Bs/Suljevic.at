import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgxPayPalModule } from 'ngx-paypal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


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
import { AgePipe } from './pipes/age.pipe';
import { FeedbackComponent } from './components/contact/feedback/feedback.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ChangeLanguageComponent } from './components/settings/change-language/change-language.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
        AgePipe,
        FeedbackComponent,
        SettingsComponent,
        ChangeLanguageComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            },
            defaultLanguage: 'en'
        }),
        AppRoutingModule
    ],
    providers: [
        provideHttpClient(withInterceptorsFromDi())
    ]
})
export class AppModule { }
