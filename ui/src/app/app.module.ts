import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './footer/contact/contact.component';
import { PrivacyComponent } from './footer/privacy/privacy.component';
import { TeamComponent } from './footer/team/team.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { SignInComponent } from './sign-in/sign-in.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SearchComponent } from './search/search.component';
import { AccountComponent } from './account/account.component';
import { RouteComponent } from './route/route.component';
import { SignInNavComponent } from './sign-in-nav/sign-in-nav.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule} from '@angular/common/http';
import { LocalItemComponent } from './local-item/local-item.component';
import { AccountPrivacyComponent } from './account-privacy/account-privacy.component';
import { AccountGeneralComponent } from './account-general/account-general.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AgmCoreModule } from '@agm/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './map/map.component';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { LocalService } from './services/local.service';
import { StartPointService } from './services/start-point.service';
import { RouteMapComponent } from './route-map/route-map.component';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { TreeComponent } from './tree/tree.component';
import { Http, HttpModule } from '@angular/http';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("415992652432-e26hktvg68cv3dto6e37j1p4tij8vk9s.apps.googleusercontent.com")
  }
]);

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    RegisterComponent,
    HomeComponent,
    ContactComponent,
    PrivacyComponent,
    routingComponents,
    TeamComponent,
    SignInComponent,
    SideNavComponent,
    AccountComponent,
    RouteComponent,
    SignInNavComponent,
    LogoutComponent,
    LocalItemComponent,
    AccountPrivacyComponent,
    AccountGeneralComponent,
    ModalComponent,
    MapComponent,
    RouteMapComponent,
    TreeComponent,
    RouteMapComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatListModule,
    MatGridListModule,
    MatCheckboxModule,
    MatFormFieldModule,
    SocialLoginModule,
    TreeViewModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    AgmCoreModule.forRoot({
    //  apiKey: 'AIzaSyBrAcHs0kAcdeefzPzIefUED4HnBotZJNE',
      libraries: ['geometry']
    })
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig,
    },
    LocalService,
    StartPointService,
    //Http
  ],

  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})

export class AppModule { }
