type Props = {
  pots: string[][];
};

export const ListOfPots = (props: Props) => {
  const pots = Object.values(props);
  return (
    <div className="flex">
      {pots[0].map((pot, index) => (
        <div key={index} className="bg-yellow-500 m-3 w-36 h-80 text-center">
          <p className="bg-green-600">Pot {index + 1}</p>
          {pot.map((team, index) => (
            <div key={index} className="text-green-700 ">
              <strong>{team}</strong>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
