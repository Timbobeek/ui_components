import React from "react";
import { PatientRecords } from "./medicalRecords";

type Props = {
  patients: PatientRecords[];
  currentIndex: number | null;
  setCurrentIndex: (index: number) => void;
};

function Records({ patients, currentIndex, setCurrentIndex }: Props) {
  if (currentIndex === null) return null; // if no patient selected, show no records

  const record = patients[currentIndex]; // the whole record of each patient
  const main = record.data[0]; //the gist of each record

  const nextRecord = () => {
    //next button functionality
    const next = (currentIndex + 1) % patients.length; // % patients.length prevents the index from ever stopping at the last patient.
    setCurrentIndex(next); //changes currentIndex everywhere
  };

  // in real life, function below can be avoided
  function formatToDDMMYYYY(timestamp: number) {
    const date = new Date(timestamp);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <div className="border-solid border-4 border-pink-700">
      <div className="flex">
        <div className="mx-auto text-center border-solid border-pink-700">
          <h4 className="text-xl">{main.userName}</h4>
          <h5>
            <strong>DOB:</strong> {main.userDob}
          </h5>
          <h5>
            <strong>Height:</strong> {main.meta.height} cm
          </h5>
        </div>

        <button
          className="m-2 p-2 bg-green-600 hover:bg-green-300 hover:text-black"
          onClick={nextRecord}
        >
          Next
        </button>
      </div>

      <table className="border-solid border-t-4 border-pink-700">
        <thead className="border-b-2 border-pink-700">
          <tr className="">
            <th className="border-r-2 border-pink-700 p-2">SL</th>
            <th className="border-r-2 border-pink-700 p-2">Date</th>
            <th className="border-r-2 border-pink-700 p-2">Diagnosis</th>
            <th className="border-r-2 border-pink-700 p-2">Weight</th>
            <th>Doctor</th>
          </tr>
        </thead>

        <tbody>
          {record.data.map((item, i) => (
            <tr
              className="border-b-2 border-pink-700 border-dotted"
              key={item.id}
            >
              <td className="border-r-2 border-pink-700 p-2">{i + 1}</td>
              <td className="border-r-2 border-pink-700 p-2">
                {formatToDDMMYYYY(item.timestamp)}
              </td>
              <td className="border-r-2 border-pink-700 p-2">
                {item.diagnosis.name}
              </td>
              <td className="border-r-2 border-pink-700 p-2">
                {item.meta.weight}
              </td>
              <td className="p-2">{item.doctor.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Records;
