import type { Patient } from "../../types/patient";

const userName = import.meta.env.VITE_USERNAME;
const password = import.meta.env.VITE_PASSWORD;
const auth = btoa(userName + ":" + password);

export async function getAllPatients(): Promise<Patient[]> {
  const headers = new Headers();
  headers.set("Authorization", "Basic " + btoa(userName + ":" + password));

  const data = await fetch(
    "https://fedskillstest.coalitiontechnologies.workers.dev",
    {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    },
  )
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .catch(function (error) {
      console.warn(error);
      return [];
    });

  return data as Patient[];
}