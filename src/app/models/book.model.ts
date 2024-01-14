export interface Book {
  _id?: string;
  title: string;
  author: string;
  year: string;
  status: boolean;
  __v?: number;
}

export interface Books {
  books: Book[];
}
