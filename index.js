console.log("this is project1 with harry");
//if user adds a note, add it to local storage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", (e) => {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes"); //key in localStorage

    if (notes == null) {
        notesObj = []; //blank array
    } else {
        notesObj = JSON.parse(notes); //getting data in the form of array
    }
    notesObj.push(addTxt.value); //if someone writing a note in text-area and click on addNote button, the value of notes will be updated
    localStorage.setItem("notes", JSON.stringify(notesObj)); //value(String) to store in localstorage we need to use JSON method
    addTxt.value = ""; //after updating notes text-area will be blank
    console.log(notesObj);



});