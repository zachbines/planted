
// https://www.fillmurray.com/

// on form submit 

// store the value entered into the name and message portion into their own variables

//get the date this form was submitted on

  //create a new list item 

  //append each value to the new li

  //append new li to the ul



const today = new Date();
let day = today.getDay();
let month = today.getMonth();
// turned date to string to retrieve last number using index# for proper suffixing
let date = today.getDate().toString();
let year = today.getFullYear();
let formattedDate;

switch (month) {
  case 0:
    month = "January";
    break;
  case 1:
    month = "February";
    break;
  case 2:
    month = "March";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "June";
    break;
  case 6:
    month = "July";
    break;
  case 7:
    month = "August";
    break;
  case 8:
    month = "September";
    break;
  case 9:
    month = "October";
    break;
  case 10:
    month = "November";
    break;
  case 11:
    month = "December"
    break;
  }
  
switch (day) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

//figuring out how to add proper date suffix

//five me the length of the date string (either 0 or 1)
let lastNumber = date.length - 1;

if (date[lastNumber] === "1") {
  formattedDate = `${day} ${month} ${date}st, ${year} `;

} else if (date[lastNumber] === "2") {
    formattedDate = `${day} ${month} ${date}nd, ${year} `;

} else if (date[lastNumber] === "3" ) {
    formattedDate = `${day} ${month} ${date}rd, ${year} `;

} else {
   formattedDate = `${day} ${month} ${date}th, ${year} `;
}

// console
console.log(formattedDate);