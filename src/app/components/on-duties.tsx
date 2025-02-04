import ProductionMember from "./production-member";

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
