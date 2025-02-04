import Header from "./components/header/header";
import ExpectedDuty from "./components/header/expected-duty";
import { Input } from "@/components/ui/input";
import OnDuties from "./components/on-duties";

export default function Page() {
  return (
    <div className="p-2 md:p-4 mb-4">
      <Header>
        <ExpectedDuty names={["John Doe", "Jane Doe"]} />
      </Header>
      <Input
        className="bg-white mb-4"
        type="number"
        placeholder="Enter your ID"
      />
      <OnDuties />
    </div>
  );
}
