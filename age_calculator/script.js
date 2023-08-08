

function calculateAge() {
    document.getElementById("dayError").innerHTML = "";
    document.getElementById("monthError").innerHTML = "";
    document.getElementById("yearError").innerHTML = "";
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    const now = new Date();
    const birth = new Date(year, month - 1, day);

    if (!day && !month && !year) {
        document.getElementById("dayError").innerHTML = "This field is required";
        document.getElementById("monthError").innerHTML = "This field is required";
        document.getElementById("yearError").innerHTML = "This field is required";
        document.getElementById("day").classList.add("error"); // Add error class
        document.getElementById("month").classList.add("error"); // Add error class
        document.getElementById("year").classList.add("error"); // Add error class

        return; // Exit the function if there's an error
    }
    
    if (!day) {
        document.getElementById("dayError").innerHTML = "Day is required";
        document.getElementById("day").classList.add("error"); // Add error class

        return; // Exit the function if there's an error
    }

    if (!month) {
        document.getElementById("monthError").innerHTML = "Month is required";
        document.getElementById("month").classList.add("error"); // Add error class
        return; // Exit the function if there's an error
    }

    if (!year) {
        document.getElementById("yearError").innerHTML = "Year is required";
        document.getElementById("year").classList.add("error"); // Add error class
        return; // Exit the function if there's an error
    }


    let ageInMilliseconds = now - birth;

    const msPerDay = 24 * 60 * 60 * 1000;
    const msPerMonth = 30.44 * msPerDay;
    const msPerYear = 365.25 * msPerDay;

    const yearsOld = Math.floor(ageInMilliseconds / msPerYear);
    ageInMilliseconds -= yearsOld * msPerYear;

    const monthsOld = Math.floor(ageInMilliseconds / msPerMonth);
    ageInMilliseconds -= monthsOld * msPerMonth;

    const daysOld = Math.floor(ageInMilliseconds / msPerDay);
  
    document.getElementById("yearsO").innerHTML = yearsOld;
    document.getElementById("monthsO").innerHTML = monthsOld;
    document.getElementById("daysO").innerHTML = daysOld;
}

function getYear() {
    const now = new Date();
    const year = now.getFullYear();
  
    // Dynamically set the max attribute for the year input element
    document.getElementById("year").max = year;
    return year;
  }
  getYear();
