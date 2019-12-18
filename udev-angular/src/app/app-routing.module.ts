import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleComponent} from './components/article/article.component';
import {LibraryComponent} from './components/library/library.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {ListeComponent} from './components/liste/liste.component';
import {AuthGaurdService} from './services/auth-gaurd.service';

const routes: Routes = [
  {path: 'library', component: LibraryComponent, canActivate: [AuthGaurdService]},
  {path: 'articles/:id', component: ArticleComponent, canActivate: [AuthGaurdService]},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGaurdService]},
  {path: '', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService]},
  {path: 'user', component: ListeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
