document.addEventListener("DOMContentLoaded", function () {
  const event = document.querySelector("#event");
  event.textContent = config.event;

  const updateTime = () => {
    const diff = config.target - new Date();
    let days = (diff / (1000 * 60 * 60 * 24));
    let verb = "To";

    if (days < 0) {
      days *= -1;
      verb = "Since";
    }

    document.querySelector("h1").textContent = `${Math.floor(days)} Days`;
    document.querySelector("#verb").textContent = verb;

    const timer = document.querySelector("#timer");
    timer.textContent = `${days.toFixed(6)} Days`;
  }

  updateTime();
  setInterval(updateTime, 1000);
});
