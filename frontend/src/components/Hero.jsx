import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col sm:flex-row border border-gray-400 relative">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-orange-100/20 animate-pulse opacity-40"></div>

        {/* Left Side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 relative z-10">
          <div
            className={`text-[#414141] transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            {/* Bestseller Badge */}
            <div
              className={`flex items-center gap-2 transform transition-all duration-700 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <div
                className="w-8 md:w-11 h-[2px] bg-[#ff6825] transform origin-left transition-transform duration-500 delay-500 hover:scale-x-125"
                style={{
                  transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                  transition: "transform 0.8s ease-out 0.5s",
                }}
              ></div>
              <p className="font-medium text-sm md:text-base tracking-wider hover:tracking-widest transition-all duration-300 cursor-default">
                OUR BESTSELLER
              </p>
            </div>

            {/* Main Heading */}
            <h1
              className={`text-3xl sm:py-3 lg:text-5xl font-bold bg-gradient-to-r from-[#414141] via-[#ff6825] to-[#414141] bg-clip-text text-transparent bg-size-200 animate-gradient transform transition-all duration-1000 delay-700 hover:scale-105 cursor-default ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{
                backgroundSize: "200% 200%",
                animation: isVisible
                  ? "gradient 3s ease infinite, fadeInUp 1s ease-out 0.7s both"
                  : "none",
              }}
            >
              Latest Arrivals
            </h1>

            {/* Shop Now CTA */}
            <div
              className={`flex items-center gap-2 group cursor-pointer transform transition-all duration-1000 delay-1000 hover:translate-x-2 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <p className="font-semibold text-sm md:text-base tracking-wide group-hover:tracking-wider transition-all duration-300 group-hover:text-[#ff6825]">
                SHOP NOW
              </p>
              <div
                className="w-8 md:w-11 h-[2px] bg-[#ff6825] transform origin-right transition-all duration-300 group-hover:scale-x-125 group-hover:bg-[#ff4500]"
                style={{
                  transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                  transition:
                    "transform 0.8s ease-out 1s, background-color 0.3s ease",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full sm:w-1/2 relative overflow-hidden">
          <div
            className={`transform transition-all duration-1200 ease-out hover:scale-105 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Latest Fashion Arrivals"
              className={`w-full h-64 sm:h-full object-cover transition-all duration-700 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImageLoaded(true)}
            />

            {/* Animated overlay elements */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white to-orange-200 rounded-full mix-blend-overlay animate-float"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-300 to-white rounded-full mix-blend-overlay animate-float-delayed"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-white to-orange-100 rounded-full mix-blend-overlay animate-float-slow"></div>

              {/* Animated light rays */}
              <div className="absolute top-0 right-0 w-1 h-20 bg-gradient-to-b from-orange-400 to-transparent opacity-60 animate-light-ray"></div>
              <div className="absolute bottom-0 left-0 w-1 h-16 bg-gradient-to-t from-orange-400 to-transparent opacity-60 animate-light-ray-delayed"></div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ FIXED: use <style> instead of <style jsx> */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInZoom {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }

        @keyframes light-ray {
          0%, 100% { opacity: 0.6; height: 20px; }
          50% { opacity: 1; height: 40px; }
        }

        @keyframes light-ray-delayed {
          0%, 100% { opacity: 0.6; height: 16px; }
          50% { opacity: 1; height: 32px; }
        }

        @keyframes gradient-slow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.4; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.1); }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; animation-delay: 2s; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; animation-delay: 4s; }
        .animate-shimmer { animation: shimmer 3s ease-in-out infinite; animation-delay: 1.5s; }
        .animate-light-ray { animation: light-ray 2s ease-in-out infinite; }
        .animate-light-ray-delayed { animation: light-ray-delayed 2.5s ease-in-out infinite; animation-delay: 1s; }
        .animate-gradient-slow { animation: gradient-slow 5s ease-in-out infinite; }
        .animate-subtle-zoom { animation: breathe 4s ease-in-out infinite 2s; }
        .bg-size-200 { background-size: 200% 200%; }
        .animate-gradient { animation: gradient 3s ease infinite; }
      `}</style>
    </div>
  );
};

export default Hero;
