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

const TeamCard = ({ member, large = false }) => {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const CardContent = () => (
    <div className={`team-card h-full perspective-1000 ${member.link ? "cursor-pointer" : ""}`}>
      <div
        className={`relative overflow-hidden rounded-xl mb-4 transition-transform duration-500 transform-gpu hover:rotate-y-6 hover:rotate-x-3 hover:scale-105 
          /* Mobile:  height, Desktop: conditional height */
          h-64 sm:h-72 ${large ? "lg:h-80" : "lg:h-56"}`}
      >
        {member.img ? (
          <img
            src={member.img}
            alt={member.name}
            // Use loading="lazy" to save mobile data
            loading="lazy"
            // aspect-square or video helps maintain consistency on small screens
            className="w-full h-full object-cover object-top shadow-xl hover:shadow-2xl transition-shadow duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
            <span className="text-3xl font-bold text-primary">{initials}</span>
          </div>
        )}
        
        {/* Link Icon Overlay */}
        {member.link && (
          <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full p-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
            <ExternalLink className="w-4 h-4 text-primary" />
          </div>
        )}
      </div>

      <div className="px-1 text-center sm:text-left">
        <h4 className="text-lg font-bold text-foreground leading-tight mb-1">{member.name}</h4>
        <p className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">{member.role}</p>
        <p className="text-muted-foreground text-sm line-clamp-2 italic sm:not-italic">
          "{member.description}"
        </p>
      </div>
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
    <section id="team" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black text-center gradient-text mb-16 tracking-tighter">OUR TEAM</h2>

        {/* Organizers - Optimized for 1 col on mobile, 2 on desktop */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-center text-foreground/80 mb-10 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-primary/30 hidden sm:block"></span>
            Organizers
            <span className="h-px w-8 bg-primary/30 hidden sm:block"></span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl mx-auto">
            {organizers.map((member, index) => (
              <TeamCard key={index} member={member} large />
            ))}
          </div>
        </div>

        {/* Department Heads - Responsive Grid scaling */}
        <div>
          <h3 className="text-2xl font-bold text-center text-foreground/80 mb-10 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-primary/30 hidden sm:block"></span>
            Department Heads
            <span className="h-px w-8 bg-primary/30 hidden sm:block"></span>
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-12">
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
