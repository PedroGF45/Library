let myLibrary = [];

const addBookModal = document.getElementById("addBook");
const modalDisplay = document.getElementById("modal");
const body = document.querySelectorAll("body > *:not(#modal)");
const addBookBtn = document.getElementById("addBooktoLibrary");





//the object constructor
function book() {
    this.series = series,
    this.nameBook = nameBook,
    this.pages = pages,
    this.review = review
};


//add books by clicking on button
addBookModal.addEventListener("click", function openModal() {
    modalDisplay.classList.toggle("grid");
    
    //makes everything blurr less the modal
    body.forEach(body => body.classList.toggle("blur"));  
})

addBookBtn.addEventListener("click", function addBooktoLibrary() {
    modalDisplay.classList.toggle("grid");
    body.forEach(body => body.classList.toggle("blur"));

    //variables from the form
    const seriesValue = document.getElementById("inputSeries").value;
    const titleValue = document.getElementById("inputTitle").value;
    const pagesValue = document.getElementById("inputPages").value;
    
})