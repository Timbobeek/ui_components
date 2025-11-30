import { Team } from "./pots";

export function drawOneTeam(
  potsState: Team[][],
  setPotsState: React.Dispatch<React.SetStateAction<Team[][]>>,
  groups: string[][],
  setGroups: React.Dispatch<React.SetStateAction<string[][]>>,
  groupIndex: number,
  setGroupIndex: React.Dispatch<React.SetStateAction<number>>,
  potIndex: number,
  setPotIndex: React.Dispatch<React.SetStateAction<number>>
) {
  if (potIndex >= potsState.length) return; // if we are on pot 5 (non existent), we exit

  const pot = potsState[potIndex];
  const notPicked = pot.filter((team) => !team.picked); // returns an array with teams in a pot that were not picked yet
  if (notPicked.length === 0) return; //if all teams were picked, then we exit

  // -------------------------------------------
  // STEP 0 — FORCE ASSIGNMENTS FOR POT 1
  // -------------------------------------------
  let forcedTeam: string | null = null;

  const potNames = notPicked.map((p) => p.name); //get team names from all teams that werent picked yet

  if (potIndex === 0) {
    // if POT 1
    // if we are drawing for group A and the current pot has team Mexico, then assign forced team Mexico
    if (groupIndex === 0 && potNames.includes("Mexico")) forcedTeam = "Mexico";
    // if we are drawing for group B and the current pot has team Canada, then assign forced team Canada
    if (groupIndex === 1 && potNames.includes("Canada")) forcedTeam = "Canada";
    // if we are drawing for group D and the current pot has team USA, then assign forced team USA
    if (groupIndex === 3 && potNames.includes("USA")) forcedTeam = "USA";
  }

  let pickedTeam = null;
  let pickedHand = -1;

  if (forcedTeam) {
    // if we picked Canada mexico or usa
    pickedHand = potNames.indexOf(forcedTeam); // hand is not random, but an exact index of forcedTeam
    pickedTeam = notPicked[pickedHand];
  } else {
    // normal random logic
    pickedHand = Math.floor(Math.random() * notPicked.length);
    pickedTeam = notPicked[pickedHand];
  }

  const team = pot.find((t) => t.name === pickedTeam.name);
  if (team == null) {
    throw new Error("cannot be like that");
  }

  const hand = pot.indexOf(team);

  // -------------------------------------------
  // STEP 1 — Update the pots
  // -------------------------------------------
  setPotsState((prevPots) => {
    const newPots = prevPots.map((p) => [...p]);
    newPots[potIndex][hand].picked = true; // change the status of the picked team
    return newPots;
  });

  // -------------------------------------------
  // STEP 2 — Update the groups
  // -------------------------------------------
  setGroups((prevGroups) => {
    const newGroups = prevGroups.map((g) => [...g]);
    newGroups[groupIndex] = [...newGroups[groupIndex], team.name];
    return newGroups;
  });

  // -------------------------------------------
  // STEP 3 — Increment indexes
  // -------------------------------------------
  if (groupIndex < groups.length - 1) {
    setGroupIndex(groupIndex + 1);
  } else {
    setPotIndex(potIndex + 1);
    setGroupIndex(0);
  }
}
