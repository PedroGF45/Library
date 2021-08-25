let myLibrary = [];

const openModalBtn= document.getElementById("openModal"); //get open modal button
const modalDisplay = document.getElementById("modal"); //get modal id
const body = document.querySelectorAll("body > *:not(#modal)"); //get select body except modal
const addBookBtn = document.getElementById("addBooktoLibrary"); //get addbook button to library
const library = document.getElementById("books");

//get variables from review portion of the modal

const reviewModal = document.getElementById("reviewModal");

//the object constructor
function book() {
    this.img = img,
    this.series = series,
    this.nameBook = nameBook,
    this.pages = pages,
    this.category = category,
    this.status = status,
    this.stars = stars,
    this.review = review
};


//add books by clicking on button
openModalBtn.addEventListener("click", function openModal() {

    //makes modal appear on screen
    modalDisplay.classList.toggle("show");
    
    //makes everything blurr less the modal
    body.forEach(body => body.classList.toggle("blur"));  
})

//create books 
addBookBtn.addEventListener("click", function createBook() {
    modalDisplay.classList.toggle("show");
    body.forEach(body => body.classList.toggle("blur"));

    //variables from the form
    let seriesValue = document.getElementById("inputSeries").value;
    let titleValue = document.getElementById("inputTitle").value;
    let pagesValue = document.getElementById("inputPages").value;
    let categoryValue = document.getElementById("categoriesForm").value;
    let statusValue = document.getElementById("statusForm").value;

    const book1 = Object.create(book);
    book1.series = seriesValue;
    book1.nameBook = titleValue;
    book1.pages = pagesValue;
    book1.category = categoryValue;
    book1.status = statusValue;
    
    myLibrary.push(book1);
    updateLibraryOnDisplay(book1);
});

//update library by pushing created books to an array
function updateLibraryOnDisplay() {
    
    //create elements
    let bookDiv = document.createElement("div");
    let seriesp = document.createElement("p");
    let titlep = document.createElement("p");
    let pagesp = document.createElement("p");
    let categoryp = document.createElement("p");
    let statusp = document.createElement("p");

    seriesp.innerText = myLibrary[0].series;
    titlep.innerText = myLibrary[0].nameBook;
    pagesp.innerText = myLibrary[0].pages;
    categoryp.innerText = myLibrary[0].category;
    statusp.innerText = myLibrary[0].status;

    library.appendChild(bookDiv);
    bookDiv.appendChild(seriesp);
    bookDiv.appendChild(titlep);
    bookDiv.appendChild(pagesp);
    bookDiv.appendChild(categoryp);
    bookDiv.appendChild(statusp);

    console.log(myLibrary[0]);
}




