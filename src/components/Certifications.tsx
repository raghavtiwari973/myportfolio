import React, { useState, useEffect } from 'react';
import { Award, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('certifications-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Devops Engineer Training (DOP-C02)',
      issuer: 'LinuxWorld',
      date: '01 Sep 2024 to 15 Sep 2024',
      category: 'Devops',
      description: 'Completed a certified training program from LinuxWorld Informatics Pvt. Ltd., an authorized Red Hat Training & Examination Partner. The program focused on hands-on practical sessions and real-time project implementation under expert guidance.',
      color: 'from-yellow-400 to-orange-500',
      certificateUrl: '/certificates/Raghav Tiwari.pdf',
      credentialId: '#13 - 2024 - 3729 '
    },
    {
      id: 2,
      title: 'GITOps-Argo CD Devops Training',
      issuer: 'LinuxWorld',
      date: '05 Oct 2024 to 29 Dec 2024',
      category: 'Devops',
      description: 'Completed a certified training program from LinuxWorld Informatics Pvt. Ltd., an authorized Red Hat Training & Examination Partner. The program focused on hands-on practical sessions and real-time project implementation under expert guidance.',
      color: 'from-pink-400 to-red-500',
      certificateUrl: '/certificates/Raghav Tiwari (1).pdf',
      credentialId: '#13 - 2024 - 3761'
    },
    {
      id: 3,
      title: 'Automation Using Ansible',
      issuer: 'LinuxWorld',
      date: '29 Oct 2023 to 20 Jan 2024',
      category: 'Devops',
      description: 'Completed a certified training program from LinuxWorld Informatics Pvt. Ltd., an authorized Red Hat Training & Examination Partner. The program focused on hands-on practical sessions and real-time project implementation under expert guidance.',
      color: 'from-green-400 to-blue-500',
      certificateUrl: '/certificates/Raghav Tiwari (2).pdf',
      credentialId: '#13 - 2024 - 3713 '
    },
    {
      id: 4,
      title: 'Selenium: DevOps Automation Web Testing Training',
      issuer: 'LinuxWorld',
      date: '23 Nov 2024 to 11 Jan 2024',
      category: 'Devops',
      description: 'Completed a certified training program from LinuxWorld Informatics Pvt. Ltd., an authorized Red Hat Training & Examination Partner. The program focused on hands-on practical sessions and real-time project implementation under expert guidance.',
      color: 'from-purple-400 to-indigo-500',
      certificateUrl: '/certificates/Raghav Tiwari (3).pdf',
      credentialId: '#13 - 2024 - 3697'
    },
    {
      id: 5,
      title: 'Prometheus & Grafana Training',
      issuer: 'LinuxWorld',
      date: '01 Mar 2024 to 01 May 2024',
      category: 'Devops',
      description: 'Completed a certified training program from LinuxWorld Informatics Pvt. Ltd., an authorized Red Hat Training & Examination Partner. The program focused on hands-on practical sessions and real-time project implementation under expert guidance.',
      color: 'from-cyan-400 to-blue-500',
      certificateUrl: '/certificates/Raghav Tiwari (4).pdf',
      credentialId: '#13 - 2024 - 3745 '
    },
    {
      id: 6,
      title: 'Microsoft azure Cloud Training',
      issuer: 'LinuxWorld',
      date: '05 Apr 2024 to 28 Sep 2024',
      category: 'Devops',
      description: 'Completed a certified training program from LinuxWorld Informatics Pvt. Ltd., an authorized Red Hat Training & Examination Partner. The program focused on hands-on practical sessions and real-time project implementation under expert guidance.',
      color: 'from-blue-400 to-cyan-500',
      certificateUrl: '/certificates/Raghav Tiwari (5).pdf',
      credentialId: '#13 - 2024 - 3665 '
    },
    {
      id: 7,
      title: 'C++ Programming',
      issuer: 'LinuxWorld',
      date: '30 Nov 2023 to 24 Jan 2024',
      category: 'Language',
      description: 'Completed a certified training program from LinuxWorld Informatics Pvt. Ltd., an authorized Red Hat Training & Examination Partner. The program focused on hands-on practical sessions and real-time project implementation under expert guidance.',
      color: 'from-fuchsia-400 to-pink-500',
      certificateUrl: '/certificates/Raghav Tiwari (6).pdf',
      credentialId: '#13 - 2024 - 3649 '
    },
    {
      id: 8,
      title: 'Data Structures & Algorithms (DSA) Training',
      issuer: 'LinuxWorld',
      date: '31 jan 2024 to 04 May 2024',
      category: 'DSA',
      description: 'Completed a certified training program from LinuxWorld Informatics Pvt. Ltd., an authorized Red Hat Training & Examination Partner. The program focused on hands-on practical sessions and real-time project implementation under expert guidance.',
      color: 'from-emerald-400 to-lime-500',
      certificateUrl: '/certificates/Raghav Tiwari (7).pdf',
      credentialId: '#13 - 2024 - 3617'
    },
    {
      id: 9,
      title: 'Machine Learning Training',
      issuer: 'LinuxWorld',
      date: '15 May 2024 to 14 Jun 2024',
      category: 'AI/ML',
      description: 'Completed a certified training program from LinuxWorld Informatics Pvt. Ltd., an authorized Red Hat Training & Examination Partner. The program focused on hands-on practical sessions and real-time project implementation under expert guidance.',
      color: 'from-orange-400 to-yellow-500',
      certificateUrl: '/certificates/Raghav Tiwari (8).pdf',
      credentialId: '#13 - 2024 - 3553'
    },
    {
      id: 10,
      title: 'Amazon EKS (Elastic Kubernetes Service) Training',
      issuer: 'LinuxWorld',
      date: '01 Oct 2024 to 04 Oct 2024',
      category: 'AWS',
      description: 'Completed a certified training program from LinuxWorld Informatics Pvt. Ltd., an authorized Red Hat Training & Examination Partner. The program focused on hands-on practical sessions and real-time project implementation under expert guidance.',
      color: 'from-teal-400 to-cyan-500',
      certificateUrl: '/certificates/Raghav Tiwari (9).pdf',
      credentialId: '#13 - 2024 - 3569 '
    },
    {
      id: 11,
      title: 'MultiCloud Training',
      issuer: 'LinuxWorld',
      date: '15 Feb 2024 to 18 Apr 2024',
      category: 'Cloud',
      description: 'Completed a certified training program from LinuxWorld Informatics Pvt. Ltd., an authorized Red Hat Training & Examination Partner. The program focused on hands-on practical sessions and real-time project implementation under expert guidance.',
      color: 'from-indigo-400 to-blue-500',
      certificateUrl: '/certificates/Raghav Tiwari (10).pdf',
      credentialId: '#13 - 2024 - 3521 '
    },
    {
      id: 12,
      title: 'Docker Certified Associate Training',
      issuer: 'LinuxWorld',
      date: '15 Oct 2023 to 20 Jan 2024',
      category: 'Docker',
      description: 'Completed a certified training program from LinuxWorld Informatics Pvt. Ltd., an authorized Red Hat Training & Examination Partner. The program focused on hands-on practical sessions and real-time project implementation under expert guidance.',
      color: 'from-red-400 to-yellow-500',
      certificateUrl: '/certificates/Raghav Tiwari (11).pdf',
      credentialId: '#13 - 2024 - 3489 '
    },
    {
      id: 13,
      title: 'Python Core + Advanced Training',
      issuer: 'LinuxWorld',
      date: '17 Oct 2023 to 24 Jan 2024',
      category: 'Python',
      description: 'Completed a certified training program from LinuxWorld Informatics Pvt. Ltd., an authorized Red Hat Training & Examination Partner. The program focused on hands-on practical sessions and real-time project implementation under expert guidance.',
      color: 'from-blue-400 to-violet-500',
      certificateUrl: '/certificates/Raghav Tiwari (12).pdf',
      credentialId: '#13 - 2024 - 3505 '
    },
    {
      id: 14,
      title: 'Complete Bash Shell Scripting with Real Use Cases Training',
      issuer: 'LinuxWorld',
      date: '30 Jan 2024 to 18 Feb 2024',
      category: 'Scripting',
      description: 'Completed a certified training program from LinuxWorld Informatics Pvt. Ltd., an authorized Red Hat Training & Examination Partner. The program focused on hands-on practical sessions and real-time project implementation under expert guidance.',
      color: 'from-lime-400 to-green-500',
      certificateUrl: '/certificates/Raghav Tiwari (14).pdf',
      credentialId: '#13 - 2024 - 3473'
    },
    {
      id: 15,
      title: 'GITLab-CI/CD Pipeline Training',
      issuer: 'LinuxWorld',
      date: '18 Mar 2024 to 18 May 2024',
      category: 'CI/CD',
      description: 'Completed a certified training program from LinuxWorld Informatics Pvt. Ltd., an authorized Red Hat Training & Examination Partner. The program focused on hands-on practical sessions and real-time project implementation under expert guidance.',
      color: 'from-amber-400 to-orange-500',
      certificateUrl: '/certificates/Raghav Tiwari (15).pdf',
      credentialId: '#13 - 2025 - 3457 '
    },
    {
      id: 16,
      title: 'Managing Infrastructure using Terraform',
      issuer: 'LinuxWorld',
      date: '14 Apr 2024 to 2 Jun 2024',
      category: 'Terraform',
      description: 'Completed a certified training program from LinuxWorld Informatics Pvt. Ltd., an authorized Red Hat Training & Examination Partner. The program focused on hands-on practical sessions and real-time project implementation under expert guidance.',
      color: 'from-rose-400 to-pink-500',
      certificateUrl: '/certificates/Raghav Tiwari (16).pdf',
      credentialId: '#13 - 2024 - 3441 '
    },
    {
      id: 17,
      title: 'Mastering Jenkins-CI/CD using Pipelines',
      issuer: 'LinuxWorld',
      date: '2 Mar 2024 to 17 Mar 2024',
      category: 'Jenkins',
      description: 'Completed a certified training program from LinuxWorld Informatics Pvt. Ltd., an authorized Red Hat Training & Examination Partner. The program focused on hands-on practical sessions and real-time project implementation under expert guidance.',
      color: 'from-sky-400 to-blue-500',
      certificateUrl: '/certificates/Raghav Tiwari (17).pdf',
      credentialId: '#13 - 2024 - 3425 '
    },
    {
      id: 18,
      title: 'OpenShift Foundation Training',
      issuer: 'LinuxWorld',
      date: '02 Mar 2025',
      category: 'OpenShift',
      description: 'Completed a certified training program from LinuxWorld Informatics Pvt. Ltd., an authorized Red Hat Training & Examination Partner. The program focused on hands-on practical sessions and real-time project implementation under expert guidance.',
      color: 'from-violet-400 to-fuchsia-500',
      certificateUrl: '/certificates/img.jpg',
      credentialId: 'LW-JPR-2025-3048'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % certifications.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [certifications.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certifications.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  const currentCert = certifications[currentSlide];

  return (
    <section id="certifications-section" className="py-20 px-4 relative overflow-hidden">
      {/* Python code typing background */}

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            🏅 Certifications
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Validated expertise through industry-recognized certifications
          </p>
        </div>

        {/* Slideshow */}
        <div className={`relative bg-gray-700 rounded-2xl overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'} group transition-all duration-300`} style={{ boxShadow: '0 4px 32px 0 rgba(255,255,255,0.18), 0 1.5px 8px 0 rgba(255,255,255,0.12)' }}>
          <div className="relative min-h-[320px] md:min-h-[380px]">
            <div className={`absolute inset-0 bg-gradient-to-r ${currentCert.color} opacity-20 transition-all duration-500`}></div>
            
            <div
              className="relative z-10 h-full flex items-start justify-center p-6 cursor-pointer group transition-all duration-300"
              onClick={() => window.open(currentCert.certificateUrl, '_blank', 'noopener,noreferrer')}
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') window.open(currentCert.certificateUrl, '_blank', 'noopener,noreferrer'); }}
              role="button"
              aria-label={`Open certificate: ${currentCert.title}`}
              style={{ borderRadius: '1rem', transition: 'border-color 0.3s' }}
            >
              <div className="text-center group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300 pt-4">
                <div className={`inline-block w-20 h-20 rounded-full bg-gradient-to-r ${currentCert.color} mb-4 animate-pulse relative group/inner flex items-center justify-center mx-auto`}>
                  <Award className="w-10 h-10 text-white z-10" />
                  <span className="pointer-events-none absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-flicker"></span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{currentCert.title}</h3>
                <p className="text-lg text-white mb-2">{currentCert.issuer}</p>
                <p className="text-base text-white mb-3">{currentCert.date}</p>
                
                <div className={`inline-block bg-gradient-to-r ${currentCert.color} px-4 py-2 rounded-full mb-3 shadow-lg border border-white border-opacity-30`}>
                  <span className="text-white font-bold text-sm">{currentCert.category}</span>
                </div>
                
                <p className="text-white max-w-2xl mx-auto text-sm leading-relaxed">{currentCert.description}</p>
                <p className="text-xs text-white mt-2">Credential ID: {currentCert.credentialId}</p>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowModal(true)}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Eye className="w-5 h-5" />
              View All Certifications
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-[99999] p-4">
            <div className="bg-gray-800/95 backdrop-blur-md rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden shadow-2xl border border-gray-700 relative z-[99999]">
              <div className="sticky top-0 bg-gray-800/95 backdrop-blur-md p-6 border-b border-gray-700 flex justify-between items-center z-10">
                <h3 className="text-2xl font-bold text-white">All Certifications</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-gray-700 rounded-full transition-colors duration-300"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto max-h-[calc(80vh-120px)] relative z-10">
                {certifications.map((cert) => (
                  <a
                    key={cert.id}
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group block bg-gray-600 rounded-xl p-6 hover:bg-gray-500 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gradient-to-r ${cert.color} relative overflow-hidden`}
                    style={{ textDecoration: 'none', borderRadius: '0.75rem', transition: 'border-color 0.3s', boxShadow: '0 4px 32px 0 rgba(255,255,255,0.18), 0 1.5px 8px 0 rgba(255,255,255,0.12)' }}
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${cert.color} mb-3 inline-block relative group/inner flex items-center justify-center mx-auto`}>
                      <Award className="w-5 h-5 text-white z-10" />
                      <span className="pointer-events-none absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-flicker"></span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">{cert.title}</h4>
                    <p className="text-white text-sm mb-1">{cert.issuer}</p>
                    <p className="text-white text-xs mb-2">{cert.date}</p>
                    <div className={`inline-block bg-gradient-to-r ${cert.color} px-3 py-1 rounded-full mb-2 shadow-md border border-white border-opacity-30`}>
                      <span className="text-white font-bold text-xs">{cert.category}</span>
                    </div>
                    <p className="text-white text-xs leading-relaxed">{cert.description}</p>
                    <p className="text-xs text-white mt-1">Credential ID: {cert.credentialId}</p>
                  </a>
                ))}
              </div>
              
              {/* Bottom Spacing */}
              <div className="h-8 bg-gray-800/95 backdrop-blur-md"></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;