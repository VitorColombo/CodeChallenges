
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
        document.getElementById("day").classList.add("error"); 
        document.getElementById("month").classList.add("error"); 
        document.getElementById("year").classList.add("error"); 

        return; 
    }
    
    if (!day && !month) {
        document.getElementById("day").classList.add("error"); 
        document.getElementById("dayError").innerHTML = "Day is required";
        document.getElementById("month").classList.add("error"); 
        document.getElementById("monthError").innerHTML = "Month is required";

        return;
    }

    if (!year && !month) {
        document.getElementById("yearError").innerHTML = "Year is required";
        document.getElementById("year").classList.add("error"); 
        document.getElementById("monthError").innerHTML = "Month is required";
        document.getElementById("month").classList.add("error"); 
        return;
    }

    if (!day && !year) {
        document.getElementById("yearError").innerHTML = "Year is required";
        document.getElementById("year").classList.add("error"); 
        document.getElementById("dayError").innerHTML = "Day is required";
        document.getElementById("day").classList.add("error"); 
        return;
    }

    if (!month) {
        document.getElementById("monthError").innerHTML = "Month is required";
        document.getElementById("month").classList.add("error"); 
        return;
    }

    if (!year) {
        document.getElementById("yearError").innerHTML = "Year is required";
        document.getElementById("year").classList.add("error");
        return; 
    }

    if(year > getYear()){
        document.getElementById("yearError").innerHTML = "Must be in the past";
        document.getElementById("year").classList.add("error");
        return;         
    }

    if(year < 1900){
        document.getElementById("yearError").innerHTML = "Must be a valid year";
        document.getElementById("year").classList.add("error");
        return;         
    }

    if((day <= 0 || day >= 32)){
        document.getElementById("dayError").innerHTML = "Must be a valid day";
        document.getElementById("day").classList.add("error");
        return;         
    }

    if ((month <= 0 || month >= 13)){
        document.getElementById("monthError").innerHTML = "Must be a valid month";
        document.getElementById("month").classList.add("error");
        return;  
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


    document.getElementById("day").classList.remove("error");
    document.getElementById("month").classList.remove("error");
    document.getElementById("year").classList.remove("error");

}

function getYear() {
    const now = new Date();
    const year = now.getFullYear();
      document.getElementById("year").max = year;
    return year;
  }
  getYear();
