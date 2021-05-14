class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.countdownTimer = document.querySelector(selector);
    this.numberOfDays = document.querySelector('[data-value="days"]');
    this.numberOfHours = document.querySelector('[data-value="hours"]');
    this.numberOfMinutes = document.querySelector('[data-value="mins"]');
    this.numberOfSeconds = document.querySelector('[data-value="secs"]');
    this.targetDate = targetDate;
    this.timerId = null;
  }
  start() {
    let time = Date.parse(this.targetDate) - Date.parse(new Date());
    if (time <= 0) {
      clearTimeout(this.timerId);
      this.currentTime(0, 0, 0, 0);
    } else {
      this.callbeck(time);
    }
    this.timerId = setTimeout(() => {
      this.start();
    }, 1000);
  }
  callbeck(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    this.currentTime(days, hours, mins, secs);
  }

  currentTime(days, hours, mins, secs) {
    this.numberOfDays.textContent = days.toString().padStart(2, 0);
    this.numberOfHours.textContent = hours.toString().padStart(2, 0);
    this.numberOfMinutes.textContent = mins.toString().padStart(2, 0);
    this.numberOfSeconds.textContent = secs.toString().padStart(2, 0);
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021"),
});
timer.start();
