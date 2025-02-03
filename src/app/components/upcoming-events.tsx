interface Event {
  title: string;
  dateAndTime: string;
  location: string;
}

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

function Event({ title, dateAndTime, location }: Event) {
  return (
    <>
      <div>
        <div className="p-4 rounded-lg flex items-center gap-4 bg-white mb-2">
          <div className="flex-1">
            <p className="font-semibold mb-1">{title}</p>
            <div className="text-sm text-neutral-700 mb-4">
              <p>{dateAndTime}</p>
              <p>{location}</p>
            </div>
            <p className="text-sm text-yellow-500">
              1 hr remaining time before this event
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
