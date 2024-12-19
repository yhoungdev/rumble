import Typography from "../misc/typography.tsx";
import { Twitter, Github, Linkedin } from "lucide-react";

const teamData = [
  {
    name: "AyeTee",
    image: "/images/teams/ayetee.svg",
    content:
      "AyeTee is a passionate developer who loves crafting intuitive user experiences.",
    alt: "AyeTee profile",
    socials: {
      twitter: "https://twitter.com/AyeTee",
      linkedin: "https://linkedin.com/in/AyeTee",
      github: "https://github.com/AyeTee",
    },
  },
  {
    name: "Wayne",
    image: "/images/teams/gunna.svg",
    content:
      "Wayne is a skilled backend engineer, ensuring scalability and performance.",
    alt: "Wayne profile",
    socials: {
      twitter: "https://twitter.com/Wayne",
      linkedin: "https://linkedin.com/in/Wayne",
      github: "https://github.com/Wayne",
    },
  },
  {
    name: "Gunna",
    image: "/images/teams/wayne.svg",
    content:
      "Gunna specializes in data analysis and brings valuable insights to the team.",
    alt: "Gunna profile",
    socials: {
      twitter: "https://twitter.com/Gunna",
      linkedin: "https://linkedin.com/in/Gunna",
      github: "https://github.com/Gunna",
    },
  },
];

const Team = () => {
  return (
    <div className="my-[5em]">
      <div className="bg-black p-8">
        <Typography>Team</Typography>
        <div
          className="max-w-6xl mx-auto grid grid-cols-1
       md:grid-cols-3 gap-8"
        >
          {teamData.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white p-1">
                <img
                  src={member.image}
                  alt={member.alt}
                  width={300}
                  height={300}
                  className="w-full"
                />
              </div>
              <h2 className="text-white kode_mono_font text-2xl mt-4">
                {member.name}
              </h2>
              <p className="text-gray-400 text-center mt-2">{member.content}</p>
              <div className="flex space-x-4 mt-4">
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary-500"
                >
                  <Twitter />
                </a>
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary-500"
                >
                  <Linkedin />
                </a>
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary-500"
                >
                  <Github />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
