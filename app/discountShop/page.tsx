"use client";

import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { useState } from "react";

const DiscountType = {
  Standard: "standard",
  Seasonal: "seasonal",
  Weight: "weight",
} as const;

type DiscountType = (typeof DiscountType)[keyof typeof DiscountType];

type ItemDetails = {
  discountType: DiscountType;
  weight: number;
  price: number;
};

const priceCalculator = ({ discountType, weight, price }: ItemDetails) => {
  if (discountType === DiscountType.Standard) {
    return price * 0.94;
  }
  if (discountType === DiscountType.Seasonal) {
    return price * 0.88;
  }
  if (discountType === DiscountType.Weight) {
    if (weight <= 10) {
      return price * 0.94;
    } else {
      return price * 0.82;
    }
  }
};

export default function DiscountSettings() {
  const [discount, setDiscount] = useState<DiscountType>("standard");
  const [weight, setWeight] = useState(0);
  const [price, setPrice] = useState(0);

  const handleDiscount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDiscount(e.target.value as DiscountType);
  };

  const handleWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(e.target.value));
  };

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  const discountedPrice = priceCalculator({
    discountType: discount,
    weight,
    price,
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-yellow-900 mt-5">
        Discount Shop UI
      </header>

      <div className="m-5 text-xl">
        <div className="my-3">
          <label className="mr-3" htmlFor="type">
            Select Discount Type:
          </label>
          <select
            className="p-3"
            id="type"
            name="type"
            value={discount}
            onChange={handleDiscount}
          >
            <option value={DiscountType.Standard}>Standard</option>
            <option value={DiscountType.Seasonal}>Seasonal</option>
            <option value={DiscountType.Weight}>Weight</option>
          </select>
        </div>

        <div className="my-3 ">
          <label className="mr-3" htmlFor="weight">
            Weight (kg):
          </label>
          <input
            className="p-3"
            type="number"
            id="weight"
            name="weight"
            step="0.01"
            onChange={handleWeight}
          />
        </div>

        <div className="my-3">
          <label className="mr-3" htmlFor="totalPrice">
            Price ($):
          </label>
          <input
            type="number"
            id="totalPrice"
            name="totalPrice"
            step="0.01"
            onChange={handlePrice}
          />
        </div>

        <div className="my-3">
          Discounted price:
          <span className="m-10">
            <strong className="text-green-600">${discountedPrice}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
