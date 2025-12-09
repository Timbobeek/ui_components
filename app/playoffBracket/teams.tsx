export type Team = { id: string; label: string; background: string };
export type TeamsProps = {
  //is this needed?
  teams: Team[];
};

//option 1 -- split by pairs  [ [{},{}] , [{},{}] ]

export const teams = [
  [
    { id: "1", label: "Brazil", selected: false, background: "bg-green-500" },
    { id: "2", label: "Canada", selected: false, background: "bg-red-500" },
  ],
  [
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
      id: "5",
      label: "Argentina",
      selected: false,
      background: "bg-green-500",
    },
    { id: "6", label: "Mexico", selected: false, background: "bg-red-500" },
  ],
  [
    { id: "7", label: "Ghana", selected: false, background: "bg-yellow-500" },
    { id: "8", label: "Poland", selected: false, background: "bg-blue-500" },
  ],
];

//option 2 -- all in one  [{},{},{}]

// export const teams = [
//   { id: "1", label: "Brazil", selected: false, background: "bg-green-500" },
//   { id: "2", label: "Canada", selected: false, background: "bg-red-500" },
//   {
//     id: "3",
//     label: "Ivory Coast",
//     selected: false,
//     background: "bg-yellow-500",
//   },
//   { id: "4", label: "Iceland", selected: false, background: "bg-blue-500" },
//   {
//     id: "1",
//     label: "Argentina",
//     selected: false,
//     background: "bg-green-500",
//   },
//   { id: "2", label: "Mexico", selected: false, background: "bg-red-500" },
//   { id: "3", label: "Ghana", selected: false, background: "bg-yellow-500" },
//   { id: "4", label: "Poland", selected: false, background: "bg-blue-500" },
// ];
