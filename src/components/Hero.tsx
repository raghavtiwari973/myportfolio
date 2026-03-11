import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Code, Zap, Instagram } from 'lucide-react';
import profileImg from './img.jpg';
import './hero-glow.css';

// Animated Floating Holographic Cube Effect
import { useRef } from 'react';

const AnimatedCube = () => {
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 });
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  // Move randomly every 2-3 seconds
  useEffect(() => {
    const move = () => {
      setPos(prev => ({
        x: Math.max(0, Math.min(0.95, prev.x + (Math.random() - 0.5) * 0.3)),
        y: Math.max(0, Math.min(0.92, prev.y + (Math.random() - 0.5) * 0.3)),
      }));
      setRot(prev => ({
        x: prev.x + (Math.random() - 0.5) * 120,
        y: prev.y + (Math.random() - 0.5) * 120,
      }));
    };
    const interval = setInterval(move, 2000 + Math.random() * 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  // Move away from cursor
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const cubeRect = ref.current.getBoundingClientRect();
      const cx = cubeRect.left + cubeRect.width / 2;
      const cy = cubeRect.top + cubeRect.height / 2;
      const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
      if (dist < 80) {
        // Move away from cursor
        const angle = Math.atan2(cy - e.clientY, cx - e.clientX);
        setPos(prev => {
          let nx = prev.x + Math.cos(angle) * 0.18;
          let ny = prev.y + Math.sin(angle) * 0.18;
          nx = Math.max(0, Math.min(0.95, nx));
          ny = Math.max(0, Math.min(0.92, ny));
          return { x: nx, y: ny };
        });
        setRot(prev => ({
          x: prev.x + (Math.random() - 0.5) * 120,
          y: prev.y + (Math.random() - 0.5) * 120,
        }));
      }
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        ref.current.style.top = `${window.innerHeight * pos.y + window.scrollY}px`;
        ref.current.style.left = `${window.innerWidth * pos.x}px`;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [pos]);

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        zIndex: 9999,
        transition: 'top 1.2s cubic-bezier(.7,1.7,.7,1), left 1.2s cubic-bezier(.7,1.7,.7,1)',
        pointerEvents: 'none',
        width: '36px',
        height: '36px',
        userSelect: 'none',
        perspective: '400px',
      }}
      className="animated-cube"
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
          transition: 'transform 1.2s cubic-bezier(.7,1.7,.7,1)',
        }}
      >
        {/* 6 faces of the cube */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #00ffe7 60%, #fff 100%)',
              opacity: 0.4,
              border: '2px solid #00ffe7',
              borderRadius: '6px',
              boxShadow: '0 2px 12px #00ffe799',
              transform:
                i === 0
                  ? 'translateZ(18px)'
                  : i === 1
                  ? 'rotateY(180deg) translateZ(18px)'
                  : i === 2
                  ? 'rotateY(90deg) translateZ(18px)'
                  : i === 3
                  ? 'rotateY(-90deg) translateZ(18px)'
                  : i === 4
                  ? 'rotateX(90deg) translateZ(18px)'
                  : 'rotateX(-90deg) translateZ(18px)',
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toRotate = [
    "Full Stack Developer",
    "Python Developer", 
    "AWS",
    "Devops"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText(
        isDeleting 
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, toRotate]);

  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center px-4">
      <AnimatedCube />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">
        {/* Profile Image Left */}
        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12 flex flex-col items-center md:items-start w-full md:w-auto relative">
          {/* Light effect behind profile image, not overlapping */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-60 h-60 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-white via-white to-transparent opacity-40 blur-2xl pointer-events-none hero-glow"></div>
          <div className="w-72 h-72 relative mt-8 md:mt-16 z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full p-1">
              <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-60 h-60 object-cover rounded-full border-4 border-cyan-400 shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Details Right */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
            Raghav Tiwari
          </h1>
          <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-12">
            <span className="border-r-2 border-cyan-400 pr-2 animate-pulse">
              {text}
            </span>
          </div>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed animate-fade-in-up">
          From backend logic to user experience, I bring digital ideas to life using automation, code, and creative strategy.
          </p>
          <div className="flex items-center md:justify-start justify-center gap-2 mb-8 text-gray-400 animate-fade-in-up animation-delay-1000">
            <MapPin className="w-5 h-5" />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">Available for Work</span>
          </div>
          <div className="flex md:justify-start justify-center gap-6 mb-12 animate-fade-in-up animation-delay-2000">
            <a href="https://github.com/raghavtiwari973" className="group relative p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110">
              <Github className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a href="https://www.linkedin.com/in/theraghavtiwari973/" className="group relative p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110">
              <Linkedin className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a href="https://www.instagram.com/theraghavtiwari973" target="_blank" rel="noopener noreferrer" className="group relative p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110">
              <Instagram className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </div>
          <div className="flex md:justify-start justify-center gap-4 animate-fade-in-up animation-delay-3000">
            <button
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                const el = document.getElementById('projects-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                View My Projects
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
            </button>
            <a
              href="/Raghav_Tiwari_CV.pdf.pdf"
              download
              className="group relative px-8 py-4 border-2 border-cyan-500 rounded-full font-semibold text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
