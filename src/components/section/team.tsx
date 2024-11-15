
const Team = () => {
  return (
    <div className="my-[5em]">
        <div className="bg-black min-h-screen p-8">
      <h1 className="text-white text-center text-4xl mb-16 kode_mono_font">Team</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1
       md:grid-cols-3 gap-8 ">
        <div className="flex flex-col items-center">
          <div className="bg-white p-1">
            <img
              src="/images/teams/ayetee.svg"
              alt="AyeTee profile"
              width={300}
              height={300}
              className="w-full"
            />
          </div>
          <h2 className="text-white kode_mono_font  text-2xl mt-4">AyeTee</h2>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-white p-1">
            <img
              src="/images/teams/gunna.svg"
              alt="Wayne profile"
              width={300}
              height={300}
              className="w-full"
            />
          </div>
          <h2 className="text-white kode_mono_font  text-2xl mt-4">Wayne</h2>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-white p-1">
            <img
              src="/images/teams/wayne.svg"
              alt="Gunna profile"
              width={300}
              height={300}
              className="w-full"
            />
          </div>
          <h2 className="text-white kode_mono_font  text-2xl mt-4">Gunna</h2>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Team