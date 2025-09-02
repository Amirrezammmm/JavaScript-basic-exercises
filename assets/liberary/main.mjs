import { Book } from './book.mjs';
import { Library } from './library.mjs';

// ساخت یک کتابخانه جدید
const myLibrary = new Library();

// ساخت کتاب‌ها
const book1 = new Book("قلعه حیوانات", "جورج اورول", 1945);
const book2 = new Book("1984", "جورج اورول", 1949);

// افزودن به کتابخانه
myLibrary.addBook(book1);
myLibrary.addBook(book2);

// نمایش کتاب‌ها
myLibrary.listBooks();

// حذف یک کتاب
myLibrary.removeBook("1984");

// نمایش کتاب‌ها پس از حذف
myLibrary.listBooks();
