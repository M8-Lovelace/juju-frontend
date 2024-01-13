export interface Error {
  value?: string;
  msg: string;
  param?: string;
  location?: string;
}

export interface Errors {
  errors: Error[];
}
