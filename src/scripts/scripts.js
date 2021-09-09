let myLibrary = [];

const openModalBtn= document.getElementById("openModal"); //get open modal button
const modalDisplay = document.getElementById("modal"); //get modal id
const body = document.querySelectorAll("body > *:not(#modal)"); //get select body except modal
const addBookBtn = document.getElementById("addBooktoLibrary"); //get addbook button to library
const library = document.getElementById("books");
const form = document.getElementById("myform");

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
function createBook() {
    modalDisplay.classList.toggle("show");
    body.forEach(body => body.classList.toggle("blur"));

    //get variables from the form
    let imgValue = document.getElementById("inputImage");
    let seriesValue = document.getElementById("inputSeries").value;
    let titleValue = document.getElementById("inputTitle").value;
    let pagesValue = document.getElementById("inputPages").value;
    let categoryValue = document.getElementById("categoriesForm").value;
    let statusValue = document.getElementById("statusForm").value;
    let starsValue = document.getElementById
    let reviewValue = document.getElementById


    //create new object for the book
    let newBook = Object.create(book);
    newBook.img = URL.createObjectURL(imgValue.files[0]); // set src to blob url
    newBook.series = seriesValue;
    newBook.nameBook = titleValue;
    newBook.pages = pagesValue;
    newBook.category = categoryValue;
    newBook.status = statusValue;
    newBook.stars = starsValue;
    newBook.review  = reviewValue;

    //push the book into the array mylibrary
    if (myLibrary[i] == undefined) {
        myLibrary.push(newBook);
        newBook.id = i;
        i++;
        console.log(i);
    }
    
    updateLibraryOnDisplay(newBook);
};


//update library by pushing created books to an array
function updateLibraryOnDisplay(newBook) {

    //create elements
    let bookDiv = document.createElement("div");
    let img = document.createElement("img");
    let seriesp = document.createElement("p");
    let titlep = document.createElement("p");
    let pagesp = document.createElement("p");
    let categoryp = document.createElement("p");
    let statusp = document.createElement("p");
    let editBookBtn = document.createElement("button");
    let deleteBookBtn = document.createElement("button");

    

    deleteBookBtn.addEventListener("click", function deleteBook() {
        let buttonsQuantity = document.querySelectorAll(`#books button`);
        let i = 0;
        if (buttonsQuantity[i] == ) //decifrar isto
        myLibrary.pop(newBook);
    })

    img.src = newBook.img;
    seriesp.innerText = newBook.series;
    titlep.innerText = newBook.nameBook;
    pagesp.innerText = newBook.pages;
    categoryp.innerText = newBook.category;
    statusp.innerText = newBook.status;
    editBookBtn.innerText = "EDIT";
    deleteBookBtn.innerText = "DELETE";

    library.appendChild(bookDiv);
    bookDiv.appendChild(img);
    bookDiv.appendChild(seriesp);
    bookDiv.appendChild(titlep);
    bookDiv.appendChild(pagesp);
    bookDiv.appendChild(categoryp);
    bookDiv.appendChild(statusp);
    bookDiv.appendChild(editBookBtn);
    bookDiv.appendChild(deleteBookBtn);
}


form.addEventListener("submit", function (event) {
    event.preventDefault();
    createBook();

})



