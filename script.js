
// https://www.fillmurray.com/

// on form submit 

// store the value entered into the name and message portion into their own variables

//get the date this form was submitted on

  //create a new list item 

  //append each value to the new li

  //append new li to the ul



//these thre functions Format todays date to match the sites style 
const monthFormat = (today) => {
    let month = today.getMonth();

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

      return month;
}

const dayFormat = (today) => {
    let day = today.getDay();

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
     return day;
}

const dateFormatFinal = () => {

    const today = new Date();
    let date = today.getDate().toString();
    let year = today.getFullYear();
    let formattedDate;
    // storing the returns of the month and day conditionals
    const month = monthFormat(today);
    const day = dayFormat(today);

    //find me the length of the date string (either 0 or 1)
    const lastDigit = date.length - 1;

    //checking index numbers
    if (date[lastDigit] === "1") {
      formattedDate = `${day} ${month} ${date}st, ${year} `;
    
    } else if (date[lastDigit] === "2") {
        formattedDate = `${day} ${month} ${date}nd, ${year} `;
    
    } else if (date[lastDigit] === "3" ) {
        formattedDate = `${day} ${month} ${date}rd, ${year} `;
    
    } else {
       formattedDate = `${day} ${month} ${date}th, ${year} `;
    }
    
    console.log(formattedDate);
    return formattedDate;
}
dateFormatFinal();

// console
