import type { Patient } from "../../types/patient";
import React, { type SetStateAction } from "react";

const PatientsList = ({
  patientsList,
  setSelectedPatient,
  selectedPatient,
}: {
  patientsList: Patient[];
  setSelectedPatient: React.Dispatch<SetStateAction<Patient | null>>;
  selectedPatient: Patient | null;
}) => {
  return (
    <section className={"bg-white rounded-xl py-5 px-4"}>
      <div className={"flex flex-row justify-between items-center"}>
        <h2 className={"text-2xl font-bold mb-4"}>Patients List</h2>
        <img
          src={"search_FILL0_wght300_GRAD0_opsz24.svg"}
          alt={"Search Icon"}
        />
      </div>

      <div className={"p-4 rounded-lg w-90 h-screen overflow-y-auto"}>
        {patientsList.length === 0 ? (
          <p>No patients found.</p>
        ) : (
          <ul>
            {patientsList.map((patient, index) => (
              <li
                className={`border-b border-gray-200 p-3 cursor-pointer ${selectedPatient?.name.startsWith(patient.name) ? "bg-[#D8FCF7]" : ""} hover:bg-gray-100 flex flex-row justify-between items-center`}
                onClick={() => setSelectedPatient(patient)}
                key={index}
              >
                <div className={"flex flex-row items-center gap-3"}>
                  <img
                    src={patient.profile_picture}
                    alt={patient.name}
                    className={"w-12 h-12 rounded-full object-cover"}
                  />

                  <div>
                    <p className={"font-semibold"}>{patient.name}</p>
                    <p className={"text-sm text-gray-600"}>
                      {patient.gender}, {patient.age}
                    </p>
                  </div>
                </div>

                <img
                  src={"more_horiz_FILL0_wght300_GRAD0_opsz24.svg"}
                  alt={"More Options"}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default PatientsList;