"use client";

import Link from "next/link";
import { useState } from "react";
import { MoveLeft } from "lucide-react";

// my version

// export default function RacingLights() {
//   const [lights1, setLights1] = useState("");
//   const [lights2, setLights2] = useState("");
//   const [lights3, setLights3] = useState("");
//   const [lights4, setLights4] = useState("");
//   const [counter, setCounter] = useState(0);

//   const handleClick = () => {
//     setCounter(counter + 1);
//     if (counter === 0) {
//       setLights1("bg-green-500");
//     }
//     if (counter === 1) {
//       setLights2("bg-green-500");
//     }
//     if (counter === 2) {
//       setLights3("bg-green-500");
//     }
//     if (counter === 3) {
//       setLights4("bg-green-500");
//     }
//     if (counter === 4) {
//       setLights1("bg-red-500");
//       setLights2("bg-red-500");
//       setLights3("bg-red-500");
//       setLights4("bg-red-500");
//     }
//     if (counter === 5) {
//       setLights1("");
//       setLights2("");
//       setLights3("");
//       setLights4("");
//       setCounter(0);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <Link href="/">
//         <MoveLeft className="m-5" />
//       </Link>
//       <header className="text-5xl text-stone-200 mt-5">Racing Lights</header>
//       <>
//         <div>
//           <span
//             className={`w-20 h-20 m-5 border-solid border-white border-2 inline-block ${lights1}`}
//           />
//           <span
//             className={`w-20 h-20 m-5 border-solid border-white border-2 inline-block ${lights2}`}
//           />
//           <span
//             className={`w-20 h-20 m-5 border-solid border-white border-2 inline-block ${lights3}`}
//           />
//           <span
//             className={`w-20 h-20 m-5 border-solid border-white border-2 inline-block ${lights4}`}
//           />
//         </div>
//         <button
//           className="bg-red-500 p-3 hover:bg-red-700"
//           onClick={handleClick}
//         >
//           Count
//         </button>
//       </>
//     </div>
//   );
// }

//mushroom version

export default function RacingLights() {
  const [counter, setCounter] = useState(0);
  const lightsCount = 4;

  const handleClick = () => {
    setCounter((prev) => (prev + 1) % (lightsCount + 2)); // cycles 0 to 5
  };

  const getLightColor = (index: number) => {
    if (counter === lightsCount + 1) {
      return "bg-red-500"; // all red
    }
    if (counter === lightsCount + 2) {
      return ""; // reset
    }
    if (index < counter) {
      return "bg-green-500"; // turn green sequentially
    }

    return ""; // default off
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-stone-200 mt-5">Racing Lights</header>

      <div>
        {Array.from({ length: lightsCount }).map((_, i) => (
          <span
            key={i}
            className={`w-20 h-20 m-5 border-2 border-white inline-block ${getLightColor(
              i
            )}`}
          />
        ))}
      </div>

      <button className="bg-red-500 p-3 hover:bg-red-700" onClick={handleClick}>
        Count
      </button>
      <div className="flex w-1/2 ">
        <div className="m-5 bg-pink-900 p-3 border-4 border-white w-1/2 ">
          <p className="text-2xl m-5 text-center text-pink-300">
            Challening parts{" "}
          </p>
          <p className="">
            Initial algorithm had individual states for each of the four lights.
            It worked, but if I have sixty lights it gets messy. Alternative
            code relies on the state of the counter only.
          </p>
        </div>
        <div className="m-5 bg-lime-900 p-3 border-4 border-white w-1/2 ">
          <p className="text-2xl m-5 text-center text-lime-300">
            Things I learned here{" "}
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
