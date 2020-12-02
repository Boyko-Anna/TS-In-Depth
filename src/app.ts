import { ReferenceItem, RefBook, UniversityLibrarian, Shelf } from './classes';
import { Category } from './enums';
import { getAllBooks, purge, createCustomer, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults } from './functions';
import { Book, Librarian, Logger, Magazine } from './interfaces';
import { PersonBook, BookRequiredFields, UpdatedBook, CreateCutsomerFunctionType } from './types';
import type { Library } from './classes';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// Task 02.01
// console.log(getAllBooks());

// logFirstAvailable(getAllBooks());

// const titles = getBookTitlesByCategory(Category.JavaScript);
// console.log(logBookTitles(titles));

// console.log(getBookAuthorByIndex(2));

// console.log(calcTotalPages());


// Task 03.01
// const myId = createCustomerID('Ann', 10);

// let idGenerator: (name: string, id: number) => string =
//   (name: string, id: number) => `${id}-${name}`;

// idGenerator = createCustomerID;

// Task 03.04
// createCustomer('Anna');
// createCustomer('Anna', 30);
// createCustomer('Anna', 30, 'Kyiv');
// console.log(myId);
// console.log(idGenerator('Boris', 20));

// console.log(getBookTitlesByCategory());
// logFirstAvailable();

// console.log(getBookById(1));

// const myBooks: string[] = сheckoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);

// console.log(getTitles(1, true));
// console.log(getTitles(1, false));

// console.log(bookTitleTransform(getAllBooks()[0].title));
// console.log(bookTitleTransform(10));

// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3
//     pages: 200,
//     markedDameged: (reason: string) => `Damaged: ${reason}`
// };

// printBook(myBook);
// myBook.markedDameged('missing back cover');

// Task 04.02
// const logDamage: Logger = (reason: string): void => {
//     console.log(`Dameged: ${reason}`);
// };
// logDamage('missing back cover');

// Task 04.03
// const favoriteAuthor: Author = {
//     email: 'anna@email.com',
//     name: 'Anna',
//     numBooksPublished: 10,
// };

// const favoriteLibrarian: Librarian = {
//     email: 'boris@email.com',
//     name: 'Boris',
//     department: 'Classical literature',
//     assistCustomer: (name: string) => {
//         console.log(`Assist ${name}`);
//     },
// };

// Task 04.04

// const offer: any = {
//     magazine: 1,
// };

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle?.());
// console.log(offer.magazine[0].getTitle?.());
// console.log(offer.magazine?.[0]?.());

// Task 04.05
// console.log(getBookProp(getAllBooks()[0], 'title'));
// console.log(getBookProp(getAllBooks()[0], 'markedDameged'));
// console.log(getBookProp(getAllBooks()[0], 'isbn'));

// Task 05.01
// const ref: ReferenceItem = new ReferenceItem(1, 'JavaScript', 2020);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'Random publisher';
// console.log(ref.publisher);
// console.log(ref.getID());

// Task 05.02
// const refBook: RefBook = new RefBook(1, 'Ts', 2020, 3);
// console.log(refBook);
// refBook.printItem();

// Task 05.03
// refBook.printCitation();

// Task 05.04
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');

// Task 05.05
// const personBook: PersonBook = {
//     id: 1,
//     name: 'Anna',
//     email: 'anna@email.com',
//     author: 'Boris',
//     available: false,
//     category: Category.CSS,
//     title: 'NoName',
// };

// console.log(personBook);

// Task 06.05
// const flag = true;
// if(flag){
//     import('./classes').then(moduleSet =>{
//         const reader = new moduleSet.Reader();
//         console.log(reader);
//         reader.name = 'Anna';
//         reader.take(getAllBooks()[1]);
//         console.log(reader);
//     });
// }

// task 06.06
// const Lib: Library = new Library();
// const Lib: Library = {
//     id: 1,
//     name: 'Unknown',
//     address: 'Kyiv',
// };
// console.log(Lib);


// Task 07.01
// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];

// console.log(purge(inventory));

// task 07.02
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// const book = bookShelf.getFirst();
// console.log(book);

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst());

// Task 07.03
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));


// Task 07.04

// const book: BookRequiredFields = {
//     author: 'Anna',
//     available: true,
//     category: Category.CSS,
//     id: 1,
//     // markedDamaged: null,
//     pages: 200,
//     title: 'title',
// };

// const updatedBook: UpdatedBook = {
//     id: 1,
//     category: Category.Angular,
// };

// const params: Parameters<CreateCutsomerFunctionType> = ['Ann'];
// createCustomer(...params);


// Task 08.01
// const obj = new UniversityLibrarian();
// console.log(obj);
// UniversityLibrarian.prototype['setName'] = function(){};

// Task 08.02
// const fLibrarian = new UniversityLibrarian();
// console.log(fLibrarian);

// fLibrarian.name = 'Anna';
// fLibrarian['printLibrarian']();

// Task 08.03
// fLibrarian.assistFaculty = null;
// fLibrarian.teachCommunity = null;

// Task 08.04
// const enc = new RefBook(1, 'Enc', 2020, 10);
// enc.printItem();

// Task 08.05

// const o = new UniversityLibrarian();
// o.name = 'Anna';
// o.assistCustomer('Boris');
// console.log(o);

// Task 08.06
// const o = new UniversityLibrarian();
// o.name = 'Anna;';
// console.log(o.name);
// o.assistCustomer('boris');


// Task 08.07
// const enc = new RefBook(1, 'Enc', 2020, 10);
// enc.printItem();
// console.log(enc.copies);
// enc.copies = 10;
// enc.copies = -10;


// Task 09.01
// console.log('begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('end');


// task 09.02
// console.log('begin');
// getBooksByCategoryPromise(Category.JavaScript,)
//     .then(titles => {
//         console.log(titles);
//         return titles.length;
//     })
//     .then(numberOfBooks => console.log(numberOfBooks))
//     .catch(err => console.log(err));

// getBooksByCategoryPromise(Category.Software,)
//     .catch(err => console.log(`err ${err}`));
// console.log('end');


// 09.03

// logSearchResults(Category.JavaScript)
// logSearchResults(Category.Software)
//     .catch(err => console.log(err));