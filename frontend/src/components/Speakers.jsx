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
   {
    name: "Raghav Garg",
    role: "Speaker",
    description: "EdTech specialist and content strategist at PhysicsWallah and GeeksforGeeks.",
    link: "https://www.linkedin.com/in/raghav-garg-262a9b1b4/",
    img: "raghav.jpeg",
  },
  {
    name: "Ankit Jain",
    role: "Speaker",
    description: "Mechanical engineer turned CEO, scaling sustainable industrial solutions worldwide.",
    link: "https://cosmospumps.com/",
    img: "ankit.png",
  },
  {
    name: "Arjun Chopra",
    role: "Speaker",
    description: "CX leader, podcast host, and mentor bridging the gap between data and strategy.",
    link: "https://www.youtube.com/@cxwithchopra",
    img: "arjun.jpeg",
  },
  {
    name: "Deepak Wadhwa",
    role: "Speaker",
    description: "Empowering aspiring traders by turning seven years of market struggle into success.",
    link: "https://www.youtube.com/@deepakwadhwa.official",
    img: "deepakk.jpg",
  },
  {
    name: "Dr. Janani Jayapal",
    role: "Speaker",
    description: "Founder of Sculpt Dental,bridging clinical precision with community-driven care.",
    link: "https://www.instagram.com/drjananijayapal",
    img: "jaypal.jpeg",
  },
  {
    name: "Dr. Manjit Hans",
    role: "Speaker",
    description: "Media strategist and Ph.D. scholar scripting the evolution of regional entertainment.",
    link: "https://www.linkedin.com/in/dr-manjit-hans-6892891a/",
    img: "manjit.jpeg",
  },
  {
    name: "Dr. Piyhalli Roy Gupta",
    role: "Speaker",
    description: "Decoding invisible frequencies by bridging ancient wisdom with modern psychological therapy.",
    link: "https://piyhalliroygupta.co.in/",
    img: "piya.jpeg",
  },
  {
    name: "Tarun Dokania",
    role: "Speaker",
    description: "Founder of TABD and author dedicated to jargon-free financial education for over 100k learners.",
    link: "https://www.youtube.com/@TarunDokania",
    img: "dok.jpeg",
  },
  {
    name: "Venkatesh Gomatam",
    role: "Speaker",
    description: "Founder of The Fortitude Keystone, restoring leadership depth for sustainable organizational scale.",
    link: "https://www.linkedin.com/in/venkatesh-gomatam-ba888a18?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    img: "venka.jpeg",
  },

 
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