let myLibrary = [];
let sharedbooks = []; 

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
    this.bookDiv = bookDiv;
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
    myLibrary.push(newBook);

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

    //add edit button and icon for it
    let editBookBtn = document.createElement("button");
    let editIcon = document.createElement("span");
    editIcon.classList.add("material-icons");
    editIcon.innerText = "edit";

    //add delete button and icon for it
    let deleteBookBtn = document.createElement("button");
    let deleteIcon = document.createElement("span");
    deleteIcon.classList.add("material-icons");
    deleteIcon.innerText = "delete";

    newBook.bookDiv = bookDiv;
    img.src = newBook.img;
    seriesp.innerText = newBook.series;
    titlep.innerText = newBook.nameBook;
    pagesp.innerText = newBook.pages;
    categoryp.innerText = newBook.category;
    statusp.innerText = newBook.status;
    
    library.appendChild(bookDiv);
    bookDiv.appendChild(img);
    bookDiv.appendChild(seriesp);
    bookDiv.appendChild(titlep);
    bookDiv.appendChild(pagesp);
    bookDiv.appendChild(categoryp);
    bookDiv.appendChild(statusp);
    bookDiv.appendChild(editBookBtn);
    editBookBtn.appendChild(editIcon);
    bookDiv.appendChild(deleteBookBtn);
    deleteBookBtn.appendChild(deleteIcon);

    //removes book from library
    deleteBookBtn.addEventListener("click", function deleteBook() {
        let index = myLibrary.indexOf(newBook);
        myLibrary.splice(index, 1);
        bookDiv.remove();
    });
}

//sort books by readness
const sortRead = document.getElementById("isBookReads");
sortRead.addEventListener("change", function sortbyReadness() {

    if (sortRead.value == "isRead") {
        function getUnselectedBooks(books) {
            return books.filter(e => e.status != "Read") || []; 
        };
    
        function updateUnselectedbooks(list) {
            list.forEach(el => el.bookDiv.classList.add("hide"));  
        };

    } else if (sortRead.value == "isReading") {
        function getUnselectedBooks(books) {
            return books.filter(e => e.status != "Reading") || []; 
        };
    
        function updateUnselectedbooks(list) {
            list.forEach(el => el.bookDiv.classList.add("hide"));  
        };

    } else if (sortRead.value == "toBeRead") {
        function getUnselectedBooks(books) {
            return books.filter(e => e.status != "NotRead") || []; 
        };
    
        function updateUnselectedbooks(list) {
            list.forEach(el => el.bookDiv.classList.add("hide"));  
        };

    } else {
        function getUnselectedBooks(books) {
            return books; 
        };

        function updateUnselectedbooks(list) {
            list.forEach(el => el.bookDiv.classList.remove("hide"));  
        };
    }
    
    const unread = getUnselectedBooks(myLibrary);
    updateUnselectedbooks(unread);
        
});


//sort books by category
const sortCategory = document.getElementById("categories");
sortCategory.addEventListener("change", function sortByCategory() {
    console.log(sortCategory.value); 
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
    createBook();

})



