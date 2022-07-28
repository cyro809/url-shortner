let timeleft = 5;
const redirectTimer = setInterval(() => {
  if (timeleft <= 0) {
    clearInterval(redirectTimer);
    document.getElementById('countdown-timer').innerHTML = 'Redirecting now';
  } else {
    document.getElementById('countdown-timer').innerHTML = `${timeleft} seconds`;
  }
  timeleft -= 1;
}, 1000);
