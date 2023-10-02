export function getAMPM(time: string) {
    const [hours, minutes] = time.split(":").map(Number);

    // Determine AM or PM based on the hours
    const ampm = hours >= 12 ? "PM" : "AM";

    return `${time} ${ampm}`;
  }