// Code your solution here:
function driversWithRevenueOver(drivers, value) {
  return drivers.filter(function (driver){
    return driver.revenue > value
  })
};

function driverNamesWithRevenueOver(drivers, value) {
  return driversWithRevenueOver(drivers, value).map(function (driver){
    return driver.name
  })
}

function exactMatch(drivers, driverobject) {
  return drivers.filter(function (driver){
    return driver[Object.keys(driverobject)[0]] && driver[Object.keys(driverobject)[0]] === driverobject[Object.keys(driverobject)[0]]
  })
}

function exactMatchToList (drivers, driverobject) {
  return exactMatch(drivers, driverobject).map(function (driver){
    return driver.name
  })
}
