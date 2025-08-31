const IndividualDiagnosisData = ({
  title,
  value,
  levels,
  unit,
  image,
  bgColor,
}: {
  title: string;
  value: number;
  levels: string;
  unit: string;
  image: string;
  bgColor: string;
}) => {
  return (
    <div
      className={`flex flex-col items-start p-4 rounded-lg w-full min-w-[175px] mt-5`}
      style={{ backgroundColor: bgColor }}
    >
      <img src={image} alt={title} />
      <h2 className={"text-sm font-semibold text-[#072635] mt-3"}>{title}</h2>
      <p className={"text-2xl font-bold"}>
        {value} {unit}
      </p>

      <div className={"flex flex-row items-center mt-5 gap-2"}>
        {levels.startsWith("Lower") ? (
          <img src={"ArrowDown.svg"} alt={"Down Arrow"} />
        ) : levels.startsWith("Higher") ? (
          <img src={"ArrowUp.svg"} alt={"Up Arrow"} />
        ) : null}
        <p className={"text-gray-600 text-sm"}>{levels}</p>
      </div>
    </div>
  );
};

export default IndividualDiagnosisData;