import { useState } from "react";

const InfoSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      title: "TED",
      content1:
        "TED (Technology, Entertainment, Design) is a global platform that hosts conferences featuring influential speakers from various fields who share their innovative ideas and experiences.",
      content2:
        "Founded in 1984, TED has become synonymous with Ideas Worth Spreading. The main TED conference is held annually in Vancouver, Canada, and its talks cover a wide range of topics, including science, technology, and culture.",
    },
    {
      title: "TEDx",
      content1:
        "TEDx events are independently organized TED-like conferences that can take place anywhere in the world. These events aim to bring the spirit of TED to local communities and provide a platform for individuals to share their unique ideas.",
      content2:
        "TEDx talks cover a broad spectrum of subjects, often reflecting the unique challenges and innovations of a particular region.",
    },
    {
      title: "TEDxBVCOE",
      content1:
        "TEDxBVCOE is a specific instance of a TEDx event affiliated with Bharati Vidyapeeth College of Engineering (BVCOE) in Delhi, India. Organized independently by a dedicated local team of volunteers, TEDxBVCOE serves as a platform for students, educators, and professionals to share their insights and ideas with the community.",
      content2:
        "The BVCOE in TEDxBVCOE represents Bharati Vidyapeeth College of Engineering, the hosting institution.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-header gradient-text mb-16">WHAT IS?</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {items.map((item, index) => (
            <button
              key={index}
              className={`info-button text-xl sm:text-2xl font-bold ${
                openIndex === index ? "active text-primary" : "text-foreground"
              }`}
              onClick={() => setOpenIndex(index)}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="relative min-h-[280px]">
          {items.map((item, index) => (
            <div
              key={index}
              className={`modern-card p-8 sm:p-10 transition-all duration-500 absolute inset-0 ${
                openIndex === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {item.content1}
              </p>
              <p className="text-muted-foreground/80 text-lg leading-relaxed text-right italic">
                {item.content2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
