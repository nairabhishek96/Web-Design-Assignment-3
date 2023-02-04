/* 
Name: Abhishek Nair 
NUID: 002724762 
*/

function Title(t1) { 
  this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");


//Assignment code here

//Variables to check the number of students added and the checkboxes checked
var checkedCount = 0;
var studentCount = 3;

//Event handlers

//Handler for check box clicked event
function checkboxClicked(event){

  var tr = event.target.parentElement.parentElement;

  if(event.target.checked === true){
    checkedCount++;
    if(checkedCount === 1){
      performCheckActions();
    }
    tr.style.backgroundColor = "Yellow";
    
    tr.querySelector("td:nth-last-child(-n+2)").style.display = "table-cell";
    tr.querySelector("td:last-child").style.display = "table-cell";
  }
  else{

    checkedCount--;
    if(checkedCount === 0){
      performNoCheckActions();
    }
    tr.style.backgroundColor = "White";

    tr.querySelector("td:nth-last-child(-n+2)").style.display = "none";
    tr.querySelector("td:last-child").style.display = "none";
  }
}

//Actions to perform when there is atleast one checkbox checked
function performCheckActions(){
  
  //Changing background of submit button
  var submitButton = document.getElementById("button");
  submitButton.style.backgroundColor = "Orange";
  submitButton.style.borderColor = "Orange";
  
  //Adding the delete and edit header
  var deleteHeader = document.getElementById("deleteHeader");
  deleteHeader.style.display="table-cell";
  var editHeader = document.getElementById("editHeader");
  editHeader.style.display = "table-cell";
  
}

//Actions to perform when there are no checkboxes checked
function performNoCheckActions(){

  //Changing background of submit button
  var submitButton = document.getElementById("button");
  submitButton.style.backgroundColor = "Grey";
  submitButton.style.borderColor = "Grey";

  //Hiding the delete and edit header
  var deleteHeader = document.getElementById("deleteHeader");
  deleteHeader.style.display="none";
  var editHeader = document.getElementById("editHeader");
  editHeader.style.display = "none";
}

//Event handler to expand dropdown when a down arrow image is clicked
function expandDropDownArea(event){
  var tr = event.target.parentElement.parentElement;
  var dropDownAreaTr = tr.nextElementSibling;
  dropDownAreaTr.classList.toggle("dropDownTextArea");
}

//Event handler to delete row when a delete button is clicked
function deleteStudentRow(event){
  var tr = event.target.parentElement.parentElement;
  var nextTr = tr.nextElementSibling;
  var tBody = tr.parentElement;
  tBody.removeChild(tr);
  tBody.removeChild(nextTr);
  checkedCount--;
  if(checkedCount === 0)
    performNoCheckActions();
  var secondTd = tr.getElementsByTagName("td")[1];
  alert(`Record of ${secondTd.innerHTML} deleted successfully`);

}

//Event handler to edit row when edit button is clicked
//Does nothing as of now
function editStudentRow(event){
  prompt("Edit the details");
}

//Event handler to add new student when button is clicked;
function addNewStudent(event){
  studentCount++;
  var firstTr = document.createElement("tr");
  var randomNum = Math.floor(Math.random()*10000)+90000;

  //Creating the student row
  firstTr.innerHTML = `
    <td><input type="checkbox" class="row-selector"/><br /><br /><img src="down.png" width="25px" class="dropDownArrow"/></td>
    <td>Student ${studentCount}</td>
    <td>Teacher ${studentCount}</td>
    <td>Approved</td>
    <td>Fall</td>
    <td>TA</td>
    <td>${randomNum}</td>
    <td>100%</td>
    <td><button class="deleteRowButton">Delete</button></td>
    <td><button class="editRowButton">Edit</button></td>
    `;
  //Adding event listeners and styles to all the new elements created
  firstTr.querySelector(".row-selector").addEventListener("click",checkboxClicked);
  firstTr.querySelector(".dropDownArrow").addEventListener("click",expandDropDownArea);
  firstTr.querySelector("td:nth-last-child(-n+2)").style.display = "none";
  firstTr.querySelector("td:last-child").style.display = "none";
  firstTr.querySelector(".deleteRowButton").addEventListener("click",deleteStudentRow);
  firstTr.querySelector(".editRowButton").addEventListener("click",editStudentRow);

  //Creating the dropdown area for the student
  var secondTr = document.createElement("tr");
  secondTr.innerHTML = `
    <td colspan="8">
    Advisor:<br /><br />
    Award Details<br />
    Summer 1-2014(TA)<br />
    Budget Number: <br />
    Tuition Number: <br />
    Comments:<br /><br /><br />
    Award Status:<br /><br /><br />
    </td>`;

  //Adding class to the dropdown area
  secondTr.classList.add("dropDownTextArea");

  //Adding both the created rows to the tbody
  var myTableBody = document.querySelector("#myTable > tbody");
  myTableBody.appendChild(firstTr);
  myTableBody.appendChild(secondTr);

  alert("Student Record added successfully");
}

//Adding event listeners to document elements

//Event listeners for each checkbox input element
var checkboxes = document.getElementsByClassName("row-selector");
for (const checkbox of checkboxes) {
  checkbox.checked = false;
  checkbox.addEventListener("click", checkboxClicked);
}

//Actions to perform when there is atleast one checkbox checked
function performCheckActions(){
  
  //Changing background of submit button
  var submitButton = document.getElementById("button");
  submitButton.style.backgroundColor = "Orange";
  submitButton.style.borderColor = "Orange";
  
  //Adding the delete and edit header
  var deleteHeader = document.getElementById("deleteHeader");
  deleteHeader.style.display="table-cell";
  var editHeader = document.getElementById("editHeader");
  editHeader.style.display = "table-cell";
  
}

//Hiding all the parent <td> elements of the delete buttons
var deleteRowButtons = document.getElementsByClassName("deleteRowButton");
for (const deleteRowButton of deleteRowButtons) {
  deleteRowButton.parentElement.style.display = "none";
  deleteRowButton.addEventListener("click",deleteStudentRow);
}
//Event listeners for dropDownArrow images
var dropDownArrows = document.getElementsByClassName("dropDownArrow");
for (const dropDownArrow of dropDownArrows) {
  dropDownArrow.addEventListener("click", expandDropDownArea);
}

//Hiding all the parent <td> elements of the edit buttons
var editRowButtons = document.getElementsByClassName("editRowButton");
for (const editRowButton of editRowButtons) {
  editRowButton.parentElement.style.display = "none";
  editRowButton.addEventListener("click", editStudentRow);
}