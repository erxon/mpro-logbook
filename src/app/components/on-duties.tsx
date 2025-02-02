import Image from "next/image";

export default function OnDuties() {
  return (
    <div>
      <h1 className="text-1xl font-semibold mb-4">On duty</h1>
      <div>
        <div className="p-4 shadow-lg rounded-lg flex items-center gap-4 bg-white">
          <Avatar
            alt="Profile Picture"
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <div className="flex-1">
            <p className="font-semibold mb-1">John Doe</p>
            <div className="text-sm text-neutral-700">
              <p>+6362 944 8634</p>
              <p>John Doe</p>
              <p>ericsoncastasus@outlook.com</p>
            </div>
          </div>
          <p className="rounded-full px-2 py-1 outline outline-1 outline-yellow-500 text-sm">
            Ends in <span className="font-semibold">5:00 PM</span>
          </p>
          <p className="rounded-full px-2 py-1 outline outline-1 outline-yellow-500 text-sm">
            <span className="font-semibold">1 hr</span> remaining
          </p>
        </div>
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
