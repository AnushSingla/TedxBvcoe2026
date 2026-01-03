const merchItems = [
  { name: "Polo Front", image: "https://placehold.co/400x500/1a1a1a/eb0028?text=Polo+Front" },
  { name: "Polo Back", image: "https://placehold.co/400x500/1a1a1a/eb0028?text=Polo+Back" },
  { name: "Round Neck Front", image: "https://placehold.co/400x500/1a1a1a/eb0028?text=Round+Front" },
  { name: "Round Neck Back", image: "https://placehold.co/400x500/1a1a1a/eb0028?text=Round+Back" },
];

const Merch = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-header gradient-text mb-16">OUR MERCH</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {merchItems.map((item, index) => (
            <div key={index} className="modern-card p-6 hover-lift">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-80 sm:h-96 object-cover rounded-lg mb-4"
              />
              <p className="text-center text-foreground text-lg font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Merch;
