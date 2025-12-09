"use client";

import { useState } from "react";
import { Team, Match, Bracket, initialBracket } from "./firstRound";

type WinnerState = {
  [round: number]: {
    [match: number]: number | null; // 0 or 1 (winner index)
  };
};

const computeNextRound = (
  round: number,
  bracket: Bracket,
  winners: WinnerState
): Bracket => {
  const currentRound = bracket;
  const winnerIndexes = winners[round];

  if (!winnerIndexes) return [];

  const nextRoundTeams: Team[] = [];

  // For every match, push the winner
  for (let matchIdx = 0; matchIdx < currentRound.length; matchIdx++) {
    const winner = winnerIndexes[matchIdx];
    if (winner !== null) {
      nextRoundTeams.push(currentRound[matchIdx][winner]);
    }
  }

  // Turn the winners into matches for the next round
  const nextMatches: Bracket = [];

  for (let i = 0; i < nextRoundTeams.length; i += 2) {
    const pair = nextRoundTeams.slice(i, i + 2);
    if (pair.length === 2) nextMatches.push(pair as Match);
  }

  return nextMatches;
};

const useBracketRounds = (initialRound: Bracket, winners: WinnerState) => {
  const rounds: Bracket[] = [initialRound];

  let roundIndex = 0;

  while (true) {
    const next = computeNextRound(roundIndex, rounds[roundIndex], winners);
    if (next.length === 0) break;
    rounds.push(next);
    roundIndex++;
  }

  return rounds;
};

export default function BracketPage() {
  const makeInitialWinnerState = (firstRound: Bracket): WinnerState => ({
    0: Object.fromEntries(firstRound.map((_, i) => [i, null])),
  });

  const [winners, setWinners] = useState<WinnerState>(
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
    winnerIndex: number; // 0 or 1
  }) => {
    setWinners((prev) => {
      const copy = structuredClone(prev);
      if (!copy[round]) copy[round] = {};
      copy[round][match] = winnerIndex;
      return copy;
    });
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
