class timer {
    constructor(domselector, date) {
        this.container = document.querySelector(domselector)
        this.endDate = moment(date, "DD.MM.YYYY")
        this.currentTime = moment()
        this.duration = this.endDate - this.currentTime

        this.counter = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }

        this.update()

    }

    update() {
        setInterval(
            () => {
                this.getTime();
                this.printOutput();
            }, 1000)
    }

    getTime() {
        this.duration = moment.duration(
            this.duration - 1000,
            "milliseconds"
        )
        this.counter.days = Math.floor(this.duration._milliseconds / 24 / 3600 / 1000)
        this.counter.hours = this.duration.hours()
        this.counter.minutes = this.duration.minutes()
        this.counter.seconds = this.duration.seconds()
    }

    template() {
        const { days, hours, minutes, seconds } = this.counter
        return `
          <span class="days">${days}</span> Days :
          <span class="hours">${hours}</span> Hours :
          <span class="minutes">${minutes}</span> Minutes :
          <span class="seconds">${seconds}</span> Seconds
        `
    }

    printOutput() {
        this.container.innerHTML = this.template()
    }
}

const countDown = new timer('#output', '14.03.2019')