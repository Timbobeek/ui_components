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

  // STEP 1 — pick the team using *current* potsState
  const pot = potsState[potIndex];
  if (pot.length === 0) return;

  const hand = Math.floor(Math.random() * pot.length);
  const team = pot[hand];

  // STEP 2 — apply changes PURELY in setState
  setPotsState((prevPots) => {
    const newPots = prevPots.map((p) => [...p]);
    newPots[potIndex] = newPots[potIndex].filter((_, i) => i !== hand); // this removes the currently picked team from the current pot
    return newPots;
  });

  setGroups((prevGroups) => {
    const newGroups = prevGroups.map((g) => [...g]);
    newGroups[groupIndex] = [...newGroups[groupIndex], team]; // adds the picked team to the group
    return newGroups;
  });

  // STEP 3 — advance index logic outside updater (safe)

  if (groupIndex < groups.length - 1) {
    setGroupIndex(groupIndex + 1);
  } else {
    setPotIndex(potIndex + 1);
    setGroupIndex(0);
  }
}
