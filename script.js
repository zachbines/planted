//  for the blog form comment page

//these three functions Format todays date to match the sites style 
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

    } else if (date[lastDigit] === "3") {
        formattedDate = `${day} ${month} ${date}rd, ${year} `;

    } else {
        formattedDate = `${day} ${month} ${date}th, ${year} `;
    }

    // console.log(formattedDate);
    return formattedDate;
}

const generatePost = (userName, userComment) => {
    // putting todays date in a variable
    const todaysDate = dateFormatFinal();

    //create a new list item 
    const newListItem = document.createElement('li');

    //add profile pic
    newListItem.innerHTML = `<img src="https://www.fillmurray.com/94/94" alt="Bill's face">`;
  
    // create new div.comment-text, append to li
    const textDiv = document.createElement('div');
    textDiv.classList.add('comment-text');
    newListItem.appendChild(textDiv);

    // create new paragraphs with user info
        // date/name    
    const dateNameP = document.createElement('p');
    dateNameP.innerHTML = `<time>${todaysDate}</time> by <span>${userName}<span>`;
    dateNameP.classList.add('capitalize');
        //users comment
            //make a p tag
    const userCommentP = document.createElement('p');
            // make a text node 
    const comment = document.createTextNode(userComment);
            //put the node in the p
    userCommentP.appendChild(comment);
    // console.log(userCommentP);
            //append both to the div
    textDiv.appendChild(dateNameP);
    textDiv.appendChild(userCommentP);
    // console.log(textDiv);

    //append each value to the new li
    newListItem.appendChild(textDiv);
    return newListItem;
} 


const form = document.querySelector('.blog-form');
const commentFeed = document.getElementById('comment-list');

// on form submit 
form.addEventListener('submit', function(event) {
    // store the value entered into the name and message portion into their own variables
        event.preventDefault();
        // get the name and comment values 
        const userInput = document.getElementById('user-name');
        const userName = userInput.value;

        const textArea = document.getElementById('comment');
        const comment = textArea.value;
        // egt user email (to clear after, for these purposes)
        const emailInput = document.getElementById('user-email');

        console.log(userName);
        console.log(comment);

        // if both of those fields are not empty
        if (userName && comment) {
            //create a new list item 
            const userPost = generatePost(userName, comment);
            commentFeed.appendChild(userPost);

            userInput.value = '';
            emailInput.value = '';
            textArea.value = '';

        } else if (userName && !comment) {
            alert(`${userName}, add a comment!`)

        } else if (!userName && comment) {
            alert(`Thanks for your input! Please add your name too!`)
        }

    })





// For the hamburger menu's 

