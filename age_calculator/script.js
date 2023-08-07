
function calculateAge() {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    const now = new Date();
    const birth = new Date(year, month - 1, day);

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
