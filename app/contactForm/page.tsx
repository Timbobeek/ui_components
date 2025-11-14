"use client";

import Link from "next/link";
import { useState } from "react";
import { MoveLeft } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("on submit");

    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      setError("All fields are required.");
    } else {
      setSubmittedData({ name, email, message });
      setName("");
      setEmail("");
      setMessage("");
      setError("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-violet-200 mt-5">
        Basic Contact Form
      </header>

      <div className="flex flex-col items-center m-5">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="m-2 p-2"
          />
          <input
            type="email" // currently checks email format
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="m-2 p-2"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            className="m-2 p-2"
          />
          <button type="submit" className="m-5 bg-green-500 p-3">
            Submit
          </button>
        </form>
        {error && <p className="bg-red-500 p-2">{error}</p>}
        {submittedData && (
          <div className="bg-yellow-200 p-2 m-2 text-black">
            <h2 className="text-xl">Submitted Information</h2>
            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Message:</strong> {submittedData.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
