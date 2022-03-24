

  export const   parseDate = (stringaUnix) => {
          return new Date(stringaUnix).toLocaleDateString();
     };

     export const   getWeekRange = () =>{
          let dateRangeArray = [];
          var curr = new Date; // get current date
          let first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
          let last = first + 6; // last day is the first day + 6
          dateRangeArray.push(new Date(curr.setDate(first)).toUTCString())
          dateRangeArray.push(new Date(curr.setDate(last)).toUTCString())
     };







