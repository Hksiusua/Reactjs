class Novel {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  getAuthor() {
    return "I like to " + this.author;
  }
}

const test = new Novel("hoa giấy", "Trần Công Nghĩa");

console.log(test);
console.log(test.getAuthor());
