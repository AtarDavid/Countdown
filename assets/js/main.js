class timer {
    constructor(domselector, date) {
        this.container = this.ele(domselector)
        this.endDate = moment(date, "DD.MM.YYYY hh:mm")
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

    ele(element) {
        return document.querySelector(element)
    }

    update() {
        let clock = setInterval(
            () => {
                if (this.duration > 1000) {
                    this.getTime();
                } else {
                    clearInterval(clock)
                    this.stop()
                }

                // Happens in every round
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

    stop() {
        this.counter.days = 0
        this.counter.hours = 0
        this.counter.minutes = 0
        this.counter.seconds = 0
    }

    template() {
        const { days, hours, minutes, seconds } = this.counter
        return `
        <div class="output">
        <span>Days</span>
        <div id="days">${days}</div>
    </div>
    <div class="output">
        <span>Hours</span>
        <div id="hours">${hours}</div>
    </div>
    <div class="output">
        <span>Minutes</span>
        <div id="minutes">${minutes}</div>
    </div>
    <div class="output">
        <span>Seconds</span>
        <div id="seconds">${seconds}</div>
    </div>
        `
    }

    printOutput() {
        this.container.innerHTML = this.template()
    }
}

const countDown = new timer('#output', '01.05.2019 00:00')