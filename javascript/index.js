function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
}
updateTime();
setInterval(updateTime, 1000);
