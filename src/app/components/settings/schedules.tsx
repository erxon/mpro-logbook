"use client";

import ScheduleItem from "./ScheduleItem";
import { sampleSchedules } from "@/data/sampleSchedules";

export default function Schedules() {
  return (
    <div className="space-y-3 mb-4">
      {sampleSchedules.map((schedule) => (
        <ScheduleItem
          key={schedule.id}
          schedule={schedule}
          onEdit={(id) => console.log("Edit schedule:", id)}
          onDelete={(id) => console.log("Delete schedule:", id)}
        />
      ))}
    </div>
  );
}
