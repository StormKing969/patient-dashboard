import type { Patient } from "../../types/patient";

const LabResults = ({
  selectedPatient,
}: {
  selectedPatient: Patient | null;
}) => {
  return (
    <div className={"bg-white rounded-xl py-5 px-4 h-fit min-w-[250px]"}>
      <h1 className={"mb-3 text-lg font-bold"}>Lab Results</h1>
      {selectedPatient ? (
        <div className={"overflow-y-auto"}>
          {selectedPatient.lab_results.map((lab, index) => (
            <div
              className={
                "flex flex-row gap-2 justify-between items-start py-2 px-3 hover:bg-gray-600 cursor-pointer"
              }
              key={index}
            >
              <p>{lab}</p>
              <img
                src={"/download_FILL0_wght300_GRAD0_opsz24.svg"}
                alt={"Download Link"}
              />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p className={"text-gray-600 text-center"}>
            Select a patient to view profile
          </p>
        </div>
      )}
    </div>
  );
};

export default LabResults;