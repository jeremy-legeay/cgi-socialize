import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArticleComponent} from './components/article/article.component';
import {LibraryComponent} from './components/library/library.component';
import {RegisterComponent} from './components/register/register.component';
import {ArticleRepository} from './services/article.repository';
import {ArticleService} from './services/real/article.service';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {UserComponent} from './components/user/user.component';
import {MatTabsModule} from '@angular/material/tabs';
import {UserRepository} from './services/user.repository';
import {UserService} from './services/real/user.service';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    ArticleComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    MatMenuModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [
    {provide: ArticleRepository, useFactory: (http: HttpClient) => new ArticleService(http), deps: [HttpClient]},
    {provide: UserRepository, useFactory: (http: HttpClient) => new UserService(http), deps: [HttpClient]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
