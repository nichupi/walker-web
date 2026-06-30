export const formatTaskTime = ({startTime, endTime}: {startTime: Date, endTime: Date}) => {
  const startHour = startTime.getHours().toString().padStart(2, "0");
  const startMinute = startTime.getMinutes().toString().padStart(2, "0");;
  const endHour = endTime.getHours().toString().padStart(2, "0");;
  const endMinute = endTime.getMinutes().toString().padStart(2, "0");;
  return `${startHour}:${startMinute} - ${endHour}:${endMinute}`
}

export const getDuration = ({startTime, endTime}: {startTime: Date, endTime: Date}) => {
  const timeDiff = Math.abs(startTime.getTime() - endTime.getTime());
  const timeDiffInSecond = Math.ceil(timeDiff / 1000);
  
  const minutes = Math.floor(timeDiffInSecond / 60);
  const hours = Math.floor(minutes / 60);
  return `${hours}h`;
}
