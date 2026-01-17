import { ExternalLink } from "lucide-react";

const speakers = [
  {
    name: "Oluchi Ikechi",
    role: "Speaker",
    description: "Inspiring change through innovative leadership and cross-cultural collaboration.",
    link: "https://www.linkedin.com/in/oli-ikechi/",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
  },
  {
    name: "Saakshar Duggal",
    role: "Speaker",
    description: "Pioneering sustainable solutions for a better tomorrow.",
    link: "https://www.linkedin.com/in/saakshar-duggal-7881aa228",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
  {
    name: "Ria Mohta",
    role: "Speaker",
    description: "Empowering youth through creative expression and storytelling.",
    link: "https://www.instagram.com/ria.mohta/",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
  },
  {
    name: "Sougata Bhattacharjee",
    role: "Speaker",
    description: "Transforming technology landscapes with visionary insights.",
    link: "https://www.linkedin.com/in/sougata-bhattacharjee/",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
  },
  {
    name: "Lt Gen Anil Kapoor",
    role: "Speaker",
    description: "Leading with courage and integrity through decades of distinguished service.",
    link: "https://www.linkedin.com/in/lt-general-anil-kapoor/",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
  },
  {
    name: "Dr Varda Sardana",
    role: "Speaker",
    description: "Advancing healthcare innovation with compassion and expertise.",
    link: "https://www.linkedin.com/in/dr-varda-sardana-120b8684",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop",
  },
];

const Speakers = () => {
  return ( <div id ="speakers" class="text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold text-red-600 tracking-wide uppercase animate-pulse">
  SPEAKERS COMING SOON
</div>

    
//     <section id="speakers" className="py-24 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="section-header gradient-text mb-16">OUR SPEAKERS</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
//           {speakers.map((speaker, index) => (
//             <a
//   key={index}
//   href={speaker.link}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="speaker-card group block"
//   style={{ animationDelay: `${index * 0.1}s` }}
// >
//   <div className="relative overflow-hidden aspect-[4/5] rounded-lg">
//     <img
//       src={speaker.img}
//       alt={speaker.name}
//       className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
//     />
//     <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

//     {/* Hover overlay */}
//     <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//     {/* Content */}
//     <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
//       <div className="flex items-start justify-between gap-2">
//         <div>
//           <h3 className="text-xl font-bold text-foreground mb-1">{speaker.name}</h3>
//           <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">{speaker.role}</p>
//           <p className="text-muted-foreground text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             {speaker.description}
//           </p>
//         </div>
//         <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-1" />
//       </div>
//     </div>
//   </div>
// </a>

//           ))}
//         </div>
//       </div>
//     </section>
  );
};

export default Speakers;
