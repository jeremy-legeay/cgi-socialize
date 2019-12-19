import {User} from './user';

export interface Article {
  id: string;
  title: string;
  image: string;
  message: string;
  author: User;
}

