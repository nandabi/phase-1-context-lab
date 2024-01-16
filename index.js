function createEmployeeRecord(array) {
    return{
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array [3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
function createEmployeeRecords(array) {
    return array.map(createEmployeeRecord)
}
function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split('')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour,10),
        date
    })
    return this 
}
function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    })
    return this
}
function hoursWorkedOnDate(dateStamp) {
    let timeIn = this.timeInEvents.find(e => e.date == dateStamp)
    let timeOut = this.timeOutEvents.find(e => e.date == dateStamp)
    return (timeOut.hour - timeIn.hour) / 100
}
function wagesEarnedOnDate(dateStamp) {
    return hoursWorkedOnDate.call(this, dateSytamp) * this.payPerHour
}
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(e => e.firstName)
}
function calculatePayroll(array) {
    return array.reduce((total, employee) => 
    total + allWagesFor.call(employee),0)
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

