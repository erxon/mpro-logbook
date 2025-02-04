export default function ExpectedDuty({ names }: { names: string[] }) {
  return (
    <div className="flex items-center gap-2 mt-5 text-sm md:text-md">
      {names.map((name, index) => {
        return (
          <p key={index} className="bg-white rounded-full px-2 shadow-md">
            {name}
          </p>
        );
      })}
    </div>
  );
}
