import Event from "./event";

export default function UpcomingEvents() {
  const events = [
    {
      title: "Prayer Meeting",
      dateAndTime: "february 5, 2025 3:30 AM",
      location: "Biclatan, General Trias, Cavite",
    },
    {
      title: "Mass Indoctrination",
      dateAndTime: "february 4, 2025 7:00 PM",
      location: "Biclatan, General Trias, Cavite",
    },
  ];

  return (
    <div>
      {events.map((event, index) => {
        return <Event key={index} {...event} />;
      })}
    </div>
  );
}
