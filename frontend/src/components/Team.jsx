import { ExternalLink } from "lucide-react";

const organizers = [
  {
    name: "Hrishabh Singh",
    role: "Organizer",
    description:
      "Leading TEDxBVCOE with vision and passion to create impactful experiences.",
    link: "https://www.linkedin.com/in/hrishabh-singh-24a724279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    img: "hrishabh.jpeg",
  },
  {
    name: "Sanjana Gupta",
    role: "Co-Organizer",
    description:
      "Driving collaborative excellence and seamless event coordination.",
    link: " https://www.linkedin.com/in/sanjana-gupta-5161b8315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    img: "sanjana.jpeg",
  },
];

const heads = [
  {
    name: "Abhishek Kumar",
    role: "Head of Production",
    description:
      "Turning 'what if' into a high-definition reality.",
    img: "abhishek.jpeg",
    link: "https://www.linkedin.com/in/abhishekk19?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Harsh Choudhary",
    role: "Head of Partnership",
    description: "The ultimate wingman for our event’s ambitions.",
    img: "harsh.jpeg" ,
    link: "https://www.linkedin.com/in/harsh-kumar-choudhary?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Aakar Roy",
    role: "Head of Partnership",
    description: "Connecting the world’s leading brands with the ideas of tomorrow.",
    img: "aakar.jpeg",
    link: "www.linkedin.com/in/aakar-roy-a689aa333",
  },
  {
    name: "Riddhi Sharma",
    role: "Head of Social Media",
    description: "Turning followers into a community of changemakers.",
    img: "riddhi.jpeg" ,
    link: "https://www.linkedin.com/in/riddhi-sharma-2b3171274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Hitesh Kumar",
    role: "Head of Design",
    description: "Crafting the visual stage for ideas worth spreading.",
    img: "hitesh.jpeg",
    link: "https://www.linkedin.com/in/reach-priyalagarwal",
  },
  {
    name: "Nikhil Singh",
    role: "Head of Design",
    description: "Creating stunning visual identities and design systems.",
    img: "nikhil.jpeg",
    link: "https://www.linkedin.com/in/nikhil-singh-555357252/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
 
  {
    name: "Anvi Tyagi",
    role: "Head of Event & Operations",
    description: "The calm in the center of the production storm.",
    img: "anvi.jpeg",
    link: "https://www.linkedin.com/in/anvi-tyagi-a19629323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Rishabh Kotnala",
    role: "Head of Event & Operations",
    description: "Mastering the chaos behind the curtain.",
    img: "rishabhkk.png",
    link: "https://www.linkedin.com/in/rishabh-kotnala-545874263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Aditya Tyagi",
    role: "Head of Publicity",
    img: "aditya.png",
    description: "The force behind the buzz and the master of the hype.",
    link: "https://www.linkedin.com/in/aditya-tyagi-003157333/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Kuldeep Singh",
    role: "Head of Publicity",
    description: "Breaking through the noise to deliver ideas that matter.",
    img: "kuldeep.jpeg",
    link: "https://www.linkedin.com/in/kuldeep-singh-2b4b3930b/",
  },
  {
    name: "Yashaswi",
    role: "Head of Content and Documentation",
    description: "Ensuring every idea is captured, curated, and crystallized.",
    img: "yashaswi.jpeg",
    link: "https://www.linkedin.com/in/kuldeep-singh-2b4b3930b/",
  },
  {
    name: "Anush Singla",
    role: "Head of Technical",
    description: "Powering our digital presence with cutting-edge solutions.",
    img: "anush.jpeg",
    link: "https://www.linkedin.com/in/anush-singla-1b0899311/",
  },
  {
    name: "Avani Sharma",
    role: "Head of Curation",
    description: "The filter for the extraordinary in a world of ordinary..",
    img:"avani.jpeg",
    link: "https://www.linkedin.com/in/avani-sharma-aa1134329/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
   {
    name: "Devanshu Anand",
    role: "Head of Curation",
    description: "Turning a spark of a thought into a fire of an idea.",
    img: "devanshu.jpeg",
    link: "https://www.linkedin.com/in/devanshu-anand-702844284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Rishabh Jha",
    role: "Head of Coverage",
    img: "rishabhjha.jpeg",
    description: "Ensuring the ideas shared today belong to the world forever.",
    link: "https://www.linkedin.com/in/devanshu-anand-702844284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
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
