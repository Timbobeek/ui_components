export type Team = {
  id: string;
  label: string;
  background: string;
};

export type Match = [Team, Team];

export type Bracket = Match[];

export type WinnerState = {
  // round number → match index → winner index (0 or 1) | null
  [round: number]: {
    [match: number]: number | null;
  };
};
