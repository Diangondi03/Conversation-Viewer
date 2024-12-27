function padZero(num) {
    return num.toString().padStart(2, '0');
}

export function getTime(date){
    const messageTimeDate = new Date(date)
    // Extract the hours, minutes, and seconds
    let hours = messageTimeDate.getHours();
    const minutes = messageTimeDate.getMinutes();
    const seconds = messageTimeDate.getSeconds();

    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours from 24-hour to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    // Format the time as HH:MM:SS AM/PM
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${ampm}`;
}