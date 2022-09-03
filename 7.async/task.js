class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock (time, callback, id) {
        if (typeof id ===  'undefined') {
            throw new Error('error text');
        }
        else if (typeof this.alarmCollection.find(clock => clock.id === id) !== 'undefined') {
           return console.error ('Будильник с таким id уже существует');
        }
        return this.alarmCollection.push({id, time, callback});
    }

    removeClock (id) {
        let beforeArrLength = this.alarmCollection.length;
        let afterArrLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(clock => clock.id !== id);
        return beforeArrLength < afterArrLength;
    }

    getCurrentFormattedTime () {
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return `${hours}:${minutes}`;
    }

    start () {
        let checkClock = (clock) => {
            let alarm = this.getCurrentFormattedTime();
            if (clock.time === alarm) {
                return clock.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(clock => checkClock(clock));
            }, 1000);
        }
        return;
    }
    stop () {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms () {
        return this.alarmCollection.forEach(alarm => console.log(`Будильник № ${alarm.id} заведен на ${alarm.time}`));
    }

    clearAlarms () {
        this.stop();
        return this.alarmCollection = [];
    }
}

function testCase () {
    let phoneClock = new AlarmClock();
    phoneClock.addClock('06:00', () => console.log ('Пора вставать'), 1);
    phoneClock.addClock('06:01', () => {
        console.log('Давай, вставай уже!');
         phoneClock.removeClock(2);
    }, 2);
    phoneClock.addClock('06:02', () => {
        console.log('Вставай, а то проспишь!');
        phoneClock.clearAlarms();
        phoneClock.printAlarms(); 
    }, 3);
    phoneClock.start();
    phoneClock.stop();
    phoneClock.printAlarms();
}

testCase();