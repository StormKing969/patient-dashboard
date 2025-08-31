import type { Patient } from "../../types/patient";

const DiagnosticList = ({
  selectedPatient,
}: {
  selectedPatient: Patient | null;
}) => {
  return (
    <section className={"bg-white rounded-xl py-5 px-4 h-full"}>
      <h1 className={"mb-3 text-lg font-bold"}>Diagnostic List</h1>

      <div className={"overflow-y-auto w-[600px] cursor-pointer"}>
        {selectedPatient ? (
          <table className={"text-sm "}>
            <thead className={"bg-gray-400"}>
              <tr>
                <th className={"px-4 py-2 text-left font-semibold border-b"}>
                  Problem/Diagnosis
                </th>
                <th className={"px-4 py-2 text-left font-semibold border-b"}>
                  Description
                </th>
                <th className={"px-4 py-2 text-left font-semibold border-b"}>
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {selectedPatient.diagnostic_list.map((diagnostic, index) => (
                <tr key={index}>
                  <td className={"px-4 py-2"}>{diagnostic.name}</td>
                  <td className={"px-4 py-2"}>{diagnostic.description}</td>
                  <td className={"px-4 py-2"}>{diagnostic.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className={"text-gray-600 text-center"}>
            Please select a patient to view their diagnostic list.
          </p>
        )}
      </div>
    </section>
  );
};

export default DiagnosticList;