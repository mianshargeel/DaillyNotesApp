console.log("This is 1st Project with harry about Add Notes and save them into local Storage");
showNotes(); //calling this func to keep all notes viiblem on web page every when page reloads

//if user adds a note, add it to local storage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", (e) => {

    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes"); //key in localStorage

    if (notes == null) {
        let notesObj = []; //blank array
    } else {
        notesObj = JSON.parse(notes); //getting data in the form of array (NOTE notesObj is Array of Objects)
    }
    let myObj = { //getting values of title and text in a object
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj); //if someone writing a note in text-area and title and click on addNote button, the value of notes will be updated
    localStorage.setItem("notes", JSON.stringify(notesObj)); //value(String) to store in localstorage we need to use JSON method
    addTxt.value = "";
    addTitle.value = ""; //after updating notes text-area will be blank
    //console.log(notesObj);
    showNotes(); //to display our notes in the browser

});
//Function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        //((taking card from bs) appending all notes-card under the text area
        html += ` 
            
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${index+1}-${element.title}:</h5>
                <p class="card-text">${element.text}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>

        `; //end of html variable
        // as we know notes (elements added by user) are an array and every element of notes have his own specific index we are giving that index as id to delete button, when someone click on (deleteNote) the function deleteNote(index) will call and have index of that specific notes

    }); //end of loop

    let notesEle = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesEle.innerHTML = html;
    } else {
        notesEle.innerHTML = `Nothing to Show! Use "Add Note" Above Section to add a Note.`;
    }
} //end of showNotes()

// function to delete a note
function deleteNote(index) {
    //console.log("i m deleted", index);
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1); //Deleting specific note from notes
    localStorage.setItem("notes", JSON.stringify(notesObj)); //then again updating localStorage
    showNotes(); // then showing all localStorage
}

//Search Bar
let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", () => { //this means every time in search input value changes this event will fires
    let inputValue = searchTxt.value.toLowerCase(); //if uuser put value in capitalcase the value will convert into lower case and will match
    //console.log("Input Event is fired:", inputValue);
    let noteCards = document.getElementsByClassName("noteCard"); //(id=noteCard, id of card used for variable (html) see above) all stored notes in localstorage
    Array.from(noteCards).forEach(function(element) {
        //to get text(content) of Search-bar 
        let cardTxt = element.getElementsByTagName("p")[0].innerText; //p tag from div-class=noteCard
        //console.log(cardTxt);
        if (cardTxt.includes(inputValue)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })




})