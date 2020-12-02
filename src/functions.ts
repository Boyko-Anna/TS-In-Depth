/* eslint-disable no-redeclare */
import { Category } from './enums';
import { Book, libMgrCallback } from './interfaces';
import { BookOrUndefined, BookProperties } from './types';

export function getAllBooks(): readonly Book[] {
    const books = <const>[
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true },
        { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'Andrea Chiarelli', available: true }];

    return books;
}

export function logFirstAvailable(books: ReadonlyArray<{ [key: string]: any }> = getAllBooks()): void {
    const numberOfBooks = books.length;
    let title: string = '';

    for (const book of books) {
        if (book.available) {
            title = book.title;
            break;
        }
    }

    console.log(`Number of books ${numberOfBooks}`);
    console.log(`First available book: ${title}`);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    const books: readonly Book[] = getAllBooks();
    let titles: string[] = [];
    titles = books
        .filter((book: { [key: string]: any }) => book.category === category)
        .map(book => book.title);

    return titles;
};

export function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
}

export function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const { title, author } = books[index];
    return [title, author];
}


// export function calcTotalPages(): bigint {
//     const libs = <const>[
//         { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
//         { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
//         { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
//     ];

//     let totalPages = 0n;
//     totalPages = libs.reduce((acc, lib) => acc + BigInt(lib.books) * BigInt(lib.avgPagesPerBook), 0n);
//     return totalPages;
// }



export function createCustomerID(name: string, id: number): string {
    return `${id}-${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Cuctomer name: ${name} `);

    if (age) {
        console.log(`Cuctomer age: ${age} `);
    }
    if (city) {
        console.log(`Cuctomer city: ${city} `);
    }
}

export function getBookById(id: number): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

export function сheckoutBooks(customer: string, ...booksIds: number[]): string[] {
    console.log(`Customer: ${customer}`);
    const titles: string[] = [];
    booksIds.forEach((id => {
        const book = getBookById(id);
        if (book?.available) {
            titles.push(book.title);
        }
    }));

    return titles;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];

export function getTitles(...args: [string | boolean | number, boolean?]): string[] {
    const books = getAllBooks();
    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        }
        if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    }
    if (args.length === 2) {
        const [id, available] = args;
        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available).map(book => book.title);
        }
    }
}

export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('Value should have been a string');
    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join('');
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getBookProp(book: Book, prop: BookProperties): any {
    if (typeof book[prop] === 'function') {
        return book[prop][name];
    }
    return book[prop];
}

export function purge<T>(inventory: Array<T>):  Array<T>{
    return inventory.slice(2);
}

export function getBooksByCategory(category: Category, callback: libMgrCallback): void{
    setTimeout(() => {
        try {
            const titles: string[] = getBookTitlesByCategory(category);
            if(titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }
        } catch (error) {
            callback(error, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
    if(err) {
        console.log(`error: ${err.message}`);

    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category,): Promise<string[]>{
    return new Promise<string[]>(
        (resolve, reject) => {
            setTimeout(() => {
                const titles: string[] = getBookTitlesByCategory(category);

                if(titles.length > 0) {
                    resolve(titles);
                } else {
                    reject('no books found');
                }
            }
            , 2000);
        }
    );
}


export async function logSearchResults(category: Category): Promise<string[]> {
    const titles = await getBooksByCategoryPromise(category);
    console.log(titles);
    // return Promise.resolve(titles);
    return titles;
}