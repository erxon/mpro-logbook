export interface Schedule {
  id: string;
  name: string;
  day: string;
  time: string;
  isRecurring: boolean;
}

export const sampleSchedules: Schedule[] = [
  {
    id: "1",
    name: "Prayer Meeting",
    day: "Wednesday",
    time: "3:30 AM",
    isRecurring: true
  },
  {
    id: "2",
    name: "Thanksgiving",
    day: "Saturday",
    time: "4:00 PM",
    isRecurring: true
  },
  {
    id: "3",
    name: "Choir Practice",
    day: "Friday",
    time: "6:30 PM",
    isRecurring: true
  }
];
