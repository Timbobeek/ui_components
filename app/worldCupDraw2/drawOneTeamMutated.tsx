//initial version, does mutation within state setter -> triggers the function twice

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
  if (groupIndex >= 12) return;

  setPotsState((prev) => {
    const newPots = prev.map((p) => [...p]);
    const pot = newPots[potIndex];

    const hand = Math.floor(Math.random() * pot.length);
    const team = pot[hand];

    pot.splice(hand, 1);

    setGroups((prevGroups) => {
      const updated = prevGroups.map((g) => [...g]);
      updated[groupIndex].push(team);
      console.log(updated);
      return updated;
    });

    if (potIndex < 3) {
      setPotIndex(potIndex + 1);
    } else {
      setPotIndex(0);
      setGroupIndex(groupIndex + 1);
    }

    return newPots;
  });
}
