import { Bracket, WinnerState, Team, Match } from "./types";

export const makeInitialWinnerState = (bracket: Bracket): WinnerState => {
  // Round 0: create keys for each first-round match
  return {
    0: Object.fromEntries(bracket.map((_, i) => [i, null])),
  };
};

export const computeNextRound = (
  roundIndex: number,
  bracket: Bracket,
  winners: WinnerState
): Bracket => {
  const currentWinners = winners[roundIndex];
  if (!currentWinners) return [];

  const nextTeams: Team[] = [];

  for (let matchIdx = 0; matchIdx < bracket.length; matchIdx++) {
    const winnerIndex = currentWinners[matchIdx];
    if (winnerIndex === null || winnerIndex === undefined) continue;

    nextTeams.push(bracket[matchIdx][winnerIndex]);
  }

  const nextRound: Bracket = [];
  for (let i = 0; i < nextTeams.length; i += 2) {
    const pair = nextTeams.slice(i, i + 2);
    if (pair.length === 2) nextRound.push(pair as Match);
  }

  return nextRound;
};

export const useBracketRounds = (
  initialRound: Bracket,
  winners: WinnerState
): Bracket[] => {
  const rounds: Bracket[] = [initialRound];

  let index = 0;
  while (true) {
    const next = computeNextRound(index, rounds[index], winners);
    if (next.length === 0) break;
    rounds.push(next);
    index++;
  }

  return rounds;
};
