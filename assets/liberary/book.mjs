// تعریف کلاس Book
export class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  
    getSummary() {
      return `${this.title} توسط ${this.author} (${this.year})`;
    }
  }
  