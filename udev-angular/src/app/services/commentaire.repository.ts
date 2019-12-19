import {Commentaire} from '../models/commentaire';
import {Observable} from 'rxjs';

export abstract class CommentaireRepository {
  abstract add(commentaire: Commentaire): Observable<Commentaire>;

  abstract all(): Observable<Commentaire[]>;
}
