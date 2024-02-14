document.addEventListener("DOMContentLoaded", function () {
  const countdownDate = new Date("1 June, 2024 01:00:00").getTime();
  const countdownElementDays = document.getElementById("days");
  const countdownElementHours = document.getElementById("hours");
  const countdownElementMinutes = document.getElementById("minutes");
  const countdownElementSeconds = document.getElementById("seconds");

  const countdownInterval = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElementDays.innerHTML = days === 1 ? `${days} dag` : `${days} dagar`;
    countdownElementHours.innerHTML = hours === 1 ? `${hours} timme` : `${hours} timmar`;
    countdownElementMinutes.innerHTML = minutes === 1 ? `${minutes} minut` : `${minutes} minuter`;
    countdownElementSeconds.innerHTML = seconds === 1 ? `${seconds} sekund` : `${seconds} sekunder`;

    if (distance < 0) {
      clearInterval(countdownInterval);
      countdownElementDays.innerHTML = "NU ÄR DET JUNI OCH SOMMAR!!!!";
      countdownElementHours.innerHTML = "";
      countdownElementMinutes.innerHTML = "";
      countdownElementSeconds.innerHTML = "";
    }
  }, 1000);
});

