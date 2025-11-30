export type Team = {
  name: string;
  picked: boolean;
};

function team(name: string): Team {
  return {
    name,
    picked: false,
  };
}

export const pots = [
  [
    team("USA"),
    team("Mexico"),
    team("Canada"),
    team("Spain"),
    team("Argentina"),
    team("France"),
    team("England"),
    team("Brazil"),
    team("Portugal"),
    team("Netherlands"),
    team("Belgium"),
    team("Germany"),
  ],
  [
    team("Croatia"),
    team("Morocco"),
    team("Colombia"),
    team("Uruguay"),
    team("Switzerland"),
    team("Japan"),
    team("Senegal"),
    team("Iran"),
    team("South Korea"),
    team("Ecuador"),
    team("Austria"),
    team("Australia"),
  ],
  [
    team("Norway"),
    team("Panama"),
    team("Egypt"),
    team("Algeria"),
    team("Scotland"),
    team("Paraguay"),
    team("Tunisia"),
    team("Ivory Coast"),
    team("Uzbekistan"),
    team("Qatar"),
    team("Saudi Arabia"),
    team("South Africa"),
  ],
  [
    team("Jordan"),
    team("Cape-Verde"),
    team("Ghana"),
    team("Curacao"),
    team("Haiti"),
    team("New Zealand"),
    team("UEFA A"),
    team("UEFA B"),
    team("UEFA C"),
    team("UEFA D"),
    team("INTER-CON A"),
    team("INTER-CON B"),
  ],
];
