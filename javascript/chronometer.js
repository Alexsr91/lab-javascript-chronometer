class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      return this.currentTime++;
    }, 1000);

  }
  getMinutes() {

    let minutesCounter = 0;
    for (let i = 1; i <= this.currentTime; i++) {
      if (i % 60 === 0) {
        minutesCounter++
      }
    }
    return minutesCounter
  }



  getSeconds() {
    return this.currentTime % 60
  }

  twoDigitsNumber(number) {

    if (number < 10) { 
      return "0" + number 
    } else {
      return number
    }
  }

  stopClick() {

    clearInterval(this.intervalId)

  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {

    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`

  }
}
