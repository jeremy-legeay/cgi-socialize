import {User} from './user';
import {Article} from './article';

export interface Commentaire {
  id: string;
  message: string;
  author: User;
  article: Article;
}
