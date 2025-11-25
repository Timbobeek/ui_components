type Props = {
  teams: string[][];
};

export const Groups = (props: Props) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  return (
    <div className="flex m-5">
      {props.teams.map((group: string[], index: number) => (
        <div key={index} className="m-3">
          <p className="text-xl bg-pink-600 p-3">Group {alphabet[index]} </p>
          {group.map((team, i) => (
            <p key={i} className="bg-green-700 p-2">
              {team}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};
