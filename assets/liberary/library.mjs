import { Book } from './book.mjs';

export class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(` کتاب "${book.title}" اضافه شد.`);
  }

  removeBook(title) {
    this.books = this.books.filter(book => book.title !== title);
    console.log(` کتاب "${title}" حذف شد.`);
  }

  listBooks() {
    console.log(" لیست کتاب‌ها:");
    this.books.forEach(book => {
      console.log("- " + book.getSummary());
    });
  }
}
