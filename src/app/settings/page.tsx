"use client";

import { Input } from "@/components/ui/input";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import Schedules from "@/app/components/settings/schedules";

export default function Page() {
  return (
    <>
      <div className="flex items-center gap-1 mb-4 text-zinc-800">
        <Cog6ToothIcon className="w-8 h-8" />
        <h1 className="text-3xl font-semibold">Settings</h1>
      </div>
      <hr className="mb-4" />
      <div>
        <h1 className="text-2xl font-semibold mb-4">Schedules</h1>
        <Schedules />
        <div>
          <h1 className="text-1xl font-semibold">Add new</h1>
          <Input placeholder="Event name" />
        </div>
      </div>
    </>
  );
}
