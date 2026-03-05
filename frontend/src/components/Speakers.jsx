import { ExternalLink } from "lucide-react";

const speakers = [
  {
    name: "Saumya Singh",
    role: "Speaker",
    description: "Award-winning Software Engineer and open-source leader with 5+ years of industry expertise.",
    link: "https://www.linkedin.com/in/saumya1singh/",
    img: "saumya.jpeg",
  },
  {
    name: "Gajendra Purohit",
    role: "Speaker",
    description: "Renowned Mathematics educator and  20+ years of expertise in Engineering and Basic Science.",
    link: "https://www.youtube.com/@gajendrapurohit",
    img: "gajendra.jpeg",
  },

  /*
  {
    name: "Tarun Dokania",
    role: "Speaker",
    description: "Author and content strategist transforming  finance into accessible, research-driven insights.",
    link: "https://www.linkedin.com/in/tarundokania/",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
  {
    name: "DR. Piyhalli Roy Gupta",
    role: "Speaker",
    description: "Bestselling author of Magical Power of Numbers, transforming lives through psychological therapy.",
    link: "https://www.linkedin.com/in/piyhalli-roy-gupta-01721918a/",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
  },
  */
  {
    name: "Dipali Mathur Dayal",
    role: "Speaker",
    description: "Mrs India 2025 and CEO of Kestone Utsav, representing fusion of corporate leadership.",
    link: "https://www.linkedin.com/in/dipali-mathur-dayal-52355180/",
    img: "dipali.jpeg",
  },
  {
    name: "Deval Soni",
    role: "Speaker",
    description: "A320 Commander and co-founder of Golden Epaulettes Aviation.",
    link: "https://www.linkedin.com/in/captdevalsoni/",
    img: "devalsoni.JPG",
  },
  {
    name: "Raghav Garg",
    role: "Speaker",
    description: "EdTech specialist and content strategist at PhysicsWallah and GeeksforGeeks.",
    link: "https://www.linkedin.com/in/raghav-garg-262a9b1b4/",
    img: "raghav.jpeg",
  },
];

const Speakers = () => {
  return (
    <section id="speakers" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-header gradient-text mb-16 text-center">
          OUR SPEAKERS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <a
              key={index}
              href={speaker.link}
              target="_blank"
              rel="noopener noreferrer"
              className="speaker-card group block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-[4/5] rounded-lg">
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {speaker.name}
                      </h3>
                      <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
                        {speaker.role}
                      </p>
                      <p className="text-muted-foreground text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {speaker.description}
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-1" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;