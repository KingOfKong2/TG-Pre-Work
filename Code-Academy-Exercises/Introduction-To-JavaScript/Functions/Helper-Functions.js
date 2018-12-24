function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows,columns){
  return monitorCount(rows,columns) *200;
}
const totalCost=costOfMonitors(5,4);
console.log(totalCost);

/*
This lesson taught that we can use helper functions to preform smaller tasks inside of other functions.
This way we can break down larger problems into smaller pieces that will be easier to read and debug later.
*/
