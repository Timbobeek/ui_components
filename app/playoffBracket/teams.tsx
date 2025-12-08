export type Team = { id: string; label: string; background: string };
export type TeamsProps = {
  //is this needed?
  teams: Team[];
};

export const teams = [
  [
    { id: "1", label: "Brazil", selected: false, background: "bg-green-500" },
    { id: "2", label: "Canada", selected: false, background: "bg-red-500" },
    {
      id: "3",
      label: "Ivory Coast",
      selected: false,
      background: "bg-yellow-500",
    },
    { id: "4", label: "Iceland", selected: false, background: "bg-blue-500" },
  ],
  [
    {
      id: "1",
      label: "Argentina",
      selected: false,
      background: "bg-green-500",
    },
    { id: "2", label: "Mexico", selected: false, background: "bg-red-500" },
    { id: "3", label: "Ghana", selected: false, background: "bg-yellow-500" },
    { id: "4", label: "Poland", selected: false, background: "bg-blue-500" },
  ],
];
