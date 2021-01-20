const countdownDate = new Date('Jan 31, 2021').getTime();

// Update my countdown every 1 sec
let id = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the time between now and the count down date
  let time = countdownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  const refs = {
    day: (document.querySelector('[data-value="days"]').textContent = days),
    hour: (document.querySelector('[data-value="hours"]').textContent = hours),
    min: (document.querySelector('[data-value="mins"]').textContent = mins),
    sec: (document.querySelector('[data-value="secs"]').textContent = secs),
  };

  if (time <= 0) {
    clearInterval(id);
    refs.day.textContent = 0;
    refs.hour.textContent = 0;
    refs.min.textContent = 0;
    refs.sec.textContent = 0;
  }
}, 1000);
