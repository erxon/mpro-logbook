import { ReactNode } from "react";

export default function Header({ children }: { children: ReactNode }) {
  return (
    <div className="col-span-2 mb-8 pb-4 border-b-2 border-yellow-300">
      <h1 className="text-md md:text-1xl mb-1">Hello!</h1>
      <h1 className="text-2xl md:text-3xl mb-3">
        Currently broadcasting{" "}
        <span className="font-semibold">Worship Service</span>
      </h1>
      <div className="flex items-center gap-2 text-sm md:text-md">
        <p>
          <span className="font-medium">Started:</span> 1:30 PM
        </p>
        <p>
          <span className="font-medium">Remaining:</span> 1 hr
        </p>
        <p>
          <span className="font-medium">Upnext:</span> Mon, Mass Indoctrination
        </p>
      </div>
      {children}
    </div>
  );
}
