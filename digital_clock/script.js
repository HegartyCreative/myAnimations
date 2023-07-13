const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  // inbuilt methods to get the time
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "am";

  if (h > 12) {
    // after midday, the ampm will switch to PM; default setting is AM
    h = h - 12;
    ampm = "pm";

    // If the number is less than 10, we need to place a 0 before the
    // time. So it will be 09 hours and then 10 hours
    // So if number is less than 10, add 0 + the hour and if not just display the hours with two digits.
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
  }

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
  // this updates the clock every second; an infinite loop
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
