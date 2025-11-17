import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <ModeToggle />
      <header className="m-5 text-5xl">Basic UI Components</header>
      <div>
        <Link href="/slideshow">
          <button className="bg-yellow-200 text-black p-7 hover:bg-pink-400">
            Slideshow UI
          </button>
        </Link>
        <Link href="/manualValid">
          <button className="bg-green-200 text-black p-7 hover:bg-pink-400">
            Manual Validation UI
          </button>
        </Link>
        <Link href="/listManager">
          <button className="bg-blue-200 text-black p-7 hover:bg-pink-400">
            Item List Manager
          </button>
        </Link>
        <Link href="/vote">
          <button className="bg-orange-200 text-black p-7 hover:bg-pink-400">
            Vote
          </button>
        </Link>
      </div>
      <div>
        <Link href="/contactForm">
          <button className="bg-violet-200 text-black p-7 hover:bg-pink-400">
            Basic Contact Form
          </button>
        </Link>
        <Link href="/blogPost">
          <button className="bg-rose-200 text-black p-7 hover:bg-pink-400">
            Blog Post
          </button>
        </Link>
        <Link href="/nextComponent">
          <button className="bg-stone-200 text-black p-7 hover:bg-pink-400">
            TBD
          </button>
        </Link>
        <Link href="/tictactoe">
          <button className="bg-emerald-800 text-white p-7 hover:bg-pink-400">
            Tic-Tac-Toe
          </button>
        </Link>
        <Link href="/discountShop">
          <button className="bg-yellow-900 text-white p-7 hover:bg-pink-400">
            Discount Shop UI
          </button>
        </Link>
      </div>
    </div>
  );
}
