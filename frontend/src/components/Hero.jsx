import { ArrowRight } from "lucide-react";

const scrollToElement = (id, offset = 0) => {
  const element = document.getElementById(id);
  if (!element) return;

  const y =
    element.getBoundingClientRect().top +
    window.pageYOffset -
    offset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};

const Hero = () => (
  <div
    id="hero"
    className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
  >
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-background via-ted-dark-accent to-background" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(351,100%,46%,0.1)_0%,_transparent_70%)]" />

    {/* Animated particles effect */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </div>

    <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
      <p className="text-primary font-medium tracking-[0.3em] uppercase mb-4 animate-fade-in">
        Ideas Worth Spreading
      </p>

      {/* TEDxBVCOE with floating animation */}
      <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black gradient-text font-space animate-float-vertical mb-6">
        TEDxBVCOE
      </h1>

      <p
        className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-12 animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        Join us for an inspiring day of breakthrough ideas and transformative conversations
      </p>

      <div
        className="flex flex-col sm:flex-row gap-6 mb-12 animate-fade-in"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="glass px-8 py-5 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-1">
            Date
          </p>
          <p className="text-3xl sm:text-4xl font-bold text-foreground">9th April</p>
        </div>
        <div className="glass px-8 py-5 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-1">
            Year
          </p>
          <p className="text-3xl sm:text-4xl font-bold text-foreground">2025</p>
        </div>
      </div>

      <button
        onClick={() => scrollToElement("tickets", 120)}
        className="btn-primary text-lg px-8 py-4 flex items-center gap-3 animate-fade-in"
        style={{ animationDelay: "0.6s" }}
      >
        Get Your Tickets
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
        <div className="w-1.5 h-3 bg-primary rounded-full" />
      </div>
    </div>

    {/* Add custom Tailwind animation */}
    <style>
      {`
        @keyframes floatVertical {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-vertical {
          animation: floatVertical 3s ease-in-out infinite;
        }
      `}
    </style>
  </div>
);

export default Hero;
