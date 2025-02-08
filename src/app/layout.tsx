import { ReactNode } from "react";
import "./global.css";
import Navigation from "./components/navigation";
import UpcomingEvents from "./components/upcoming-events/upcoming-events";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="html5-qrcode.min.js" async />
      </head>
      <body className="bg-neutral-100">
        <div className="p-4">
          <div className="flex items-center mb-5 md:mb-10 gap-2">
            <div className="md:hidden">
              <Drawer direction="left">
                <DrawerTrigger className="text-sm w-auto">
                  <Bars3Icon className="w-4 h-4" />
                </DrawerTrigger>
                <DrawerContent className="h-full rounded-none">
                  <DrawerHeader>
                    <DrawerTitle>Menu</DrawerTitle>
                    <DrawerDescription>
                      Please choose where to go
                    </DrawerDescription>
                  </DrawerHeader>
                  <Navigation />
                  <div className="p-4">
                    <div className="flex items-center gap-1 mb-1">
                      <CalendarIcon className="w-4 h-4" />
                      <h1 className="font-semibold">Upcoming events</h1>
                    </div>
                    <UpcomingEvents />
                  </div>
                  <DrawerFooter>
                    <DrawerClose>Cancel</DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
            <h1 className="text-1xl md:text-2xl font-semibold">
              MCGI PRODUCTIONS BICLATAN
            </h1>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="hidden md:block">
              <Navigation />
            </div>
            <div className="col-span-4 md:col-span-3 lg:col-span-2">
              {children}
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center gap-1 mb-8">
                <CalendarIcon className="w-4 h-4" />
                <h1 className="font-semibold">Upcoming events</h1>
              </div>
              <UpcomingEvents />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
