import React, { useState } from "react";
import { PatientRecords } from "./medicalRecords";

type Props = {
  patients: PatientRecords[];
  setCurrentIndex: (index: number) => void;
};

function Search({ patients, setCurrentIndex }: Props) {
  const [selected, setSelected] = useState("");

  const handleClick = () => {
    // you click show button. If nothing is selected than nothing really happens.
    // if a patient from the list is selected, it changes the state of the currentIndex, declared in the main function of this app.
    if (!selected || selected === "0") {
      // since value of 0 is assigned to "Select Patient" option, first patient John Oliver gets value of 1
      alert("Please select a patient name");
      return;
    }

    // Convert patient id to index (id 1→index0, etc.)
    // it is currently "1" "2" "3"
    setCurrentIndex(Number(selected) - 1);
  };

  return (
    <div className=" m-5 flex justify-center items-center">
      <div className="flex items-center">
        <select
          className="bg-pink-700 w-64 p-2"
          data-testid="patient-name"
          defaultValue="0"
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="0" disabled>
            Select Patient
          </option>

          {patients.map((p) => (
            <option key={p.id} value={p.id}>
              {p.data[0].userName}
              {/* grabs data from medicalRecords */}
            </option>
          ))}
        </select>

        <button
          className="m-2 p-2 bg-green-600 hover:bg-green-300 hover:text-black"
          type="submit"
          data-testid="show"
          onClick={handleClick}
        >
          Show
        </button>
      </div>
    </div>
  );
}

export default Search;
