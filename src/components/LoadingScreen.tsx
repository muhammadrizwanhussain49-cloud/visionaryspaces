import { useEffect, useState } from "react";

const profilePic = "/lovable-uploads/c9e25fed-2a84-4bf3-bfe4-94c9bd4dd375.png";

const LoadingScreen = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [showGeometry, setShowGeometry] = useState(false);

  const loadingTexts = [
    "VisionarySpaces",
    "Loading Portfolio...",
    "Initializing Design...",
    "Almost Ready..."
  ];

  useEffect(() => {
    // Show geometric shapes after 1 second
    const geometryTimer = setTimeout(() => setShowGeometry(true), 1000);

    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1.5;
      });
    }, 45);

    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length);
    }, 800);

    return () => {
      clearTimeout(geometryTimer);
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-20 animate-pulse"></div>
      
      {/* Dynamic Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-ping ${
              i % 3 === 0 ? 'bg-primary w-1 h-1' : 
              i % 3 === 1 ? 'bg-secondary w-1.5 h-1.5' : 
              'bg-accent w-0.5 h-0.5'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Loading Container */}
      <div className="relative z-10 text-center px-4">
        {/* Logo/Brand with Enhanced Animation */}
        <div className="mb-8 md:mb-12">
          <div className="relative inline-block">
            {/* Outer Rotating Ring */}
            <div className="absolute inset-0 w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-transparent bg-gradient-to-r from-primary via-secondary to-accent opacity-80 animate-spin">
              <div className="h-full w-full rounded-full bg-background m-0.5"></div>
            </div>
            
            {/* Middle Pulsing Ring */}
            <div className="absolute inset-2 w-24 h-24 md:w-28 md:h-28 rounded-full border border-primary/50 animate-ping"></div>
            
            {/* Inner Circle with Profile Picture */}
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-glow-cyan animate-pulse-glow p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-background/10 backdrop-blur-sm">
                <img
                  src={profilePic}
                  alt="Muhammad Rizwan"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Corner Accents */}
            <div className="absolute -top-2 -left-2 w-3 h-3 bg-accent rounded-full animate-bounce"></div>
            <div className="absolute -top-2 -right-2 w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-secondary rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-accent rounded-full animate-bounce" style={{animationDelay: '0.6s'}}></div>
          </div>
        </div>

        {/* Loading Text with Enhanced Typography */}
        <div className="mb-6 md:mb-8 h-16 md:h-20 flex items-center justify-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neon-primary">
            <span className="inline-block animate-pulse tracking-wider">
              {loadingTexts[currentText]}
            </span>
            <span className="animate-ping text-secondary ml-1 text-3xl md:text-5xl">|</span>
          </h1>
        </div>

        {/* Enhanced Progress Bar */}
        <div className="w-72 md:w-96 max-w-full mx-auto mb-6 md:mb-8">
          <div className="relative h-3 md:h-4 bg-muted rounded-full overflow-hidden loading-bar-shimmer">
            <div 
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-500 ease-out rounded-full shadow-glow-cyan"
              style={{ width: `${loadingProgress}%` }}
            >
              {/* Multiple Shine Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-white/20 rounded-full"></div>
            </div>
          </div>
          
          {/* Progress Percentage with Glow */}
          <div className="text-center mt-3 md:mt-4">
            <span className="text-lg md:text-xl font-semibold text-neon-primary">
              {loadingProgress}%
            </span>
          </div>
        </div>

        {/* Enhanced Loading Dots */}
        <div className="flex justify-center space-x-3 md:space-x-4 mb-8 md:mb-12">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full animate-bounce shadow-glow-cyan ${
                i % 2 === 0 ? 'bg-primary' : 'bg-secondary'
              }`}
              style={{
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>

      
      </div>

      {/* Enhanced Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/30 to-background/80 pointer-events-none"></div>
      
      {/* Enhanced Corner Decorations */}
      <div className="absolute top-4 left-4 w-12 h-12 md:w-20 md:h-20">
        <div className="w-full h-full border-l-2 border-t-2 border-primary opacity-50 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-3 h-3 bg-primary rounded-full animate-ping"></div>
      </div>
      
      <div className="absolute top-4 right-4 w-12 h-12 md:w-20 md:h-20">
        <div className="w-full h-full border-r-2 border-t-2 border-secondary opacity-50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-0 right-0 w-3 h-3 bg-secondary rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="absolute bottom-4 left-4 w-12 h-12 md:w-20 md:h-20">
        <div className="w-full h-full border-l-2 border-b-2 border-accent opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 bg-accent rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="absolute bottom-4 right-4 w-12 h-12 md:w-20 md:h-20">
        <div className="w-full h-full border-r-2 border-b-2 border-primary opacity-50 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Scanning Line Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse opacity-30 scanning-line"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
