let myLibrary = [];

const openModalBtn= document.getElementById("openModal"); //get open modal button
const modalDisplay = document.getElementById("modal"); //get modal id
const body = document.querySelectorAll("body > *:not(#modal)"); //get select body except modal
const addBookBtn = document.getElementById("addBooktoLibrary"); //get addbook button to library
const library = document.getElementById("books");

//get variables from review portion of the modal

const reviewModal = document.getElementById("reviewModal");
console.log(reviewModal);

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
    modalDisplay.style.display = "inline-block";
    
    //makes everything blurr less the modal
    body.forEach(body => body.classList.toggle("blur"));  
})

//create books 
addBookBtn.addEventListener("click", function createBook() {
    modalDisplay.style.display = "none";
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

//update library by pushing created books to an array
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


