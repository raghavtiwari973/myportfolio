import React, { useState, useEffect } from 'react';
import { Briefcase, Calendar, Award } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('experience-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: 1,
      role: 'Freelance AI Developer & Digital Solutions Consultant',
      company: 'Self-Employed',
      duration: '2025 - Present',
      type: 'EXPERIENCE',
      responsibilities: [
        'Developed websites, portfolios, and digital solutions for professionals and corporate clients.',
        'Leveraged AI-assisted development (Vibe Coding) tools to accelerate project delivery.',
        'Designed branding materials, presentations and marketing assets.',
        'Managed client requirements, project delivery and support while ensuring customer satisfaction.'
      ],
      delay: 0
    },
    {
      id: 2,
      role: 'Intern',
      company: 'Indore Management Association',
      duration: 'Feb 2026 - Apr 2026',
      type: 'LEADERSHIP EXPERIENCE',
      responsibilities: [
        'Created a marketing portfolio to help increase membership.',
        'Proposed lead generation strategies to increase membership growth.',
        'Developed campaigns and improved branding.',
        'Improved audience engagement through targeted campaigns and outreach strategies.'
      ],
      delay: 300
    }
  ];

  return (
    <section id="experience-section" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            💼 Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional journey and leadership roles
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`group relative bg-gray-800/80 backdrop-blur-md rounded-2xl p-10 md:p-12 hover:bg-gray-800/90 transition-all duration-500 transform hover:scale-105 border-2 border-yellow-300 shadow-[0_0_16px_4px_rgba(255,215,0,0.3)] before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:shadow-[0_0_32px_12px_rgba(255,215,0,0.18)] before:animate-pulse after:content-[''] after:absolute after:inset-0 after:rounded-2xl after:pointer-events-none after:shadow-[inset_0_2px_24px_0_rgba(255,255,255,0.08)] ${
                isVisible ? 'animate-slide-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${exp.delay}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {exp.type === 'LEADERSHIP EXPERIENCE' ? (
                      <Award className="w-8 h-8 text-white" />
                    ) : (
                      <Briefcase className="w-8 h-8 text-white" />
                    )}
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <div className="inline-block px-3 py-1 bg-gray-700/50 rounded-full text-xs font-semibold tracking-wider text-cyan-400 mb-3 border border-gray-600">
                        {exp.type}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-xl text-gray-300 mb-2">{exp.company}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:text-right">
                      <div className="flex items-center gap-2 text-cyan-400 mb-2 md:justify-end">
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <span className="font-medium whitespace-nowrap">{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-6 mt-4">
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <span className="text-cyan-400 mr-3 mt-1.5 leading-none">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
