export type Team = { id: string; label: string; background: string };
export type TeamsProps = {
  //is this needed?
  teams: Team[];
};

export const teams = [
  [
    { id: "1", label: "Brazil", background: "bg-green-500" },
    { id: "2", label: "Canada", background: "bg-red-500" },
    { id: "3", label: "Ivory Coast", background: "bg-yellow-500" },
    { id: "4", label: "Iceland", background: "bg-blue-500" },
  ],
  [
    { id: "1", label: "Argentina", background: "bg-green-500" },
    { id: "2", label: "Mexico", background: "bg-red-500" },
    { id: "3", label: "Ghana", background: "bg-yellow-500" },
    { id: "4", label: "Poland", background: "bg-blue-500" },
  ],
];
