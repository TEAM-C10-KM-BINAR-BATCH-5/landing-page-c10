import gin from "../assets/team/gin.png";
import { team } from "../data/team";

export const Team = () => {
  return (
    <div
      id="OurTeam"
      className="px-4 py-16 mx-auto lg:max-w-screen-xl md:px-5 lg:px-8 lg:py-20"
    >
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block px-3 py-px mb-4 text-2xl font-extrabold tracking-wider text-costumeBlue uppercase rounded-full bg-teal-accent-400">
          Our Team
        </p>
        <p className="text-base text-gray-700 md:text-lg">
          Discover a World of Knowledge and Creativity within Our Team
        </p>
      </div>
      <div className="grid gap-4 md:gap-10 grid-cols-2 lg:grid-cols-5">
        {team.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center mb-2 md:mb-6"
          >
            <img
              className="object-cover w-20 md:w-28 h-20 md:h-28 mb-2 rounded-full shadow"
              src={member.img}
              alt={member.name}
            />
            <div className="flex flex-col items-center">
              <p className="text-sm font-bold">{member.name}</p>
              <p className="text-xs text-gray-800">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
