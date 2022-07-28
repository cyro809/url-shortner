let timeleft = 5;
const redirectTimer = setInterval(() => {
  if (timeleft <= 0) {
    clearInterval(redirectTimer);
    document.getElementById('countdown-timer').innerHTML = 'now';
    setTimeout(() => {
      window.location.href = document.querySelector('#url-link');
    }, 1000);
  } else {
    document.getElementById('countdown-timer').innerHTML = `in ${timeleft} seconds`;
  }
  timeleft -= 1;
}, 1000);
