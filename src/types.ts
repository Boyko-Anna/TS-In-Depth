import { Book, Person, Author } from './interfaces';

// export type book = { id: number; title: string; category: Category; author: string; available: boolean };
export type BookProperties = keyof Book;
export type PersonBook = Person & Book;
export type BookOrUndefined = Book | undefined;
export type lib = { lib: string; books: number; avgPagesPerBook: number };
export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;
export type AuthorWoEmail = Omit<Author, 'email'>;
export type CreateCutsomerFunctionType = ( name: string, age?: number, city?: string) => void;
