import { FC, useState } from "react";
import { Apple, Monitor, Laptop } from "lucide-react"; // Corrected icon imports
import { Button } from "@/components/ui/button";
import PictopyLogo from "@/assets/PictoPy_Logo.png"; // Adjust this import path as needed

const PictopyLanding: FC = () => {
  // State for showing the notification
  const [downloadStarted, setDownloadStarted] = useState<string | null>(null);

  // Function to handle button click and show the notification
  const handleDownloadClick = (platform: string) => {
    setDownloadStarted(`Download for ${platform} started!`);
    // Hide the notification after 3 seconds
    setTimeout(() => {
      setDownloadStarted(null);
    }, 3000);
  };

  return (
    <section className="w-full py-12 md:py-24 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden">
      {/* Morphing Background Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="w-full h-full opacity-20 dark:opacity-10 transition-all duration-500"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="blueToRoseGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="var(--gradient-start)"
                className="transition-colors duration-500"
              />
              <stop
                offset="100%"
                stopColor="var(--gradient-end)"
                className="transition-colors duration-500"
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#blueToRoseGradient)"
            d="M0,0V800H1440V0C1200,200,800,400,400,600C200,700,100,750,0,800Z"
          >
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="M0,0V800H1440V0C1200,200,800,400,400,600C200,700,100,750,0,800Z;
                      M0,0V800H1440V0C1200,400,800,600,400,400C200,300,100,250,0,200Z;
                      M0,0V800H1440V0C1200,200,800,400,400,600C200,700,100,750,0,800Z"
              keyTimes="0; 0.5; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
              calcMode="spline"
            />
          </path>
        </svg>

        {/* Floating Circles Animation */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30 dark:opacity-20 pointer-events-none"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[1, 2, 3, 4, 5].map((circle) => (
            <circle
              key={circle}
              cx={`${Math.random() * 1440}`}
              cy={`${Math.random() * 800}`}
              r={`${20 + Math.random() * 50}`}
              fill="rgba(96, 165, 250, 0.1)"
              className="dark:fill-blue-900/10"
            >
              <animate
                attributeName="cx"
                values={`${Math.random() * 1440};${Math.random() * 1440};${Math.random() * 1440}`}
                dur={`${30 + Math.random() * 40}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                values={`${Math.random() * 800};${Math.random() * 800};${Math.random() * 800}`}
                dur={`${30 + Math.random() * 40}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </svg>
        
        {/* NEW: Hexagon Grid Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10 dark:opacity-5 pointer-events-none"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="hexagonPattern"
            patternUnits="userSpaceOnUse"
            width="60"
            height="60"
            patternTransform="scale(2) rotate(15)"
          >
            <path
              d="M30 0L60 17.3v34.7L30 60L0 52V17.3z"
              fill="none"
              stroke="var(--gradient-start)"
              strokeWidth="1"
              opacity="0.3"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagonPattern)">
            <animate
              attributeName="patternTransform"
              attributeType="XML"
              begin="0s"
              dur="60s"
              values="scale(2) rotate(0); scale(2.2) rotate(15); scale(2) rotate(0)"
              repeatCount="indefinite"
            />
          </rect>
        </svg>

        {/* NEW: Floating Photo Frames Animation */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20 dark:opacity-15 pointer-events-none"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Photo frame 1 */}
          <rect
            x="200"
            y="300"
            width="120"
            height="80"
            rx="2"
            fill="none"
            stroke="var(--gradient-end)"
            strokeWidth="2"
            opacity="0.4"
            transform="rotate(-5)"
          >
            <animate
              attributeName="y"
              values="300;310;300"
              dur="8s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            />
            <animate
              attributeName="opacity"
              values="0.4;0.6;0.4"
              dur="10s"
              repeatCount="indefinite"
            />
          </rect>

          {/* Photo frame 2 */}
          <rect
            x="1100"
            y="200"
            width="100"
            height="150"
            rx="2"
            fill="none"
            stroke="var(--gradient-start)"
            strokeWidth="2"
            opacity="0.3"
            transform="rotate(8)"
          >
            <animate
              attributeName="y"
              values="200;215;200"
              dur="12s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            />
            <animate
              attributeName="opacity"
              values="0.3;0.5;0.3"
              dur="15s"
              repeatCount="indefinite"
            />
          </rect>

          {/* Photo frame 3 */}
          <rect
            x="700"
            y="500"
            width="180"
            height="120"
            rx="2"
            fill="none"
            stroke="var(--gradient-end)"
            strokeWidth="2"
            opacity="0.35"
            transform="rotate(-10)"
          >
            <animate
              attributeName="y"
              values="500;520;500"
              dur="14s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            />
            <animate
              attributeName="opacity"
              values="0.35;0.55;0.35"
              dur="12s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>

        {/* NEW: Waving Lines Animation */}
        <svg
          className="absolute inset-0 w-full h-full opacity-15 dark:opacity-10 pointer-events-none"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,100 C240,150 480,50 720,100 C960,150 1200,50 1440,100"
            fill="none"
            stroke="var(--gradient-start)"
            strokeWidth="2"
            opacity="0.3"
          >
            <animate
              attributeName="d"
              dur="30s"
              repeatCount="indefinite"
              values="M0,100 C240,150 480,50 720,100 C960,150 1200,50 1440,100;
                      M0,150 C240,50 480,150 720,50 C960,150 1200,50 1440,150;
                      M0,100 C240,150 480,50 720,100 C960,150 1200,50 1440,100"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            />
            <animate
              attributeName="opacity"
              values="0.2;0.4;0.2"
              dur="20s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M0,300 C240,250 480,350 720,300 C960,250 1200,350 1440,300"
            fill="none"
            stroke="var(--gradient-end)"
            strokeWidth="2"
            opacity="0.3"
          >
            <animate
              attributeName="d"
              dur="25s"
              repeatCount="indefinite"
              values="M0,300 C240,250 480,350 720,300 C960,250 1200,350 1440,300;
                      M0,250 C240,350 480,250 720,350 C960,250 1200,350 1440,250;
                      M0,300 C240,250 480,350 720,300 C960,250 1200,350 1440,300"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            />
            <animate
              attributeName="opacity"
              values="0.3;0.5;0.3"
              dur="22s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Content */}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Heading with Gradient Text and Logo */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <img
              src={PictopyLogo}
              alt="Pictopy Logo"
              className="h-16 w-16 object-contain"
            />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-green-500 transition-all duration-300">
              PictoPy
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-green-700 dark:text-yellow-300 max-w-3xl mb-8 transition-colors duration-300">
            Organize your photos effortlessly. Available for Mac, Windows, and Linux.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 h-12 px-8 transition-all duration-300 
                         border-2 border-transparent hover:border-black dark:hover:border-white 
                         transform hover:-translate-y-1 hover:shadow-lg"
              size="lg"
              onClick={() => handleDownloadClick("Mac")}
            >
              <Apple className="h-5 w-5 mr-2" />
              Download for Mac
            </Button>
            <Button
              className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 h-12 px-8 transition-all duration-300 
                         border-2 border-transparent hover:border-black dark:hover:border-white 
                         transform hover:-translate-y-1 hover:shadow-lg"
              size="lg"
              variant="outline"
              onClick={() => handleDownloadClick("Windows")}
            >
              <Monitor className="h-5 w-5 mr-2" />
              Download for Windows
            </Button>
            <Button
              className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 h-12 px-8 transition-all duration-300 
                         border-2 border-transparent hover:border-black dark:hover:border-white 
                         transform hover:-translate-y-1 hover:shadow-lg"
              size="lg"
              variant="outline"
              onClick={() => handleDownloadClick("Linux")}
            >
              <Laptop className="h-5 w-5 mr-2" />
              Download for Linux
            </Button>
          </div>

          {/* Download Notification (Popup) - Moved to right side with enhanced animation */}
          {downloadStarted && (
            <div
              className="fixed top-16 right-4 md:right-8 bg-green-500 text-white py-3 px-6 rounded-lg shadow-xl text-lg z-50 opacity-0 animate-slideInRight"
            >
              {downloadStarted}
            </div>
          )}
        </div>
      </div>

      {/* CSS Variables for Adaptive Gradient */}
      <style>
        {`
          :root {
            --gradient-start: rgb(246, 255, 0); /* Light mode yellow */
            --gradient-end: rgb(38, 255, 0); /* Light mode green */
            color-scheme: light dark; /* Explicitly support both color schemes */
          }
          .dark {
            --gradient-start: rgb(0, 255, 17); /* Dark mode green */
            --gradient-end: rgb(227, 255, 14); /* Dark mode yellow */
          }

          /* Enhanced animations for the popup */
          @keyframes slideInRight {
            0% {
              opacity: 0;
              transform: translateX(50px);
            }
            15% {
              opacity: 1;
              transform: translateX(-10px);
            }
            20% {
              transform: translateX(8px);
            }
            25% {
              transform: translateX(-5px);
            }
            30% {
              transform: translateX(0);
            }
            85% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              transform: translateX(0);
            }
          }

          .animate-slideInRight {
            animation: slideInRight 3s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default PictopyLanding;