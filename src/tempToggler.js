const months = [
  { id: 0, month: "Jan" },
  { id: 1, month: "Feb" },
  { id: 2, month: "Mar" },
  { id: 3, month: "Apr" },
  { id: 4, month: "May" },
  { id: 5, month: "Jun" },
  { id: 6, month: "Jul" },
  { id: 7, month: "Aug" },
  { id: 8, month: "Sep" },
  { id: 9, month: "Oct" },
  { id: 10, month: "Nov" },
  { id: 11, month: "Dec" },
];

function mth(date) {
  let bb = null;
  months.forEach((i) => {
    if (i.id === date) {
      bb = i.month;
    }
  });
  console.log(bb);
  return bb;
}

//array of days of week
const daysOfWeek = [
  { id: 0, day: "Sun" },
  { id: 1, day: "Mon" },
  { id: 2, day: "Tue" },
  { id: 3, day: "Wed" },
  { id: 4, day: "Thu" },
  { id: 5, day: "Fri" },
  { id: 6, day: "Sat" },
];

//get day of week
function dayOfWeek(date) {
  let day = null;
  daysOfWeek.forEach((i) => {
    if (i.id === date) {
      day = i.day;
    }
  });
  return day;
}

//convert time to user time with UTC and TimeZone
function userTime(timeZoneOffset) {
  const date = new Date();
  const localTime = date.getTime();
  const localTimeOffset = date.getTimezoneOffset() * 60000;
  const utcTime = localTime + localTimeOffset;
  const locationOffset = utcTime + 1000 * timeZoneOffset;
  const locationTime = new Date(locationOffset);
  console.log(locationTime);
  return locationTime;

  //define date, day, hour amd minute
}

function renderUserTime(timeZoneOffset) {
  //define date, day, hour and minute
  const date = userTime(timeZoneOffset);
  const day = dayOfWeek(date.getDay());
  const hourAndMinutes = date.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  //define format to display time
  const dislayTime = `${day} ${hourAndMinutes}`;
  return dislayTime;
}

/*
const date = userTime(-14400);
const day = dayOfWeek(date.getDay());
const hour = date.getHours();
const minute = date.getMinutes();

const h = hour < 10 ? "0" + hour : hour;
const m = minute < 10 ? "0" + minute : minute;
const mc = hour < 12 ? "AM" : "PM";
const dislayTime = `${day} ${h}:${m}${mc}`;
*/

export default renderUserTime;
