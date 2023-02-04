Assignment 3 summary:

-   A class was given to all the checkboxes and event listeners were added to each of them

-   Whenever a checkbox is checked the function checkboxClicked is called where all the functions related
    to the row happen. The background colour changes and the delete and edit columns appear along with the buttons

-   The delete and edit column are hidden by default using CSS and their class is toggled whenever a checkbox is clicked
    for atleast one row. The delete and edit buttons for that specific row are also hidden by default at the start.
    Their display is also changed by changing the CSS associated with the <td> element the buttons are in. The submit students
    button also turns orange.

-   A variable called "checkedCount" is used to keep track of the number of checked checkboxes. If the number falls to
    zero the delete and edit columns are hidden.

-   The dropdown area is given a class and CSS is applied to not display it by default. The drop down image is also given a class
    and event listeners are added to all images add the start. So when the image is clicked the event handler toggles the display
    of the dropw down area and it is displayed on screen

-   The add new student button adds a new record and sends a successful alert to the user. The user generated similar to the
    default data with just a variable studentCount to keep track of the students added. The budget column gets a random 5 digit
    number by default.

-   While adding a record a table row element is created and it's innerHtml is modified. Event listeners are then added to the
    elements in that table row (checkbox, dropdown arrow, delete and edit buttons). A second tr element is created to hold the
    drop down text area and some default styles are added to it. Both these rows are appended to the tbody element of the table

-   The delete button once clicked triggers it's event handler and deletes the row and the dropdown area that comes after the row.
    If the checkedCount comes back to zero a fucntion is called to handle the events. A successful alert is displayed to the user.

-   The edit button just gives a simple prompt to the user showing "Edit the details"