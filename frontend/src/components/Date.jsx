import React from "react";
import { ArrowRight } from "lucide-react";

export default function Date({ scrollToElement }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center items-center">
        <br></br>
      
      {/* Date Box */}
      <div
        className="glass px-8 py-5 text-center opacity-0 translate-y-10 animate-info-item"
        style={{ animationDelay: "0.4s" }}
      >
        <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-1">
          Date
        </p>
        <p className="text-3xl sm:text-4xl font-bold text-foreground">9th April</p>
      </div>

      {/* Year Box */}
      <div
        className="glass px-8 py-5 text-center opacity-0 translate-y-10 animate-info-item"
        style={{ animationDelay: "0.6s" }}
      >
        <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-1">
          Year
        </p>
        <p className="text-3xl sm:text-4xl font-bold text-foreground">2025</p>
      </div>

      {/* Tickets Button */}
      <button
        onClick={() => scrollToElement("tickets", 120)}
        className="btn-primary text-lg px-8 py-4 flex items-center gap-3 opacity-0 translate-y-10 animate-info-item hover:scale-105 transition-transform duration-300"
        style={{ animationDelay: "0.8s" }}
      >
        Get Your Tickets <ArrowRight className="w-5 h-5" />
      </button>

      {/* Styling */}
      <style>
        {`
          @keyframes infoFadeSlide {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-info-item {
            animation: infoFadeSlide 1s ease-out forwards;
          }

          .glass {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(12px);
            border-radius: 1rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
        `}
      </style>
    </div>
  );
}
