import {Injectable} from '@angular/core';
import {CommentaireRepository} from '../commentaire.repository';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Commentaire} from '../../models/commentaire';
import {Observable} from 'rxjs';

@Injectable()
export class CommentaireService implements CommentaireRepository {
  private url: string = environment.api + '/commentaires';

  constructor(private http: HttpClient) {
  }

  add(commentaire: Commentaire): Observable<Commentaire> {
    return this.http.post<Commentaire>(this.url, commentaire);
  }

  all(): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(this.url);
  }

  byArticleId(article: string): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${this.url}/${article}`);
  }
}
