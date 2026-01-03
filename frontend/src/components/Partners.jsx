const partners = [
  { name: "XTCY", logo: "https://placehold.co/200x100/1a1a1a/eb0028?text=XTCY" },
  { name: "UniStyl", logo: "https://placehold.co/300x100/1a1a1a/eb0028?text=UniStyl" },
  { name: "Farmley", logo: "https://placehold.co/200x120/1a1a1a/eb0028?text=Farmley" },
];

const Partners = () => {
  return (
    <section id="partners" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-header gradient-text mb-16">OUR PARTNERS</h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="sponsor-logo hover-lift"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 lg:h-24 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
