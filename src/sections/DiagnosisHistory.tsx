import BloodPressureChart from "../components/BloodPressureChart.tsx";
import type { Patient } from "../../types/patient";
import IndividualDiagnosisData from "../components/IndividualDiagnosisData.tsx";

const DiagnosisHistory = ({
  selectedPatient,
}: {
  selectedPatient: Patient | null;
}) => {
  return (
    <section className={"bg-white rounded-xl py-5 px-4"}>
      <h1 className={"mb-3 text-lg font-bold"}>Diagnosis History</h1>

      {selectedPatient ? (
        <div>
          <BloodPressureChart selectedPatient={selectedPatient} />

          <div className={"flex flex-row gap-5 justify-between items-center"}>
            <IndividualDiagnosisData
              title={"Respiratory Rate"}
              value={
                selectedPatient.diagnosis_history[0].respiratory_rate.value
              }
              levels={
                selectedPatient.diagnosis_history[0].respiratory_rate.levels
              }
              unit={"bpm"}
              image={"respiratory rate.svg"}
              bgColor={"#E0F3FA"}
            />

            <IndividualDiagnosisData
              title={"Temperature"}
              value={selectedPatient.diagnosis_history[0].temperature.value}
              levels={selectedPatient.diagnosis_history[0].temperature.levels}
              unit={"°F"}
              image={"temperature.svg"}
              bgColor={"#FFE6E9"}
            />

            <IndividualDiagnosisData
              title={"Heart Rate"}
              value={selectedPatient.diagnosis_history[0].heart_rate.value}
              levels={selectedPatient.diagnosis_history[0].heart_rate.levels}
              unit={"bpm"}
              image={"HeartBPM.svg"}
              bgColor={"#FFE6F1"}
            />
          </div>
        </div>
      ) : (
        <p className={"text-gray-600 text-center"}>
          Please select a patient to view their diagnosis history.
        </p>
      )}
    </section>
  );
};

export default DiagnosisHistory;