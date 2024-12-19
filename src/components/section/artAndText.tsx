export default function ArtAndTextSection() {
  const monsters = [
    {
      name: "ZOMBIES",
      avatars: ["/images/collectibles/8717.png", "/images/collectibles/8717.png"]
    },
    {
      name: "VAMPIRES",
      avatars: ["/images/collectibles/9470.png", "/images/collectibles/9653.png"]
    },
    {
      name: "MUMMIES",
      avatars: ["/images/collectibles/9151.png", "/images/collectibles/9091.png"]
    },
    {
      name: "WEREWOLVES",
      avatars: ["/images/collectibles/8717.png"]
    },
    {
      name: "FRANKENSTEINS",
      avatars: ["/images/collectibles/8764.png"]
    },
    {
      name: "SASQUATCHS",
      avatars: ["/images/collectibles/8717.png", "/images/collectibles/8717.png"]
    },
    {
      name: "CTHULU",
      avatars: ["/images/collectibles/8888.png", "/images/collectibles/9022.png"]
    },
  ]

  return (
    <div className="min-h-screen bg-purple-950 flex flex-col items-center justify-center p-4">
      <div className="text-xs text-green-300 mb-8">CLANS</div>

      <div className="max-w-2xl w-full flex flex-col items-center gap-2">
        {monsters.map((monster, index) => (
          <div
            key={monster.name}
            className="flex items-center gap-2 w-full justify-center"
          >
            {monster.avatars.map((avatar, avatarIndex) => (
              <div
                key={avatarIndex}
                className="w-12 h-12 rounded-lg overflow-hidden bg-purple-800"
              >
                <img
                  src={avatar}
                  alt={`${monster.name} avatar ${avatarIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <span
              className={`text-4xl md:text-5xl font-bold ${
                index % 2 === 0 ? 'text-white' : 'text-green-300'
              }`}
            >
              {monster.name}
            </span>
            {monster.avatars.length > 1 && monster.avatars.slice(1).map((avatar, avatarIndex) => (
              <div
                key={`end-${avatarIndex}`}
                className="w-12 h-12 rounded-lg overflow-hidden bg-purple-800"
              >
                <img
                  src={avatar}
                  alt={`${monster.name} avatar ${avatarIndex + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-md text-center text-gray-300 space-y-2">
        <p>There are 8 kind of monsters, But we hide 35 extra</p>
        <p>special, super rare, really unique versions in the collection</p>
        <p>Look for the divers and astronauts!</p>
      </div>
    </div>
  )
}

