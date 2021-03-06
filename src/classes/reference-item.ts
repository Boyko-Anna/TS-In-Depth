import { timeout } from '../decorators';

export abstract class ReferenceItem {
  // title: string;
  // year: number;
  #id: number;

  private _publisher: string;

  static department: string = 'Classical luterature';

  get publisher(): string {
      // eslint-disable-next-line no-underscore-dangle
      return this._publisher.toUpperCase();
  }

  set publisher(newPublisher: string) {
      // eslint-disable-next-line no-underscore-dangle
      this._publisher = newPublisher;
  }

  // constructor(newTitle: string, newYear: number) {
  //     console.log('Creating a new ReferenceItem...');
  //     this.title = newTitle;
  //     this.year = newYear;
  // }
  constructor(id: number, public title: string, protected year: number) {
      console.log('Creating a new ReferenceItem...');
      this.#id = id;
  }

  @timeout(1000)
  printItem(): void {
      console.log(`${this.title} was published in ${this.year}`);
      console.log(`Department: ${ReferenceItem.department}`);
  }

  getID(): number {
      return this.#id;
  }

  abstract printCitation(): void;
}