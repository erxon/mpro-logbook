import Avatar from "./avatar";
import clsx from "clsx";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";

interface ProductionMember {
  onDuty: boolean;
  name: string;
  contactInfo: {
    phoneNumber: string;
    messenger: {
      name: string;
      link: string;
    };
    email: string;
  };
  dutyDetails: {
    endesIn: string;
    timeRemaining: string;
  };
}

export default function ProductionMember({
  onDuty,
  name,
  contactInfo,
  dutyDetails,
}: ProductionMember) {
  return (
    <div
      className={clsx(
        onDuty && "shadow-lg",
        onDuty
          ? "bg-white"
          : "outline outline-1 outline-neutral-300 opacity-75",
        "p-2 lg:p-4 rounded-lg flex flex-col md:flex-row items-center gap-3 mb-4"
      )}
    >
      <div className="flex items-center gap-2 md:flex-1">
        <Avatar
          alt="Profile Picture"
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <div>
          <p className="font-semibold">{name}</p>
          <div className="text-sm text-neutral-700">
            <div className="flex gap-1 items-center text-center">
              <PhoneIcon className="w-4 h-4" />
              <p>{contactInfo.phoneNumber}</p>
            </div>
            <div className="flex gap-1 items-center text-center">
              <EnvelopeIcon className="w-4 h-4" />
              <p>{contactInfo.email}</p>
            </div>
            <a
              className="text-blue-500 flex gap-1 items-center text-center"
              href={contactInfo.messenger.link}
            >
              <ChatBubbleLeftEllipsisIcon className="w-4 h-4" />
              {contactInfo.messenger.name}
            </a>
          </div>
        </div>
      </div>
      {onDuty && (
        <div className="flex items-center gap-2">
          <p className="rounded-full px-2 py-1 outline outline-1 outline-yellow-500 md:text-sm text-xs">
            Ends in <span className="font-semibold">{dutyDetails.endesIn}</span>
          </p>
          <p className="rounded-full px-2 py-1 outline outline-1 outline-yellow-500 md:text-sm text-xs">
            <span className="font-semibold">{dutyDetails.timeRemaining}</span>{" "}
            remaining
          </p>
        </div>
      )}
    </div>
  );
}
