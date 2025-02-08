"use client";

import { Button } from "@/components/ui/button";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/outline";
import { Schedule } from "@/data/sampleSchedules";

interface ScheduleItemProps {
  schedule: Schedule;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export default function ScheduleItem({
  schedule,
  onEdit,
  onDelete,
}: ScheduleItemProps) {
  return (
    <div className="outline outline-1 outline-neutral-300 p-4 rounded-lg bg-white">
      <div className="flex justify-between">
        <h1 className="font-semibold text-md">{schedule.name}</h1>
        <div>
          <Button
            variant="secondary"
            className="text-zinc-600 transition hover:text-zinc-900 mr-2"
            onClick={() => onEdit?.(schedule.id)}
          >
            <PencilIcon className="w-4 h-4" />
          </Button>
          <Button
            variant="secondary"
            className="text-zinc-600 transition hover:text-zinc-900"
            onClick={() => onDelete?.(schedule.id)}
          >
            <TrashIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm text-neutral-700 font-medium">{schedule.day}</p>
        {schedule.isRecurring && (
          <ArrowPathRoundedSquareIcon className="w-4 h-4" />
        )}
      </div>
      <p className="text-sm text-neutral-500">{schedule.time}</p>
    </div>
  );
}
