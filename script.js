//get the form and add event lister to the form 

const formsub = document.getElementById("ageVerificationForm");
const redirectLink="https://www.google.com/";
const message="Your age is restricted";
formsub.addEventListener("submit", (e) => {
    e.preventDefault();
    verifyAge();

});
// function for age verification
function verifyAge() {
    // get user input values
    let dayvalue = Number(document.getElementById("day").value);
    let monthvalue = Number(document.getElementById("month").value) - 1;
    let yearvalue = Number(document.getElementById("year").value);
    //    current date 
    let date = new Date();
    let currentDay = date.getDate();
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();
    //    difference betweeb current year and user input year
    let difference = currentYear - yearvalue;

    //    checks for the age verification
    if (difference > 15) {
        window.location.assign(redirectLink);
    }
    else if (difference === 15) {
        if (currentMonth > monthvalue) {
            window.location.assign(redirectLink);
        } else if (currentMonth == monthvalue) {
            if (currentDay >= dayvalue) {
                window.location.assign(redirectLink);
            }
            else {
                alert(message);
            }

        } else {
            alert(message);
        }

    } else {
        alert(message);
    }

}
