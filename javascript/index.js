let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
losAngelesTimeElement.innerHTML = "6:20:15 <small>AM</small>";
