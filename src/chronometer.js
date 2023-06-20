class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000)
  }

  getMinutes() {
    const numberOfMinutes = Math.floor(this.currentTime / 60);
    return numberOfMinutes;
  }

  getSeconds() {
    const numberOfSeconds = this.currentTime % 60;
    return numberOfSeconds;
  }

  computeTwoDigitNumber(value) {
    const stringValue = value.toString();
    if (stringValue.length === 1) {
      return "0" + stringValue;
    }
    return stringValue;
  }


  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();

    const formatedClock = this.computeTwoDigitNumber(minutes) + ":" + this.computeTwoDigitNumber(seconds);

    return formatedClock;
  }
}
