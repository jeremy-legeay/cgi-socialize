import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
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
import {CommentaireComponent} from './components/commentaire/commentaire.component';
import {CommentaireRepository} from './services/commentaire.repository';
import {CommentaireService} from './services/real/commentaire.service';

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    ArticleComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    UserComponent,
    CommentaireComponent
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
    MatTabsModule
  ],
  providers: [
    {provide: ArticleRepository, useFactory: (http: HttpClient) => new ArticleService(http), deps: [HttpClient]},
    {provide: UserRepository, useFactory: (http: HttpClient) => new UserService(http), deps: [HttpClient]},
    {provide: CommentaireRepository, useFactory: (http: HttpClient) => new CommentaireService(http), deps: [HttpClient]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
