import { InfoIcon } from "lucide-react";

type Props = {
  teams: string[][];
};

export const Groups = (props: Props) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  return (
    <div className="flex flex-wrap m-5 justify-center">
      {props.teams.map((group: string[], index: number) => (
        <div key={index} className="m-5 bg-green-600 w-60 h-48 text-center">
          <p className="text-xl text-center bg-pink-600 p-3">
            Group {alphabet[index]}{" "}
          </p>
          {group.map((team, index) => {
            let content;

            switch (team) {
              case "UEFA A":
                content = (
                  <div className="flex justify-center">
                    <strong className="text-lg">UEFA A</strong>

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
                    <strong className="text-lg">UEFA B</strong>

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
                    <strong className="text-lg">UEFA C</strong>

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
                    <strong className="text-lg">UEFA D</strong>

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
                    <strong className="text-lg">INTER-CON A</strong>

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
                    <strong className="text-lg">INTER-CON B</strong>

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
                content = <strong className="text-lg">{team}</strong>;
            }

            return (
              <div key={index} className=" text-white m-1">
                {content}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
