// A basic team
export type Team = {
  id: string;
  label: string;
  background: string;
};

// One match is two teams
export type Match = [Team, Team];

// A bracket is multiple rounds, each round is multiple matches
export type Bracket = Match[];

export const initialBracket: Bracket = [
  [
    {
      id: "1",
      label: "Brazil",
      background: "bg-green-500",
    },
    {
      id: "2",
      label: "Canada",
      background: "bg-green-500",
    },
  ],
  [
    {
      id: "3",
      label: "Ivory Coast",
      background: "bg-green-500",
    },
    {
      id: "4",
      label: "Iceland",
      background: "bg-green-500",
    },
  ],
  [
    {
      id: "5",
      label: "Argentina",
      background: "bg-green-500",
    },
    {
      id: "6",
      label: "Mexico",
      background: "bg-green-500",
    },
  ],
  [
    {
      id: "7",
      label: "Ghana",
      background: "bg-green-500",
    },
    {
      id: "8",
      label: "Poland",
      background: "bg-green-500",
    },
  ],
];
