export default function TickerTape() {
  return (
    <div className="my-8 w-full relative overflow-hidden py-4">
      <div className=" inset-0 top-1 py-4 bg-yellow-500 -right-1">
        <div className="relative w-full py-4 bg-yellow-400 -right-1 overflow-hidden">
          <div className="flex gap-12 animate-marquee">
            {[
              "React",
              "Tailwind",
              "CSS",
              "JavaScript",
              "TypeScript",
              "Bootstrap",
              "HTML",
              "C++",
              "Java",
              "React",
              "Tailwind",
              "CSS",
              "JavaScript",
              "TypeScript",
              "Bootstrap",
              "HTML",
              "C++",
              "Java",
            ].map((skill, index) => (
              <span key={index} className="font-thin text-xl whitespace-nowrap">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
