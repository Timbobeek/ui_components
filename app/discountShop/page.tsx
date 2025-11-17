"use client";

import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function DiscountShop() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-stone-200 mt-5">Discount Shop UI</header>

      <div>
        <label htmlFor="type">Select Type:</label>
        <select id="type" name="type" value="standard">
          <option value="standard">Standard</option>
          <option value="seasonal">Seasonal</option>
          <option value="weight">Weight</option>
        </select>

        <label htmlFor="weight">Weight (kg):</label>
        <input type="number" id="weight" name="weight" step="0.01" />

        <label htmlFor="totalPrice">Total Price ($):</label>
        <input type="number" id="totalPrice" name="totalPrice" step="0.01" />

        <div>
          Discounted price:
          <span id="discountedPrice">
            {/*discounted price expected here */}
          </span>
        </div>
      </div>
    </div>
  );
}
