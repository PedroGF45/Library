let myLibrary = [];

const addBookBtn = document.getElementById("addBook");
const modalDisplay = document.getElementById("modal");

//the object constructor
function book() {
    this.series = series,
    this.nameBook = nameBook,
    this.pages = pages,
    this.review = review
};


//add books by clicking on button
addBookBtn.addEventListener("click", function addBookToLibrary() {
    modalDisplay.classList.toggle("grid");
    console.log(modalDisplay);
})
