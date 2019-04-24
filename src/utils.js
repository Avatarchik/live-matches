const formatTodayDate = eventDate => {
  const hours =
    eventDate.getHours() < 10
      ? `0${eventDate.getHours()}`
      : eventDate.getHours();
  const minutes =
    eventDate.getMinutes() < 10
      ? `0${eventDate.getMinutes()}`
      : eventDate.getMinutes();
  return `Today, ${hours}:${minutes}`;
};

const formateDate = eventDate => {
  const year = eventDate.getFullYear();
  const month =
    eventDate.getMonth() + 1 < 10
      ? `0${eventDate.getMonth() + 1}`
      : eventDate.getMonth() + 1;
  const date =
    eventDate.getDate() < 10 ? `0${eventDate.getDate()}` : eventDate.getDate();
  return `${year}-${month}-${date}`;
};

const formatEventDate = dateTime => {
  const eventDate = new Date(dateTime);
  const isEventStartToday =
    new Date().setHours(0, 0, 0, 0) === new Date(dateTime).setHours(0, 0, 0, 0);
  const dateValue = isEventStartToday
    ? formatTodayDate(eventDate)
    : formateDate(eventDate);
  return dateValue;
};

export default formatEventDate;
