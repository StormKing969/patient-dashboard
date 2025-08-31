import { useMemo } from "react";
import type { Patient } from "../../types/patient";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const BloodPressureChart = ({
  selectedPatient,
}: {
  selectedPatient: Patient;
}) => {
  const data = useMemo(
    () => ({
      labels:
        selectedPatient?.diagnosis_history.map(
          (ele) => `${ele.month}, ${ele.year}`,
        ) || [],
      datasets: [
        {
          label: "Systolic",
          data:
            selectedPatient?.diagnosis_history.map(
              (ele) => ele.blood_pressure.systolic.value,
            ) || [],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "Diastolic",
          data:
            selectedPatient?.diagnosis_history.map(
              (ele) => ele.blood_pressure.diastolic.value,
            ) || [],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    }),
    [selectedPatient],
  );

  const options = useMemo(
    () => ({
      responsive: true,
      plugins: {
        legend: { position: "top" as const },
        title: { display: true, text: "Blood Pressure" },
      },
    }),
    [],
  );

  return (
    <div className={"w-[600px]"}>
      <Line
        key={`${selectedPatient?.name}-${selectedPatient?.diagnosis_history.length}`}
        data={data}
        options={options}
      />
    </div>
  );
};

export default BloodPressureChart;