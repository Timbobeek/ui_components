"use client";

import { useState } from "react";
import { WinnerState } from "./types";
import { makeInitialWinnerState, useBracketRounds } from "./utils";
import { initialBracket } from "./firstRound";

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
    <div className="flex gap-10 p-10">
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
  );
}
