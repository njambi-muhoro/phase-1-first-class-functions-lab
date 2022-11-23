
const returnFirstTwoDrivers=function (drivers) {
  return drivers.slice(0,2)
};


const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2)
}

const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (num){
  
  return function(fare){
    return num*fare 
  }
}
  
const fareDoubler = function(fare){
  return fare*2
  
}
const fareTripler = function (fare){
  return fare*3
}

const selectDifferentDrivers = function(drivers, callBack ){
 return callBack(drivers);
}

