import Header from "./components/header/header";
import ExpectedDuty from "./components/header/expected-duty";
import { Input } from "@/components/ui/input";
import OnDuties from "./components/on-duties";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { QrCodeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-2 md:p-4 mb-4">
      <Header>
        <ExpectedDuty names={["John Doe", "Jane Doe"]} />
      </Header>
      <div className="flex gap-2">
        <Input
          className="bg-white mb-4"
          type="number"
          placeholder="Enter your ID"
        />
        <Button>
          <ArrowRightIcon />
        </Button>
      </div>
      <OnDuties />
    </div>
  );
}
