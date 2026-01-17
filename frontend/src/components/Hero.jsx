import { useEffect, useState } from "react";

const Hero = () => {
  const [stage, setStage] = useState({
    eye: false,
    man: false,
    text: false,
  });

  useEffect(() => {
    setTimeout(() => setStage((s) => ({ ...s, eye: true })), 500);
    setTimeout(() => setStage((s) => ({ ...s, man: true })), 2000);
    setTimeout(() => setStage((s) => ({ ...s, text: true })), 3000);
  }, []);

  return (
    <section
      className="
        relative
        h-[100svh]
        w-full
        overflow-hidden
        bg-background
        flex
        items-center
        justify-center
        z-0
      "
      style={{
        paddingTop: "80px", // navbar height
        isolation: "isolate", // 🔑 z-index fix
      }}
    >
      <div
        className={`
          absolute inset-0
          z-[3]
          opacity-0
          transition-opacity duration-[2000ms]
          ${stage.eye ? "opacity-100 animate-pulse-glow" : ""}
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_70%)]
        `}
      />

      <div className="absolute flex bottom-[15%] sm:bottom-[0%] items-center justify-center w-full h-full z-[5]">
        <div
          className={`reveal-mask ${
            stage.eye ? "open" : ""
          } translate-y-[30px] sm:translate-y-[59px] flex items-center justify-center`}
        >
          <img
            src="colg.svg"
            alt="Building"
            className="w-[90vw] h-[60vh] sm:w-[83vw] sm:h-[85vh] max-w-full object-contain"
          />
        </div>
      </div>

      <div className="absolute top-12 left-0 right-0 z-[10] overflow-hidden py-1 sm:py-2">
        <div className="bg-red-700 h-1 sm:h-2 w-full font-bold" />
      </div>

      <div className="absolute bottom-[35%] sm:bottom-0 left-0 right-0 z-[10] overflow-hidden py-1 sm:py-2">
        <div className="bg-red-700 h-1 sm:h-2 w-full font-bold" />
        <div className="flex animate-marquee-fast">
          {[...Array(2)].map((_, block) => (
            <div key={block} className="flex whitespace-nowrap">
              {[...Array(7)].map((_, i) => (
                <span
                  key={i}
                  className="text-red-700 text-sm sm:text-xl font-bold mx-4 sm:mx-8"
                >
                  अंतः अस्ति प्रारंभ
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <img
        src="shadow.png"
        alt="speaker shadow"
        className={`
          absolute
          hidden sm:block
          bottom-[5%]
          left-1/2
          -translate-x-1/2
          z-[8]
          w-[100px] sm:w-[160px] lg:w-[200px]
          opacity-0
          transition-opacity duration-[2000ms]
          ${stage.eye ? "opacity-100 animate-man-entrance" : ""}
        `}
      />

      {/* TEDx TEXT */}
      <div
        className="
          absolute
          bottom-[72%] sm:bottom-[55%] lg:bottom-[60%]
          left-1/2 -translate-x-1/2
          z-[9]
          w-full px-4
          flex items-baseline justify-center gap-1 sm:gap-2 md:gap-4
        "
      >
        {["T", "E", "D"].map((char) => (
          <h1
            key={char}
            className={`
              text-red-700 font-black tracking-tight leading-none
              text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem]
              translate-y-[120px] scale-[0.8] opacity-0
              transition-all duration-[1300ms]
              ${stage.text ? "opacity-100 scale-100 animate-tedx-rise" : ""}
            `}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {char}
          </h1>
        ))}

        <h1
          className={`
            text-red-700 font-black tracking-tight leading-none
            text-5xl sm:text-6xl md:text-[8rem] lg:text-[9rem]
            translate-y-[125px] scale-[0.8] opacity-0
            transition-all duration-[1300ms]
            ${stage.text ? "opacity-100 scale-100 animate-tedx-rise" : ""}
          `}
        >
          X
        </h1>

        <span
          className={`
            text-white font-medium
            tracking-[0.15em] sm:tracking-[0.25em]
            text-xl sm:text-3xl md:text-4xl lg:text-5xl
            translate-y-[120px] scale-[0.8] opacity-0
            transition-all duration-[1300ms]
            ${stage.text ? "opacity-100 scale-100 animate-tedx-rise" : ""}
          `}
        >
          BVCOE
        </span>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-fast {
          animation: marquee 10s linear infinite;
        }

        .reveal-mask {
          width: 0;
          height: 0;
          border-radius: 50%;
          overflow: hidden;
          transition: width 1.8s ease-out, height 1.8s ease-out;
        }
        .reveal-mask.open {
          width: 90vw;
          height: 90vw;
        }
        @media (min-width: 640px) {
          .reveal-mask.open {
            width: 1000px;
            height: 1000px;
          }
        }

        @keyframes pulseGlow {
          0%,100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        @keyframes manEntrance {
          from { opacity: 0; transform: translateY(40px) scale(0.5); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-man-entrance {
          animation: manEntrance 1.4s ease-out forwards;
        }

        @keyframes tedxRise {
          0% { opacity: 0; transform: translateY(120px) scale(0.8); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-tedx-rise {
          animation: tedxRise 1.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
