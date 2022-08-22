// Code your solution in this file!
const myArray=['driver1','driver2','driver3','driver4'];
const returnFirstTwoDrivers=function(myArray){
    return myArray.slice(0,2);
}
const returnLastTwoDrivers=function(myArray){
    return myArray.slice(-2);
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(integer){
     return function (amount){
        return integer*amount;
    }
}
const fareDoubler=createFareMultiplier(2);
const fareTripler=createFareMultiplier(3);
function selectDifferentDrivers (myArray,returnFunction){
     return returnFunction(myArray);

}
