import { ReactNode } from "react";
import "./global.css";
import Navigation from "./components/navigation";
import UpcomingEvents from "./components/upcoming-events";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className="bg-neutral-100">
        <div className="p-4">
          <h1 className="text-2xl font-semibold mb-10">
            MCGI PRODUCTIONS BICLATAN
          </h1>
          <div className="grid grid-cols-4 gap-4">
            <Navigation />
            <div className="col-span-2">{children}</div>
            <div>
              <h1 className="font-semibold mb-8">Upcoming events</h1>
              <UpcomingEvents />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
