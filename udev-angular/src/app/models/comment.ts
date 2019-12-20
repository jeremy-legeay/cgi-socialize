import {User} from './user';

export interface Article {
  id: string;
  message: string;
  author: User;
  article: string;
}

