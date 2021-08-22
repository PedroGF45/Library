let myLibrary = [];

const addBookBtn = document.getElementById("addBook");



//the object constructor
function book() {
    this.series = series,
    this.nameBook = nameBook,
    this.pages = pages,
    this.review = review
};


//add books by clicking on button
addBookBtn.addEventListener("click", function addBookToLibrary() {
    const book1 = Object.create(book);
    book1.series = prompt("series");
    book1.nameBook = prompt("nameBook");
    book1.pages = prompt("pages");
    book1.review = prompt("review");
    myLibrary.push(book1);
})





