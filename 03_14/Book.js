class Book {
  constructor(title, author, numPages, readStatus) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.readStatus = readStatus;
  }
  setReadStatus(readStatus) {
    this.readStatus = readStatus;
  }
}

export default Book;
