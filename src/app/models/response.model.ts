import { Error } from './error.model';

export interface Response<T> {
  data?: T;
  errors?: Error[];
}
