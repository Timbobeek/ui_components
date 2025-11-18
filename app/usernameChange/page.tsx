"use client";

import Link from "next/link";
import { useState } from "react";
import { MoveLeft } from "lucide-react";

const Username = ({ value }: { value: string }) => {
  return (
    <div className="flex flex-col text-center">
      <p>Woohoo!</p>
      <h1>
        Your username has been changed to{" "}
        <strong className="text-yellow-300">{value}</strong>
      </h1>
    </div>
  );
};

export default function UsernameChange() {
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  function clickHandler() {
    if (username !== "") {
      setNewUsername(username);
      setUsername("");
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-amber-800 mt-5">
        Change Username UI
      </header>
      <div className="flex flex-col m-5">
        <button className="bg-green-500" onClick={clickHandler}>
          Change Username
        </button>
        <input
          value={username}
          className="m-5 p-5"
          onChange={handleChange}
          type="text"
        />
        {newUsername !== "" && <Username value={newUsername} />}
      </div>
    </div>
  );
}
