import Navbar from "./sections/Navbar.tsx";
import PatientsList from "./sections/PatientsList.tsx";
import DiagnosisHistory from "./sections/DiagnosisHistory.tsx";
import DiagnosticList from "./sections/DiagnosticList.tsx";
import Profile from "./sections/Profile.tsx";
import LabResults from "./sections/LabResults.tsx";
import { useEffect, useState } from "react";
import { getAllPatients } from "./lib/utils.ts";
import type { Patient } from "../types/patient";

function App() {
  const [currentPageId, setCurrentPageId] = useState<string>("PatientPage");
  const [patientsList, setPatientsList] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  useEffect(() => {
    getAllPatients().then(setPatientsList);
  }, []);

  useEffect(() => {
    if (!patientsList.length) return;
    const match = patientsList.find((p) => p.name?.includes("Jessica Taylor"));
    setSelectedPatient(match ?? null);
  }, [patientsList]);

  return (
    <div
      className={
        "bg-[#F6F7F8] min-h-screen overflow-y-auto py-3 px-5"
      }
    >
      <header>
        <Navbar
          setCurrentPageId={setCurrentPageId}
          currentPageId={currentPageId}
        />
      </header>

      {/*Would have used react-routes if I had to design the other pages*/}
      <main className={"flex flex-row justify-between gap-5"}>
        <PatientsList
          patientsList={patientsList}
          setSelectedPatient={setSelectedPatient}
          selectedPatient={selectedPatient}
        />

        <div className={"flex flex-col gap-5"}>
          <DiagnosisHistory selectedPatient={selectedPatient} />
          <DiagnosticList selectedPatient={selectedPatient} />
        </div>

        <div>
          <Profile selectedPatient={selectedPatient} />
          <LabResults selectedPatient={selectedPatient} />
        </div>
      </main>
    </div>
  );
}

export default App;