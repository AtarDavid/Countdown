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
        this.currentTime = moment().format('DD.MM.YYYY, h:mm:ss a')
    }

    printOutput() {
        console.log(this.currentTime)
        this.container.innerHTML = this.currentTime
    }
}
const countDown = new timer('#output', '14.03.2019')