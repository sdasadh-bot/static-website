function updateClock() {
const now = new Date();

const hours = now.getHours().toString().padStart(2, "0");
const minutes = now.getMinutes().toString().padStart(2, "0");
const seconds = now.getSeconds().toString().padStart(2, "0");

const clock = document.getElementById("clock");

if (clock) {
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}


}

function updateCountdown() {
const now = new Date();

// Next January 1st
const newYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);
const distance = newYear.getTime() - now.getTime();

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
);
const seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
);

const countdown = document.getElementById("countdown");

if (countdown) {
    countdown.textContent =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

if (distance <= 0) {
    if (countdown) {
        countdown.textContent = "Happy New Year!";
    }
    return;
}


}

document.addEventListener("DOMContentLoaded", function () {
const popupBtn = document.getElementById("popupBtn");

if (popupBtn) {
    popupBtn.addEventListener("click", function () {
        alert("Hello! This is your popup message.");
    });
}

updateClock();
updateCountdown();

setInterval(updateClock, 1000);
setInterval(updateCountdown, 1000);

console.log("Script loaded successfully.");


});