class timer {
    constructor(domselector, date) {
        this.container = document.querySelector(domselector)
        this.endDate = moment(date, "DD.MM.YYYY").format('DD.MM.YYYY, h:mm:ss a')
        this.currentTime = null

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

    }
}

const countDown = new timer('#output', '14.03.2019')