const refs = {
  day: document.querySelector('[data-value="days"]'),
  hour: document.querySelector('[data-value="hours"]'),
  min: document.querySelector('[data-value="mins"]'),
  sec: document.querySelector('[data-value="secs"]'),
};

const { day, hour, min, sec } = refs;

const countdownDate = new Date('Jan 12, 2021').getTime();

// Update my countdown every 1 sec
let id = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the time between now and the count down date
  const time = countdownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  day.textContent = days;
  hour.textContent = hours;
  min.textContent = mins;
  sec.textContent = secs;

  if (time <= 0) {
    clearInterval(id);
    Object.keys(refs).map(key => (refs[key].textContent = 0));
    // day.textContent = 0;
    // hour.textContent = 0;
    // min.textContent = 0;
    // sec.textContent = 0;
  }
}, 1000);
