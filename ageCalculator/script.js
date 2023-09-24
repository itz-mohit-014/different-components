const inputDate = document.getElementById('dob');
const calculateBtn = document.getElementById('calculate');
const displayAgeEl = document.querySelector('.calculated-age')

calculateBtn.addEventListener('click' , calculateAge);


function calculateAge ( ) {

          // Getting current date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDateOfMonth = currentDate.getDate();

         // GEt the value of user Date of Birth
    const userDob = new Date(inputDate.value);
    const userDobYear = userDob.getFullYear();
    const userDobMonth = userDob.getMonth();
    const uesrDobDateOfMonth = userDob.getDate();


    // If user doesn't enter AGe and want to calculate 
    if(inputDate.value === ""){
        displayAgeEl.innerText = "Please enter a valid date of birth.";
        return ;
    }

    // Checking if user Enter the Future Date 
    if (userDobYear > currentYear || (userDobYear === currentYear && userDobMonth > currentMonth) || 
    (userDobYear === currentYear && userDobMonth === currentMonth && uesrDobDateOfMonth > currentDateOfMonth)) {
        displayAgeEl.innerText = "Date of birth cannot be in the future.";
        return;
    }

    
    // calculate the age here >>>
    let year = currentYear - userDobYear ;
    let month = currentMonth - userDobMonth;
    let date = currentDate.getDate() - userDob.getDate();

    // check in different situations

     if(userDob === currentDate){
        // make some fun if user try to check the same day Age
        displayAgeEl.innerText= `Congratulation! Today is your first Day on the Earth`;

    } else if(year === 0 && month === 0){
        // display only day
        displayAgeEl.innerText= `Your Age is ${date} ${date > 1 ? 'Days' :' Day'} old `;

    }else if(year === 0){
        // display only month and day
            displayAgeEl.innerText= `Your Age is ${month } ${month > 1 ? 'months' :' month'} and ${date} ${date > 1 ? 'Days' :' Day'} old `;

    } else if( month === 0 && date === 0){
        // display only year
        displayAgeEl.innerText= `Many many congratulation !! Today is your birthday ... and Your Age is ${year } ${year > 1 ? 'years' : 'year'} old `;

    }
        // This is main state below it's round of the year and Months As per the situation

    else if(currentMonth < userDobMonth || currentMonth === userDobMonth && currentDateOfMonth < uesrDobDateOfMonth){

            // round the year and month if greater.
        if(currentMonth < userDobMonth && currentDateOfMonth < uesrDobDateOfMonth ){
            year--;
            month = 10 + currentMonth - userDobMonth; //month is 11 to round of the month and the year as well.[ month is zero based index]
            date = 31 + currentDateOfMonth - uesrDobDateOfMonth;
            displayAgeEl.innerText= `Your Age is ${year } ${year > 1 ? 'years' : 'year'}, ${month } ${month > 1 ? 'months' :' month'} and ${date} ${date > 1 ? 'Days' :' Day'} old `;
        }

        // round of the month if the date of the month is greater.
        else if ( currentMonth === userDobMonth && currentDateOfMonth < uesrDobDateOfMonth ){

            year--;
            month = 11 + currentMonth - userDobMonth; //month is 11 to round of the month and the year as well.[ month is zero based index]
            date = 31 + currentDateOfMonth - uesrDobDateOfMonth;
            displayAgeEl.innerText= `Your Age is ${year } ${year > 1 ? 'years' : 'year'}, ${month } ${month > 1 ? 'months' :' month'} and ${date} ${date > 1 ? 'Days' :' Day'} old `;
        }
        // round of the year if month is greater.
        else{
            year--;
            month = 12 + currentMonth - userDobMonth;
            displayAgeEl.innerText= `Your Age is ${year } ${year > 1 ? 'years' : 'year'}, ${month } ${month > 1 ? 'months' :' month'} and ${date} ${date > 1 ? 'Days' :' Day'} old `; 
        }

    } else {   
        displayAgeEl.innerText= `Your Age is ${year } ${year > 1 ? 'years' : 'year'}, ${month } ${month > 1 ? 'months' :' month'} and ${date} ${date > 1 ? 'Days' :' Day'} old `;
    }


}

