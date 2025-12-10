"use client";

import { useState } from "react";
import { WinnerState } from "./types";
import { makeInitialWinnerState, useBracketRounds } from "./utils";
import { initialBracket } from "./firstRound";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function BracketPage() {
  const [winners, setWinners] = useState<WinnerState>(() =>
    makeInitialWinnerState(initialBracket)
  );

  const rounds = useBracketRounds(initialBracket, winners);

  const handleClick = ({
    round,
    match,
    winnerIndex,
  }: {
    round: number;
    match: number;
    winnerIndex: number;
  }) => {
    // PURE immutable update (NO nested mutation)
    setWinners((prev) => ({
      ...prev,
      [round]: {
        ...prev[round],
        [match]: winnerIndex,
      },
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-stone-200 mt-5">
        Playoff Bracket v2
      </header>
      <div className="flex items-center">
        {rounds.map((round, roundIndex) => (
          <div key={roundIndex} className="flex flex-col gap-5">
            <h2 className="text-xl font-bold text-yellow-300">
              Round {roundIndex + 1}
            </h2>

            {round.map((match, matchIndex) => (
              <div key={matchIndex} className="flex flex-col">
                {match.map((team, teamIndex) => {
                  const isWinner =
                    winners[roundIndex]?.[matchIndex] === teamIndex;

                  return (
                    <button
                      key={team.id}
                      className={`
                      p-4 m-2 rounded text-black
                      ${isWinner ? "bg-yellow-300" : team.background}
                      hover:bg-yellow-300
                    `}
                      onClick={() =>
                        handleClick({
                          round: roundIndex,
                          match: matchIndex,
                          winnerIndex: teamIndex,
                        })
                      }
                    >
                      {team.label}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
