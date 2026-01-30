/*
Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books
*/

class Book {
    title;
    author;
    pages;
    isAvailable = true;

    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    borrow() {
        this.isAvailable = false;
    }

    returnBook() {
        this.isAvailable = true;
    }

    getInfo() {
        return `${this.title} by ${this.author} (${this.pages} pages)`;
    }

    isLongBook() {
        return this.pages > 300;
    }
}

// Create book objects
let b1 = new Book("Harry Potter", "J.K. Rowling", 350);
let b2 = new Book("1984", "George Orwell", 328);
let b3 = new Book("The Hobbit", "J.R.R. Tolkien", 310);
let b4 = new Book("Python Basics", "John Mark", 128);
let b5 = new Book("Happy Nest", "Pavanika", 200);

// Store all books
let books = [b1, b2, b3, b4, b5];


// i. Display info of all books
console.log("All Books:");
books.forEach(book => console.log(book.getInfo()));


// ii. Borrow 2 books
b1.borrow();
b3.borrow();

console.log("\nAfter Borrowing:");
books.forEach(book =>
    console.log(`${book.title} → ${book.isAvailable ? "Available" : "Not Available"}`)
);


// iii. Return 1 book
b1.returnBook();

console.log("\nAfter Returning One Book:");
books.forEach(book =>
    console.log(`${book.title} → ${book.isAvailable ? "Available" : "Not Available"}`)
);


// iv. Count long books (>300 pages)
let longBookCount = books.filter(book => book.isLongBook()).length;

console.log(`\nNumber of long books (>300 pages): ${longBookCount}`);


// v. List all available books
console.log("\nAvailable Books:");
books
    .filter(book => book.isAvailable)
    .forEach(book => console.log(book.getInfo()));
