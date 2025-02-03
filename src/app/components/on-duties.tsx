import Image from "next/image";
import clsx from "clsx";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

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

export default function OnDuties() {
  return (
    <div>
      <h1 className="text-1xl font-semibold mb-4">On duty</h1>
      <div>
        <ProductionMember
          onDuty={true}
          name="John Doe"
          contactInfo={{
            phoneNumber: "+6362 944 8634",
            messenger: { name: "John Doe", link: "https://m.me/johndoe" },
            email: "john@doe.info",
          }}
          dutyDetails={{
            endesIn: "5:00 PM",
            timeRemaining: "1 hr",
          }}
        />

        <ProductionMember
          onDuty={false}
          name="John Doe"
          contactInfo={{
            phoneNumber: "+6362 944 8634",
            messenger: { name: "John Doe", link: "https://m.me/johndoe" },
            email: "john@doe.info",
          }}
          dutyDetails={{
            endesIn: "5:00 PM",
            timeRemaining: "1 hr",
          }}
        />
      </div>
    </div>
  );
}

function Avatar({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      className="rounded-full w-20 h-20 object-cover"
      alt={alt}
      width={500}
      height={500}
      src={src}
    />
  );
}

function ProductionMember({
  onDuty,
  name,
  contactInfo,
  dutyDetails,
}: ProductionMember) {
  return (
    <div
      className={clsx(
        onDuty && "shadow-lg",
        onDuty ? "bg-white" : "outline outline-1 outline-neutral-300",
        "p-4 rounded-lg flex items-center gap-4  mb-4"
      )}
    >
      <Avatar
        alt="Profile Picture"
        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className="flex-1">
        <p className="font-semibold mb-1">{name}</p>
        <div className="text-sm text-neutral-700">
          <p>{contactInfo.phoneNumber}</p>
          <div className="flex gap-1 items-center">
            <EnvelopeIcon className="w-4 h-4" />
            <p>{contactInfo.email}</p>
          </div>

          <a
            className="text-blue-500 flex gap-1 items-center"
            href={contactInfo.messenger.link}
          >
            <ChatBubbleLeftEllipsisIcon className="w-4 h-4" />
            {contactInfo.messenger.name}
          </a>
        </div>
      </div>
      {onDuty && (
        <div className="flex items-center gap-2">
          <p className="rounded-full px-2 py-1 outline outline-1 outline-yellow-500 text-sm">
            Ends in <span className="font-semibold">{dutyDetails.endesIn}</span>
          </p>
          <p className="rounded-full px-2 py-1 outline outline-1 outline-yellow-500 text-sm">
            <span className="font-semibold">{dutyDetails.timeRemaining}</span>{" "}
            remaining
          </p>
        </div>
      )}
    </div>
  );
}
