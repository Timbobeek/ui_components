"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

const initialState = {
  name: { value: "" },
  email: { value: "" },
  employeeID: { value: "" },
  joiningDate: { value: "" },
};

const initialErrorState = {
  name: {
    error:
      "Name must be at least 4 characters long and only contain letters and spaces",
  },
  email: { error: "Email must be a valid email address" },
  employeeID: { error: "Employee ID must be exactly 6 digits" },
  joiningDate: { error: "Joining Date cannot be in the future" },
};

export default function ManualValidation() {
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState(initialErrorState);

  function handleFormChange(
    fieldName: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) {
    setFormData({
      ...formData,
      [fieldName]: { value: e.target.value },
    });

    validateField(fieldName, e.target.value);
  }

  function setFieldError(fieldName: string, error: string | null) {
    setFormErrors((prev) => ({
      ...prev,
      [fieldName]: { error },
    }));
  }

  function validateField(fieldName: string, value: string) {
    console.log({ fieldName, value });

    const validName = (name: string) => {
      if (name.length < 4 || !/^[A-Za-z\s]+$/.test(name)) {
        setFieldError(
          "name",
          "Name must be at least 4 characters long and only contain letters and spaces",
        );
        return false;
      }
      setFieldError("name", null);
      return true;
    };

    const validEmail = (email: string) => {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setFieldError("email", "Email must be a valid email address");
        return false;
      }
      setFieldError("email", null);
      return true;
    };

    const validEmployeeID = (employeeid: string) => {
      if (employeeid.length != 6 || !/^\d{6}$/.test(employeeid)) {
        setFieldError("employeeID", "Employee ID must be exactly 6 digits");
        return false;
      }
      setFieldError("employeeID", null);
      return true;
    };

    const validJoinDate = (joindate: string) => {
      const today = new Date().toISOString().split("T")[0];
      if (joindate > today || joindate === "") {
        setFieldError("joiningDate", "Joining Date cannot be in the future");
        return false;
      }
      setFieldError("joiningDate", null);
      return true;
    };

    if (fieldName === "name") validName(value);
    if (fieldName === "email") validEmail(value);
    if (fieldName === "employeeID") {
      const res = validEmployeeID(value);
      console.log({ fieldName, value, res });
    }

    if (fieldName === "joiningDate") validJoinDate(value);
  }

  const disabled = Boolean(
    formErrors.name ||
      formErrors.email ||
      formErrors.employeeID ||
      formErrors.joiningDate,
  );

  const handleSubmit = () => {
    setFormData(initialState);
    setFormErrors(initialErrorState);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-green-200 mt-5">
        Manual Validation Form UI
      </header>
      <div className="flex flex-col items-center justify-center mt-20">
        <div
          className="flex flex-col items-center justify-center mb-10 w-50"
          data-testid="input-name"
        >
          <input
            className="w-100"
            type="text"
            name="name"
            value={formData.name.value}
            placeholder="Name"
            data-testid="input-name-test"
            onChange={(e) => {
              handleFormChange("name", e);
            }}
          />
          {formErrors.name.error && (
            <p className="error mt-2">{formErrors.name.error}</p>
          )}
        </div>
        <div
          className="flex flex-col items-center justify-center mb-10 w-50"
          data-testid="input-email"
        >
          <input
            className="w-100"
            type="text"
            name="email"
            value={formData.email.value}
            placeholder="Email"
            onChange={(e) => handleFormChange("email", e)}
          />
          {formErrors.email.error && (
            <p className="error mt-2">{formErrors.email.error}</p>
          )}
        </div>
        <div
          className="flex flex-col items-center justify-center mb-10 w-50"
          data-testid="input-employee-id"
        >
          <input
            className="w-100"
            type="text"
            name="employeeID"
            value={formData.employeeID.value}
            placeholder="Employee ID"
            onChange={(e) => handleFormChange("employeeID", e)}
          />
          {formErrors.employeeID.error && (
            <p className="error mt-2">{formErrors.employeeID.error}</p>
          )}
        </div>
        <div
          className="flex flex-col items-center justify-center mb-10 w-50"
          data-testid="input-joining-date"
        >
          <input
            className="w-100"
            type="date"
            name="joiningDate"
            value={formData.joiningDate.value}
            placeholder="Joining Date"
            onChange={(e) => handleFormChange("joiningDate", e)}
          />
          {formErrors.joiningDate.error && (
            <p className="error mt-2">{formErrors.joiningDate.error}</p>
          )}
        </div>
        <button
          className="bg-red-500 p-5 hover:bg-red-700"
          type="submit"
          onClick={handleSubmit}
          disabled={disabled}
        >
          Submit Form
        </button>
      </div>
    </div>
  );
}
