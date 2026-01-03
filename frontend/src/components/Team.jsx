import { ExternalLink } from "lucide-react";

const organizers = [
  {
    name: "Paridhi Harit",
    role: "Organizer",
    description:
      "Leading TEDxBVCOE with vision and passion to create impactful experiences.",
    link: "https://www.linkedin.com/in/reachparidhi",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Ridhi Gupta",
    role: "Co-Organizer",
    description:
      "Driving collaborative excellence and seamless event coordination.",
    link: "http://www.linkedin.com/in/ridhi-gupta07",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

const heads = [
  {
    name: "Uday Singh Pundeer",
    role: "Head of Productions",
    description:
      "Crafting immersive audiovisual experiences for every event.",
    link: "https://www.linkedin.com/in/uday-pundeer-460580267",
  },
  {
    name: "Abhinav Singh",
    role: "Head of Productions",
    description: "Ensuring flawless execution of all production elements.",
    link: "",
  },
  {
    name: "Bhrigu Tayal",
    role: "Head of Operations",
    description: "Orchestrating logistics and operations with precision.",
    link: "https://www.linkedin.com/in/bhrigu-tayal-0aa469212/",
  },
  {
    name: "Priyal Agarwal",
    role: "Head of Operations",
    description: "Managing seamless event operations and attendee experience.",
    link: "https://www.linkedin.com/in/reach-priyalagarwal",
  },
  {
    name: "Harshvardhan Singh Rajput",
    role: "Head of Design",
    description: "Creating stunning visual identities and design systems.",
    link: "",
  },
  {
    name: "Maitri",
    role: "Head of Content",
    description: "Weaving compelling narratives that inspire and engage.",
    link: "https://www.linkedin.com/in/maitri-65b510257/",
  },
  {
    name: "Devansh Biswas",
    role: "Head of Publicity",
    description: "Amplifying our message to reach wider audiences.",
    link: "https://www.linkedin.com/in/devansh-biswas-606666214",
  },
  {
    name: "Aditya Singh",
    role: "Head of Publicity",
    description: "Building strategic partnerships and brand awareness.",
    link: "https://in.linkedin.com/in/dikkey-kumar-singh-36a6b12ab",
  },
  {
    name: "Aditya Shrivastav",
    role: "Head of Technical",
    description: "Powering our digital presence with cutting-edge solutions.",
    link: "https://www.linkedin.com/in/reachshrivastav",
  },
  {
    name: "Aashima Bathla",
    role: "Head of Social Media",
    description: "Curating engaging social content and community building.",
    link: "https://www.linkedin.com/in/aashima-bathla",
  },
];

// 3D hover effect TeamCard
const TeamCard = ({ member, large = false }) => {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const CardContent = () => (
    <div
      className={`team-card h-full perspective-1000 ${
        member.link ? "cursor-pointer" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden rounded-lg mb-4 transition-transform duration-500 transform-gpu hover:rotate-y-6 hover:rotate-x-3 hover:scale-105 ${
          large ? "h-64" : "h-48"
        }`}
      >
        {member.img ? (
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover shadow-xl hover:shadow-2xl transition-shadow duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
            <span className="text-3xl font-bold text-primary">{initials}</span>
          </div>
        )}
        {member.link && (
          <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink className="w-4 h-4 text-primary" />
          </div>
        )}
      </div>
      <h4 className="text-lg font-bold text-foreground mb-1">{member.name}</h4>
      <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
      <p className="text-muted-foreground text-sm line-clamp-2">
        {member.description}
      </p>
    </div>
  );

  if (member.link) {
    return (
      <a
        href={member.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

const Team = () => {
  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-header gradient-text mb-16">OUR TEAM</h2>

        {/* Organizers */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">
            Organizers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {organizers.map((member, index) => (
              <TeamCard key={index} member={member} large />
            ))}
          </div>
        </div>

        {/* Department Heads */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">
            Department Heads
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {heads.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
