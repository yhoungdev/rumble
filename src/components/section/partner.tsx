export default function Partner() {
  const partners = [
    { name: "ME", logo: "/placeholder.svg?height=40&width=40" },
    { name: "Ghost", logo: "/placeholder.svg?height=40&width=40" },
    { name: "DRiP", logo: "/placeholder.svg?height=40&width=40" },
    { name: "Sun", logo: "/placeholder.svg?height=40&width=40" },
    { name: "DeGods", logo: "/placeholder.svg?height=40&width=40" },
    { name: "Jupiter", logo: "/placeholder.svg?height=40&width=40" },
    { name: "R", logo: "/placeholder.svg?height=40&width=40" },
  ]

  return (
      <div className="min-h-screen bg-black text-white font-mono p-8">
        <div className="mb-8 flex items-center">
          <div className="w-1 h-6 bg-yellow-500 mr-2" />
          <h1 className="text-xl">PARTNERS</h1>
        </div>

        <h2 className="text-5xl font-bold text-center mb-8 kode_mono_font">
          PARTNERS
        </h2>

        <div
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center relative">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="w-full flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={40}
                height={40}
                className="w-12 h-12 object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <img
            src="/placeholder.svg?height=200&width=200"
            alt="Mascot character"
            width={200}
            height={200}
            className="w-48 h-48 md:w-64 md:h-64"
          />
        </div>


      </div>
    );
}


