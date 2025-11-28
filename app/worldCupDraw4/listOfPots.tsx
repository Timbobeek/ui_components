import { InfoIcon } from "lucide-react";

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
          {pot.map((team, index) => {
            let content;

            switch (team) {
              case "UEFA A":
                content = (
                  <div className="flex justify-center">
                    <strong className="">UEFA A</strong>

                    <div className="relative group inline-block">
                      <span className=" cursor-pointer">
                        <InfoIcon className="w-3 h-4" />
                      </span>

                      <div
                        className="
                          absolute left-1/2 -translate-x-1/2 top-6
                          opacity-0 group-hover:opacity-100
                          pointer-events-none
                          transition-opacity duration-150
                          bg-pink-900 text-white border border-gray-400
                          text-xs px-2 py-1 rounded-sm whitespace-nowrap
                          shadow-md
                        "
                      >
                        Wales OR Bosnia OR Italy OR N.Ireland
                      </div>
                    </div>
                  </div>
                );
                break;
              case "UEFA B":
                content = (
                  <div className="flex justify-center">
                    <strong className="">UEFA B</strong>

                    <div className="relative group inline-block">
                      <span className=" cursor-pointer">
                        <InfoIcon className="w-3 h-4" />
                      </span>

                      <div
                        className="
                          absolute left-1/2 -translate-x-1/2 top-6
                          opacity-0 group-hover:opacity-100
                          pointer-events-none
                          transition-opacity duration-150
                          bg-pink-900 text-white border border-gray-400
                          text-xs px-2 py-1 rounded-sm whitespace-nowrap
                          shadow-md
                        "
                      >
                        Ukraine OR Sweden OR Poland OR Albania
                      </div>
                    </div>
                  </div>
                );
                break;
              case "UEFA C":
                content = (
                  <div className="flex justify-center">
                    <strong className="">UEFA C</strong>

                    <div className="relative group inline-block">
                      <span className=" cursor-pointer">
                        <InfoIcon className="w-3 h-4" />
                      </span>

                      <div
                        className="
                          absolute left-1/2 -translate-x-1/2 top-6
                          opacity-0 group-hover:opacity-100
                          pointer-events-none
                          transition-opacity duration-150
                          bg-pink-900 text-white border border-gray-400
                          text-xs px-2 py-1 rounded-sm whitespace-nowrap
                          shadow-md
                        "
                      >
                        Slovakia OR Kosovo OR Turkey OR Romania
                      </div>
                    </div>
                  </div>
                );
                break;
              case "UEFA D":
                content = (
                  <div className="flex justify-center">
                    <strong className="">UEFA D</strong>

                    <div className="relative group inline-block">
                      <span className=" cursor-pointer">
                        <InfoIcon className="w-3 h-4" />
                      </span>

                      <div
                        className="
                          absolute left-1/2 -translate-x-1/2 top-6
                          opacity-0 group-hover:opacity-100
                          pointer-events-none
                          transition-opacity duration-150
                          bg-pink-900 text-white border border-gray-400
                          text-xs px-2 py-1 rounded-sm whitespace-nowrap
                          shadow-md
                        "
                      >
                        Czechia OR Ireland OR Denmark OR N.Macedonia
                      </div>
                    </div>
                  </div>
                );
                break;
              case "INTER-CON A":
                content = (
                  <div className="flex justify-center">
                    <strong className="">INTER-CON A</strong>

                    <div className="relative group inline-block">
                      <span className=" cursor-pointer">
                        <InfoIcon className="w-3 h-4" />
                      </span>

                      <div
                        className="
                          absolute left-1/2 -translate-x-1/2 top-6
                          opacity-0 group-hover:opacity-100
                          pointer-events-none
                          transition-opacity duration-150
                          bg-pink-900 text-white border border-gray-400
                          text-xs px-2 py-1 rounded-sm whitespace-nowrap
                          shadow-md
                        "
                      >
                        New Caledonia OR Jamaica OR DR Congo
                      </div>
                    </div>
                  </div>
                );
                break;
              case "INTER-CON B":
                content = (
                  <div className="flex justify-center">
                    <strong className="">INTER-CON B</strong>

                    <div className="relative group inline-block">
                      <span className=" cursor-pointer">
                        <InfoIcon className="w-3 h-4" />
                      </span>

                      <div
                        className="
                          absolute left-1/2 -translate-x-1/2 top-6
                          opacity-0 group-hover:opacity-100
                          pointer-events-none
                          transition-opacity duration-150
                          bg-pink-900 text-white border border-gray-400
                          text-xs px-2 py-1 rounded-sm whitespace-nowrap
                          shadow-md
                        "
                      >
                        Bolivia OR Suriname OR Iraq
                      </div>
                    </div>
                  </div>
                );
                break;
              default:
                content = <strong>{team}</strong>;
            }

            return (
              <div key={index} className=" text-green-700 ">
                {content}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
