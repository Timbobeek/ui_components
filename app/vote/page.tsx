"use client";

import Link from "next/link";
import { useState } from "react";
import { MoveLeft } from "lucide-react";

type Props = {
  title: string;
};

const Voter = ({ title }: Props) => {
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const handleDownvote = () => {
    setDownvotes(downvotes + 1);
  };

  return (
    <div className="">
      <div className="">
        <div className=" bg-blue-500 m-3 p-5 flex flex-col items-center">
          <h2 className="text-xl text-black">{title}</h2>
          <div className="">
            <button className="bg-green-500 m-2 p-2" onClick={handleUpvote}>
              👍 Upvote
            </button>
            <button className="bg-red-500 m-2 p-2" onClick={handleDownvote}>
              👎 Downvote
            </button>
          </div>
          <p className="">
            Upvotes: <strong className="text-green-500">{upvotes}</strong>
          </p>
          <p className="">
            Downvotes: <strong className="text-red-500">{downvotes}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default function VoteSystem() {
  const titles = [
    "Readability",
    "Performance",
    "Security",
    "Documentation",
    "Testing",
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-orange-200 mt-5">Vote</header>

      <div className="flex">
        {titles.map((title) => {
          return <Voter title={title} />;
        })}
      </div>
    </div>
  );
}
