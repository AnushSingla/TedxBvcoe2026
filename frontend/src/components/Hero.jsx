import { useEffect, useState } from "react";

const Hero = () => {
  const [stage, setStage] = useState({
    eye: false,
    man: false,
    text: false,
  });

  useEffect(() => {
    setTimeout(() => setStage(s => ({ ...s, eye: true })), 500);
    setTimeout(() => setStage(s => ({ ...s, man: true })), 2000);
    setTimeout(() => setStage(s => ({ ...s, text: true })), 3000);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background flex items-center justify-center">

  



      
      <div className={`
        absolute inset-0
        z-[3]
        opacity-0
        transition-opacity duration-[2000ms]
        ${stage.eye ? "opacity-100 animate-pulse-glow" : ""}
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_70%)]
      `} />

      
      <div className="absolute flex items-center justify-center w-full h-full z-[5]">
        <div className={`reveal-mask ${stage.eye ? "open" : ""} translate-y-[59px] flex items-center justify-center`}>
          <img
            src="colg.svg"
            alt="Building"
            className="w-[83vw] h-[85vh] max-w-full object-contain"
          />
        </div>
      </div>
      
      <div className="absolute top-12 left-0 right-0 z-[70] overflow-hidden bg-black-600 py-2">
        
        <div className="flex animate-marquee-fast">
          
          <div className="flex whitespace-nowrap">
            <br></br>
            
             <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
             <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
             <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
             <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
             <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
             <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
             <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
             
             
          </div>
          
          <div className="flex whitespace-nowrap">
            <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
             <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
             <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
             <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
             <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
             <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
             <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
          </div>
          
        </div>
        <div className="bg-red-700 h-2 w-ful font-bold" role="separator"></div>
      </div>

      
      <div className="absolute bottom-0 left-0 right-0 z-[70] overflow-hidden bg-black-600 py-2">
        <div className="bg-red-700 h-2 w-ful font-bold" role="separator"></div>
        <div className="flex animate-marquee-fast">
          <div className="flex whitespace-nowrap">
            <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
             <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
             <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
             <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
             <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
             <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
             <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
          </div>
          <div className="flex whitespace-nowrap">
            <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
             <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
             <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
             <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
             <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
             <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
             <span className="text-red-700 text-xl font-bold mx-8">अंतः अस्ति प्रारंभ</span>
          </div>
        </div>
      </div>

   
      <img
        src="shadow.png"
        alt="speaker shadow"
        className={`
          absolute
          bottom-[5%]
          left-[41.5%]
          z-[40]
          w-[120px] sm:w-[160px] lg:w-[200px]
          opacity-0
          scale-50
          translate-y-[40px]
          ${stage.man ? "opacity-100 translate-y-0 scale-100 animate-man-entrance" : ""}
          transition-all duration-[1400ms]
        `}
      />

      
<h1
  className={`
    absolute bottom-[60%] left-[33.5%]
    z-[60]
    
    leading-none 
    translate-y-[120px] scale-[0.8] opacity-0
    text-[12rem] font-black tracking-tight
    transition-all duration-[1300ms]
    ${stage.text ? "opacity-100 translate-y-0 scale-100 animate-tedx-rise" : ""}
  `}
  style={{ fontFamily: "Inter, sans-serif" }}
>
  <span className="text-red-700 font-black">T</span>
</h1>
<h1
  className={`
    absolute bottom-[60%] left-[41%]
    z-[60]
    text-[12rem] font-black tracking-tight
    leading-none 
    translate-y-[120px] scale-[0.8] opacity-0
    transition-all duration-[1300ms]
    ${stage.text ? "opacity-100 translate-y-0 scale-100 animate-tedx-rise" : ""}
  `}
  style={{ fontFamily: "Inter, sans-serif" }}
>
  <span className="text-red-700 font-black">E</span>
</h1>

<h1
  className={`
    absolute bottom-[60%] left-[48%]
    z-[60]
    text-[12rem] font-black tracking-tight
    leading-none 
    translate-y-[120px] scale-[0.8] opacity-0
    transition-all duration-[1300ms]
    ${stage.text ? "opacity-100 translate-y-0 scale-100 animate-tedx-rise" : ""}
  `}
  style={{ fontFamily: "Inter, sans-serif" }}
>
  <span className="text-red-700 font-black">D</span>
</h1>

<h1
  className={`
    absolute bottom-[65%] left-[57%]
    z-[60]
     text-[9rem] font-black tracking-tight
    leading-none 
    translate-y-[120px] scale-[0.8] opacity-0
    transition-all duration-[1300ms]
    ${stage.text ? "opacity-100 translate-y-0 scale-100 animate-tedx-rise" : ""}
  `}
  style={{ fontFamily: "Inter, sans-serif" }}
>
  <span className="text-red-700 font-black">X</span>
</h1>


<h1
  className={`
    absolute bottom-[60%] right-[28%]
    z-[60]
    flex items-end gap-4
    translate-y-[120px] scale-[0.8] opacity-0
    text-[9rem] sm:text-[8rem] lg:text-[9rem]
    leading-none font-black
    transition-all duration-[1300ms]
    ${stage.text ? "opacity-100 translate-y-0 scale-100 animate-tedx-rise" : ""}
  `}
  style={{ fontFamily: "Inter, sans-serif" }}
>
  
  <span className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[0.25em] text-white">
    BVCOE
  </span>
</h1>



      

      <style>
        {`
        
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-fast {
            animation: marquee 10s linear infinite;
          }

          .reveal-mask {
            width: 0px;
            height: 0px;
            border-radius: 50%;
            overflow: hidden;
            transition: width 1.8s ease-out, height 1.8s ease-out;
          }
          .reveal-mask.open {
            width: 1000px;
            height: 1000px;
          }
          

          
          @keyframes pulseGlow {
            0% { opacity: 0.2; filter: brightness(1); }
            50% { opacity: 0.4; filter: brightness(1.3); }
            100% { opacity: 0.2; filter: brightness(1); }
          }
          .animate-pulse-glow {
            animation: pulseGlow 2s ease-in-out infinite;
          }
         @keyframes sunburstPulse {
  0% {
    opacity: 0.4;
    transform: scale(0.95);
    filter: brightness(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
    filter: brightness(1.3);
  }
  100% {
    opacity: 0.4;
    transform: scale(0.95);
    filter: brightness(0.9);
  }
}

.animate-sunburst {
  animation: sunburstPulse 4s ease-in-out infinite alternate;
}


.sun-rays {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 30%, rgba(255,220,180,0.2) 0%, transparent 70%);
  mix-blend-mode: screen;
  transform: rotate(0deg);
  animation: rotateRays 20s linear infinite;
}

@keyframes rotateRays {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}



         
          @keyframes manEntrance {
            0% { opacity: 0; transform: translateY(40px) scale(0.5); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          .animate-man-entrance {
            animation: manEntrance 1.4s ease-out forwards;
          }

          
          @keyframes tedxRise {
            0% { opacity: 0; transform: translateY(120px) scale(0.8); }
            60% { opacity: 1; transform: translateY(-20px) scale(1.05); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          .animate-tedx-rise {
            animation: tedxRise 1.3s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
