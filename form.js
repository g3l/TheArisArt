var i = 0; /* Set Global Variable i */
function increment() {
    i += 1; /* Function for automatic increment of field's "Name" attribute. */
}
/*
---------------------------------------------

Function to Remove Form Elements Dynamically
---------------------------------------------

*/
function removeElement(parentDiv, childDiv) {
    if (childDiv == parentDiv) {
        alert("The parent div cannot be removed.");
    }
    else if (document.getElementById(childDiv)) {
        var child = document.getElementById(childDiv);
        var parent = document.getElementById(parentDiv);
        parent.removeChild(child);
    }
    else {
        alert("Child div has already been removed or does not exist.");
        return false;
    }
}
/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Name text field.

----------------------------------------------------------------------------
*/
function nameFunction() {
    var r = document.createElement('span');
    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", "Full Name");
    increment();
    y.setAttribute("Name", "textelement_" + i);
    r.appendChild(y);
    r.setAttribute("id", "id_" + i);
    document.getElementById("myForm").appendChild(r);
    document.getElementById("namebtn").disabled = true;
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the E-mail text field.

------------------------------------------------------------------------------
*/
function emailFunction() {
    var r = document.createElement('span');
    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", "Email Adress");
    increment();
    y.setAttribute("Name", "textelement_" + i);
    r.appendChild(y);
    r.setAttribute("id", "id_" + i);
    document.getElementById("myForm").appendChild(r);
    document.getElementById("emailbtn").disabled = true;
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Contact text field.

------------------------------------------------------------------------------
*/
function contactFunction() {
    var r = document.createElement('span');
    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", "Phone Number");
    increment();
    y.setAttribute("Name", "textelement_" + i);
    r.appendChild(y);
    r.setAttribute("id", "id_" + i);
    document.getElementById("myForm").appendChild(r);
    document.getElementById("contactbtn").disabled = true;
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Message textarea field.

------------------------------------------------------------------------------
*/
function textareaFunction() {
    var r = document.createElement('span');
    var y = document.createElement("TEXTAREA");
    y.setAttribute("cols", "17");
    y.setAttribute("placeholder", "Your message..");
    increment();
    y.setAttribute("Name", "textelement_" + i);
    r.appendChild(y);
    r.setAttribute("id", "id_" + i);
    document.getElementById("myForm").appendChild(r);
    document.getElementById("messagebtn").disabled = true;
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Reset Button.

------------------------------------------------------------------------------
*/
function resetElements() {
    document.getElementById('myForm').innerHTML = '';
    document.getElementById("namebtn").disabled = false;
    document.getElementById("emailbtn").disabled = false;
    document.getElementById("contactbtn").disabled = false;
    document.getElementById("messagebtn").disabled = false;
}
//script for to acknowledge enquiry
function thankyou() {
    alert("Your enquiry has been recorded");
}