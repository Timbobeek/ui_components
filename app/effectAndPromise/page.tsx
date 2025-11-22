"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MoveLeft } from "lucide-react";

type Props = {
  dataVersion: number;
  loadData: () => Promise<string>;
};

const Paragraph = (props: Props) => {
  const [text, setText] = useState("");

  useEffect(() => {
    props.loadData().then(setText); // this line calls the function that returns a promise object and "then" ejects the result of the promise call, which is a string in our case
  }, [props.dataVersion, props.loadData]);

  return (
    <p className="m-5 text-xl flex">
      <p className="bg-lime-300 text-black mr-2">{text}</p> (v
      {props.dataVersion}
      <strong className="text-red-500">SYNC</strong>)
    </p>
  );
};

export default function AsyncParagraph() {
  const [version, setVersion] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-yellow-500 mt-5">
        useEffect + Promise 1
      </header>
      <Paragraph
        dataVersion={version}
        loadData={() => {
          return new Promise((resolve, reject) => {
            resolve("Data from the resolved PROMISE! ASYNC");
          });
        }}
      />
      <button
        className="bg-green-500 text-black hover:bg-green-800 hover:text-white p-3"
        onClick={() => setVersion(version + 1)}
      >
        Increment version
      </button>
      <div className="flex w-1/2 ">
        <div className="m-5 bg-pink-900 p-3 border-4 border-white w-1/2 ">
          <p className="text-2xl m-5 text-center text-pink-300">
            Challening parts{" "}
          </p>
          <p className="">
            Initially, I disregarded that loadData returns a PROMISE that
            resolves to a string. I assumed that, hey, at the end we get a
            string, so ill just do{" "}
            <strong className="bg-black">setText(props.loadData())</strong>{" "}
            which will return a string that I need in my paragraph. This is due
            to my lack of practice with Promises and how they work. Turned out
            the Promise object gets returned and I was trying to render it.
          </p>
        </div>
        <div className="m-5 bg-lime-900 p-3 border-4 border-white w-1/2 ">
          <p className="text-2xl m-5 text-center text-lime-300">
            Things I learned here{" "}
          </p>
          <p>
            <em>I'm sorry but I'm just thinking of the right words to say..</em>
          </p>
          <p>
            <em>I know they don't sound the way I planned them to be...</em>
          </p>

          <p>
            On a serious note, just how promises work. In this example, we can
            tell that the data version string renders first, because it is sync.
            And the longer text from the promise renders after, because it is
            async (renders not right away). useEffect is never async; thus, we
            have to write async function inside the useEffect. Await and then
            have the same functionality. Await is always used with async.
          </p>
        </div>
      </div>
    </div>
  );
}
