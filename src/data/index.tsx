const images: Record<string, unknown> = import.meta.glob(
  "/public/images/collectibles/*",
  { eager: true },
);

const perksMapping = {
  "aura.svg": [
    {
      title: "Healing Aura",
      header: "Healing Aura",
      description:
        "Ability: Restores a small percentage of health to itself or allies at the start of each round.",
    },
    {
      title: "Stability Boost",
      header: "Healing Aura",
      description:
        "Ability: Temporarily increases the stability of an opponent's characters, making their attacks less effective during their next turn.",
    },
  ],
  "ice_boy.svg": [
    {
      title: "Nature's Wrath",
      description:
        "Ability: Unleashes a powerful area attack that can deal damage to multiple opponents, reflecting the destructive power of nature when provoked.",
    },
  ],
};

const generateRandomPerk = () => {
  const randomTitles = [
    "Mystic Shield",
    "Inferno Strike",
    "Lightning Surge",
    "Shadow Cloak",
    "Frostbite Blast",
  ];
  const randomDescriptions = [
    "Ability: Provides a temporary shield that absorbs incoming damage.",
    "Ability: Launches a fiery attack, dealing damage to all enemies in range.",
    "Ability: Summons a lightning bolt, striking a single opponent with precision.",
    "Ability: Grants invisibility for one turn, avoiding all attacks.",
    "Ability: Deals icy damage and slows down enemies for their next turn.",
  ];
  return {
    title: randomTitles[Math.floor(Math.random() * randomTitles.length)],
    description:
      randomDescriptions[Math.floor(Math.random() * randomDescriptions.length)],
  };
};

export const nftData = Object.entries(images).map(([path, module]) => {
  const filename = path.split("/").pop();
  const perks =
    perksMapping[filename] ||
    Array.from({ length: 2 }, () => generateRandomPerk());

  return {
    image: path.replace("/public", ""),
    perks,
  };
});

console.log(nftData);
