export function drawOneTeam(
  potsState: string[][],
  setPotsState: React.Dispatch<React.SetStateAction<string[][]>>,
  groups: string[][],
  setGroups: React.Dispatch<React.SetStateAction<string[][]>>,
  groupIndex: number,
  setGroupIndex: React.Dispatch<React.SetStateAction<number>>,
  potIndex: number,
  setPotIndex: React.Dispatch<React.SetStateAction<number>>
) {
  if (potIndex >= potsState.length) return;

  const pot = potsState[potIndex];
  if (pot.length === 0) return;

  // -------------------------------------------
  // STEP 0 — FORCE ASSIGNMENTS FOR POT 1
  // -------------------------------------------
  let forcedTeam: string | null = null;

  if (potIndex === 0) {
    // if POT 1
    // if we are drawing for group A and the current pot has team Mexico, then assign forced team Mexico
    if (groupIndex === 0 && pot.includes("Mexico")) forcedTeam = "Mexico";
    // if we are drawing for group B and the current pot has team Canada, then assign forced team Canada
    if (groupIndex === 1 && pot.includes("Canada")) forcedTeam = "Canada";
    // if we are drawing for group D and the current pot has team USA, then assign forced team USA
    if (groupIndex === 3 && pot.includes("USA")) forcedTeam = "USA";
  }

  let team = null;
  let hand = -1;

  if (forcedTeam) {
    // if forcedTeam not null
    team = forcedTeam; // asign a specific forcedTeam to team
    hand = pot.indexOf(forcedTeam); // hand is not random, but an exact index of forcedTeam
  } else {
    // normal random logic
    hand = Math.floor(Math.random() * pot.length);
    team = pot[hand];
  }

  // -------------------------------------------
  // STEP 1 — Update the pots
  // -------------------------------------------
  setPotsState((prevPots) => {
    const newPots = prevPots.map((p) => [...p]);
    newPots[potIndex] = newPots[potIndex].filter((_, i) => i !== hand);
    return newPots;
  });

  // -------------------------------------------
  // STEP 2 — Update the groups
  // -------------------------------------------
  setGroups((prevGroups) => {
    const newGroups = prevGroups.map((g) => [...g]);
    newGroups[groupIndex] = [...newGroups[groupIndex], team!];
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
