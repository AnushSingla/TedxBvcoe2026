const partners = ["XTCY", "UniStyl", "Farmley"];

const Partners = () => {
  return (
    <section
      id="partners"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="section-header gradient-text mb-14">
          Our Partners
        </h2>

        {/* Partners */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 sm:gap-x-16">
          {partners.map((name, index) => (
            <span
              key={index}
              className="
                relative
                text-xl sm:text-2xl lg:text-3xl
                font-semibold tracking-wide
                text-white/70
                transition-all duration-300
                hover:text-red-500
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0
                after:bg-red-500
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
