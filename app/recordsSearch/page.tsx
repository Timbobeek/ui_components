"use client";

import Link from "next/link";
import { useState } from "react";
import { MoveLeft } from "lucide-react";
import { medical_records } from "./medicalRecords";
import Search from "./Search";
import Records from "./Records";

export default function MedicalRecordsSearch() {
  const patients = medical_records; // this is done to avoid importing medical_records into every component
  const [currentIndex, setCurrentIndex] = useState<number | null>(null); // patient id (from 0 to 2 for each of the three patients)
  return (
    <div className="flex flex-col items-center content-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-lime-500 mt-5">
        Medical Records Search UI
      </header>
      <div className="">
        <div className="flex flex-col ">
          <Search patients={patients} setCurrentIndex={setCurrentIndex} />
          <Records
            patients={patients}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
      </div>
      <div className="flex w-1/2 ">
        <div className="m-5 bg-pink-900 p-3 border-4 border-white w-1/2 ">
          <p className="text-2xl m-5 text-center text-pink-300">
            Challening parts{" "}
          </p>
          <p className="">
            currentIndex needs to be the index of a patient from medicalRecords.
            It is being passed onto both Search and Records components. Plays a
            crucial role. Essentially this exercise is about connecting all
            components by state, or passing the state. We have to pass the state
            because the change of the state happens in the components not in the
            main MedicalRecordsSearch component. <br></br> Records is the more
            complicated component imo. I had challenges with the Next button in
            it, which is supposed to get records from the next patient in line.
            Moving between indexes and patient ids and records within records
            gets confusing at times.
          </p>
        </div>
        <div className="m-5 bg-lime-900 p-3 border-4 border-white w-1/2 ">
          <p className="text-2xl m-5 text-center text-lime-300">
            Things I learned here{" "}
          </p>
          <p>
            {" "}
            currentIndex value in the state, declared in function
            MedicalRecordsSearch holds an index of one of the three pateints
            available from medicalRecords.tsx file.{" "}
            <u className="font-bold text-yellow-500">
              Index is the main state in this whole mechanism!
            </u>{" "}
            setCurrentIndex is passed onto component Search, along with the
            medicalRecords.tsx, in the form of patients state. <br></br> Search
            component consists of a select element (where you select a patient
            from the list) and a show button. I have a selected state to select
            patients in the dropdown. The show button does the following on
            click: if no patient has been selected, nothing will happen.
            However, if there is something selected, the current patient being
            looked is changed, via putting the selected value in the
            currentIndex state.<br></br> Records component relies on
            currentIndex state. If nothing is selected in the dropdown (meaning
            index stays null), no records are displayed. Otherwise, records are
            displayed based on the currentIndex state. Next button changes the
            state of currentIndex to next patient in line.
          </p>
        </div>
      </div>
    </div>
  );
}
