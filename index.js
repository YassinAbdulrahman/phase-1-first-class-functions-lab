// Code your solution in this file!
let arr = []
const returnFirstTwoDrivers = function (arr) {
    return arr.slice(0, 2)
}

console.log(returnFirstTwoDrivers(['YSN', 'AHMED', 'QASSEM', 'ABDO']));

let arrOne = []
const returnLastTwoDrivers = function (arrOne) {
    return arrOne.slice(arrOne.length - 2)
}

console.log(returnLastTwoDrivers(['YSN', 'AHMED', 'QASSEM', 'ABDO']));

let selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(num) {
    return function (num2) {
        return num * num2
    }
}

const fareDoubler = createFareMultiplier(2);
fareDoubler(10);

const fareTripler = createFareMultiplier(3);
fareTripler(12)
let drivers  = []
function selectDifferentDrivers(drivers , fun){
      return fun(drivers)
} 

selectDifferentDrivers(['YSN', 'AHMED', 'QASSEM', 'ABDO'] , returnFirstTwoDrivers())