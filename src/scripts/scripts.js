let myLibrary = [];

const addBookModal = document.getElementById("addBook");
const modalDisplay = document.getElementById("modal");
const body = document.querySelectorAll("body > *:not(#modal)");
const addBookBtn = document.getElementById("addBooktoLibrary");
const library = document.getElementById("books");

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

addBookBtn.addEventListener("click", function createBook() {
    modalDisplay.classList.toggle("grid");
    body.forEach(body => body.classList.toggle("blur"));

    //variables from the form
    let seriesValue = document.getElementById("inputSeries").value;
    let titleValue = document.getElementById("inputTitle").value;
    let pagesValue = document.getElementById("inputPages").value;
    
    const book1 = Object.create(book);
    book1.series = seriesValue;
    book1.nameBook = titleValue;
    book1.pages = pagesValue;
    
    myLibrary.push(book1);
    updateLibrary(book1);
});

function updateLibrary() {
    
    let bookDiv = document.createElement("div");
    let seriesp = document.createElement("p");
    let titlep = document.createElement("p");
    let pagesp = document.createElement("p");
    seriesp.innerText = myLibrary[0].series;
    titlep.innerText = myLibrary[0].nameBook;
    pagesp.innerText = myLibrary[0].pages;
    
    library.appendChild(bookDiv);
    bookDiv.appendChild(seriesp);
    bookDiv.appendChild(titlep);
    bookDiv.appendChild(pagesp);
}

