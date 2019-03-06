class timer {
    constructor(domselector, date) {
        this.container = this.ele(domselector)
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

    ele(element) {
        return document.querySelector(element)
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
        <div class="output">
        <h3>Days</h3>
        <div id="days">${days}</div>
    </div>
    <div class="output">
        <h3>Hours</h3>
        <div id="hours">${hours}</div>
    </div>
    <div class="output">
        <h3>Minutes</h3>
        <div id="minutes">${minutes}</div>
    </div>
    <div class="output">
        <h3>Seconds</h3>
        <div id="seconds">${seconds}</div>
    </div>
        `
    }

    printOutput() {
        //    this.container.innerHTML = this.template()
        document.querySelector('#output').innerHTML = this.template()
    }
}

const countDown = new timer('#output', '01.05.2019')