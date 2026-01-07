import { Check, Phone } from "lucide-react";

const tickets = [
  {
    name: "Early Bird",
    price: "₹299",
    features: ["General Admission", "Event Swag", "Networking"],
  },
  {
    name: "Standard",
    price: "₹499",
    features: ["General Admission", "Event Swag", "Networking", "Certificate"],
  },
  {
    name: "Premium",
    price: "₹799",
    features: ["Priority Seating", "Event Swag", "Networking", "Certificate", "Lunch"],
    popular: true,
  },
  {
    name: "VIP",
    price: "₹1299",
    features: ["Front Row Seats", "Premium Swag", "VIP Networking", "Certificate", "Lunch", "Meet & Greet"],
  },
  {
    name: "Student",
    price: "₹199",
    features: ["General Admission", "Student ID Required", "Certificate"],
  },
];

const scrollToElement = (id, offset = 0) => {
  const element = document.getElementById(id);
  if (!element) return;
  const y = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

const Tickets = () => {
  return (
    <section id="tickets" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center gradient-text mb-6">
          AVAILABLE PASSES
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-16">
          Choose your pass and join us for an unforgettable experience
        </p>

        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tickets.map((ticket, index) => (
            <a
              key={index}
              href="https://docs.google.com/forms/d/1uelLpfmfbci9HoVZST41mkswA31ITon-Z9gYPvrEFmU/edit"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                relative p-8 rounded-2xl glass shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2
                ${ticket.popular ? "ring-2 ring-primary overflow-visible" : ""}
              `}
            >
              {ticket.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  Most Popular
                </span>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{ticket.name}</h3>
                <p className="text-4xl sm:text-5xl font-extrabold gradient-text">{ticket.price}</p>
              </div>

              <ul className="space-y-3">
                {ticket.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-muted-foreground">
                    <Check className="w-5 h-5 mr-3 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>

        {/* Contact Box */}
        <div className="glass p-8 rounded-3xl max-w-3xl mx-auto text-center shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 flex items-center justify-center gap-2">
            <Phone className="w-5 h-5 text-primary" />
            For any queries contact:
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="text-center">
              <p className="text-lg text-foreground font-medium">Priyal Agarwal</p>
              <p className="text-muted-foreground">+91 9136284851</p>
            </div>
            <div className="hidden sm:block w-px bg-border" />
            <div className="text-center">
              <p className="text-lg text-foreground font-medium">Bhrigu Tayal</p>
              <p className="text-muted-foreground">+91 79824 75557</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { scrollToElement };
export default Tickets;
