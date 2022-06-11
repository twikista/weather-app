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
export function userTime(timeZoneOffset) {
  const date = new Date();
  const localTime = date.getTime();
  const localTimeOffset = date.getTimezoneOffset() * 60000;
  const utcTime = localTime + localTimeOffset;
  const locationOffset = utcTime + 1000 * timeZoneOffset;
  const locationTime = new Date(locationOffset);
  console.log(locationTime);
  return locationTime;
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

export default renderUserTime;
