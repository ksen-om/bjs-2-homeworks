class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
}

 fix() {
    this.state = this.state * 1.5;
}

set state (newState) {
    if (newState < 0) {
      this._state = 0;  
    } 
    if (newState > 100) {
        this._state = 100;
    }
    else {
        this._state = newState;
    }
}

get state() {
    return this._state;
}
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name, books = []){
    this.name = name;
    this.books = books;
    }

addBook(book) {
    if (book.state > 30) {
        this.books.push(book);
    }
}

findBookBy(type, value) {
 let book = this.books.find(book => book[type] === value);
 if (book === undefined) {
    return null;
 }
 else {
    return book;
 }
}

giveBookByName(bookName) {
    let book = this.books.find(book => book.name === bookName);
    if (book === undefined){
        return null;
    }
    else { 
        this.books.splice(this.books.indexOf(book), 1);
        return book; 
    }
}
}

// Задача № 3

class Student {
  constructor (name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.subjects = {};
  }

  setSubject(subjectName) {
    this.subject[subjectName] = [];
  }

  addMark(mark, subjectName) {
    if (this.subjects[subjectName] === undefined) {
        this.subjects[subjectName] = [mark];
    if (mark < 1 || mark > 5) {
         return "Ошибка, оценка должна быть числом от 1 до 5";
    }
    } else {
        this.subjects[subjectName].push(mark);
    }
  }

  getAverageBySubject(subjectName) {
    if (this.subjects[subjectName]) {
        return this.subjects[subjectName].reduce((acc, mark) => acc + mark) / this.subjects[subjectName].length;
    } else {
        return "Несуществующий предмет";
    }
  }

  getAverage() {
    let sum = 0;
    for (let key of Object.keys(this.subjects)) {
        sum += this.getAverageBySubject(key);
    }
    return sum / Object.keys(this.subjects).length;
  }
 
  exclude(reason) {
    this.excluded = reason;
    delete this.subject;
    delete this.marks;
  }
}

