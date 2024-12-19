import { useEffect, useRef } from "react";

export default function ArtAndTextSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current.querySelectorAll(".scroll-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-scroll");
          } else {
            entry.target.classList.remove("animate-scroll");
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const monsters = [
    { name: "ZOMBIES", avatars: ["/images/collectibles/8717.png", "/images/collectibles/8717.png"] },
    { name: "VAMPIRES", avatars: ["/images/collectibles/9470.png", "/images/collectibles/9653.png"] },
    { name: "MUMMIES", avatars: ["/images/collectibles/9151.png", "/images/collectibles/9091.png"] },
    { name: "WEREWOLVES", avatars: ["/images/collectibles/8717.png"] },
    { name: "FRANKENSTEINS", avatars: ["/images/collectibles/8764.png"] },
    { name: "SASQUATCHS", avatars: ["/images/collectibles/8717.png", "/images/collectibles/8717.png"] },
    { name: "CTHULU", avatars: ["/images/collectibles/8888.png", "/images/collectibles/9022.png"] },
  ];

  return (
    <div ref={containerRef} className="min-h-screen art flex flex-col items-center justify-center p-4">
      <div className="text-xs text-green-300 mb-8">CLANS</div>
      <div className="max-w-2xl kode_mono_font w-full flex flex-col items-center gap-2">
        {monsters.map((monster, index) => (
          <div
            key={monster.name}
            className={`flex flex-wrap items-center gap-2 w-full justify-center scroll-item ${
              index % 2 === 0 ? "scroll-left" : "scroll-right"
            }`}
          >
            {monster.avatars.map((avatar, avatarIndex) => (
              <div key={avatarIndex} className="w-12 h-12 rounded-lg overflow-hidden bg-purple-800">
                <img src={avatar} alt={`${monster.name} avatar ${avatarIndex + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
            <span className={`text-4xl md:text-5xl font-bold ${index % 2 === 0 ? "text-white" : "text-green-300"}`}>
              {monster.name}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-md text-center text-gray-300 space-y-1">
        <p>There are 8 kind of monsters, But we hide 35 extra</p>
        <p>special, super rare, really unique versions in the collection</p>
        <p>Look for the divers and astronauts!</p>
      </div>
    </div>
  );
}
