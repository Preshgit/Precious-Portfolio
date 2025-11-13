'use client';

import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Mail,
  Linkedin,
  Github,
  ChevronDown,
  Briefcase,
  GraduationCap,
  Sparkles,
  Heart,
  Instagram,
} from 'lucide-react';
import ContactForm from './components/ContactForm';
import PortfolioSection from './components/PortfolioSection';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = [
        'home',
        'about',
        'work',
        'portfolio',
        'education',
        'contact',
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  const webProjects = [
    {
      title: 'Business Landing Page',
      category: 'Web Development' as const,
      description: 'Full-stack online store with payment integration',
      color: 'bg-blue-100',
      liveLink: 'https://thom-ark.vercel.app/',
      image: '/thomark.png', // optional
    },
    {
      title: 'Portfolio Website',
      category: 'Web Development' as const,
      description: 'Modern responsive portfolio with animations',
      color: 'bg-purple-100',
      liveLink: 'https://oyeyemi-deborah-portfolio.vercel.app/about',
      image: '/dpp.png', // optional
    },
    {
      title: 'Business Dashboard',
      category: 'Web Development' as const,
      description: 'Analytics dashboard with real-time data',
      color: 'bg-green-100',
      liveLink: 'https://alx-capstone-project-woad.vercel.app/',
      image: '/art.png',
    },
  ];

  const graphicProjects = [
    {
      title: 'Brand Identity',
      category: 'Graphic Design' as const,
      description: 'Complete visual identity for tech startup',
      color: 'bg-pink-100',
      image: '/letterhead.png', // optional
    },
    {
      title: 'Social Media Designs',
      category: 'Graphic Design' as const,
      description: 'Instagram templates and story designs',
      color: 'bg-yellow-100',
      image: '/1.png',
    },
    // Add more graphic projects...
  ];

  const projects = [
    {
      title: 'Brand Identity Design',
      category: 'Graphic Design',
      description: 'Complete visual identity system for modern startups',
      color: 'bg-yellow-100',
    },
    {
      title: 'E-commerce Platform',
      category: 'Web Design',
      description: 'Responsive online store with seamless UX',
      color: 'bg-pink-100',
    },
    {
      title: 'Social Media Campaign',
      category: 'Graphic Design',
      description: 'Engaging visual content for brand awareness',
      color: 'bg-purple-100',
    },
    {
      title: 'Corporate Website',
      category: 'Web Design',
      description: 'Professional site with modern animations',
      color: 'bg-blue-100',
    },
  ];

  const skills = [
    'Executive Support & Administrative Management',
    'Calendar & Schedule Optimization',
    'Design & Branding (Canva, capcut, Figma)',
    'Problem Solving & Critical Thinking',
    'Project Coordination & Workflow Tracking',
    'Documentation & File Management',
    'Stakeholder & Client Communication',
    'Email & Communication Management',
    'Meeting Coordination & Minutes Taking',
    'Event Planning & Team Coordination',
    'Creative Thinking & Initiative',
    'Technical Skills (HTML, CSS, React.js)',
    'Strong Work Ethic & Integrity',
    'Adaptability & Continuous Learning',
  ];

  return (
    <div className='bg-white text-gray-900 overflow-x-hidden'>
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className='max-w-7xl mx-auto px-6 flex justify-between items-center'>
          <div className='text-2xl font-bold'>
            <span className='text-gray-900'>P</span>
            <span className='text-yellow-400'>O</span>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex space-x-8'>
            {['Home', 'About', 'Work', 'Portfolio', 'Education', 'Contact'].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors hover:text-yellow-400 ${
                    activeSection === item.toLowerCase()
                      ? 'text-yellow-400 font-semibold'
                      : ''
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden bg-white border-t mt-4 py-4 px-6 space-y-4 animate-in slide-in-from-top'>
            {['Home', 'About', 'Work', 'Portfolio', 'Education', 'Contact'].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className='block w-full text-left py-2 hover:text-yellow-400 transition-colors'
                >
                  {item}
                </button>
              )
            )}
          </div>
        )}
      </nav>

      {/* Hero Section - Magazine Style */}
      <section
        id='home'
        className='min-h-screen relative overflow-hidden pt-20'
      >
        <div className='relative max-w-7xl mx-auto px-6 md:py-12 lg:py-20 flex flex-col md:flex-row items-center justify-between min-h-screen'>
          {/* Text Content */}
          <div className='lg:w-1/2 z-10 space-y-6 animate-in fade-in slide-in-from-left duration-1000'>
            <div className='inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-bounce'>
              ✨ Creative Professional
            </div>

            <h1 className='text-6xl lg:text-8xl font-black leading-none'>
              <span className='block text-gray-900'>Precious</span>
              <span className='block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500'>
                Omotosho
              </span>
            </h1>

            <p className='text-xl lg:text-2xl text-gray-600 max-w-lg'>
              Executive Assistant | Creative Designer | Problem Solver
            </p>

            <div className='flex flex-wrap gap-4 pt-4'>
              <button
                onClick={() => scrollToSection('portfolio')}
                className='bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg'
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className='bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg'
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className='lg:w-1/2 mt-12 lg:mt-0 animate-in fade-in slide-in-from-right duration-1000'>
            <div className='relative'>
              {/* Outer glow effect */}
              <div className='absolute -inset-4 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-3xl blur-2xl opacity-30 animate-pulse'></div>

              {/* Image container */}
              <div className='relative bg-gradient-to-br from-yellow-200 to-pink-200 rounded-3xl aspect-[3/4] h-96 sm:h-[28rem] lg:w-full shadow-2xl overflow-hidden'>
                <img
                  src='/mypics3.png'
                  alt='My Picture'
                  className='absolute inset-0 w-full h-full object-cover transform scale-x-[-1] lg:w-full lg:pt-8'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <ChevronDown size={32} className='text-yellow-400' />
        </div>
      </section>

      {/* About Section */}
      <section
        id='about'
        className='py-20 bg-gradient-to-br from-yellow-50 to-pink-50'
      >
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-5xl lg:text-6xl font-black mb-0 lg:mb-4'>
            About <span className='text-yellow-400'>Me</span>
          </h2>
          <div className='flex flex-col lg:flex-row gap-4 lg:gap-12 items-center lg:items-stretch min-h-[80vh]'>
            {/* Photo Placeholder */}

            <div className='lg:w-1/3 animate-in fade-in slide-in-from-left duration-700'>
              <div className='relative bg-gradient-to-br from-yellow-300 to-pink-300 rounded-3xl aspect-square shadow-xl overflow-hidden flex-1'>
                <img
                  src='/mypics.jpg'
                  alt='My Picture'
                  className='absolute inset-0 w-full h-full object-cover object-top'
                />
              </div>
            </div>

            {/* About Content */}
            <div className='lg:w-2/3 animate-in fade-in slide-in-from-right duration-700'>
              <div className='space-y-4 text-lg text-gray-700 leading-relaxed'>
                <p>
                  Hello! I'm <strong>Precious Omotosho</strong>, a passionate
                  and purpose-driven creative professional with a heart for
                  excellence, service, and meaningful impact. My journey began
                  in the world of <strong>Architecture Design</strong>, where I
                  earned both my first and second degrees. Studying architecture
                  didn’t just shape how I think about structure and aesthetics,
                  it laid the foundation for my creative career in{' '}
                  <strong>web and graphic design</strong>, helping me see design
                  as both art and problem-solving.
                </p>

                <p>
                  Beyond my creative background, I’ve had the privilege of
                  serving as an <strong>Executive Assistant</strong> to the
                  proprietress of an international school for over five years.
                  In this role, I managed high-level administrative duties,
                  communications, and project coordination, ensuring efficiency,
                  structure, and grace in every detail. What brings me the most
                  joy is knowing that my work, whether in support or design,
                  creates visible impact for the people and organizations I
                  serve.
                </p>

                <p>
                  I thrive at the intersection of{' '}
                  <strong>organization, creativity, and service</strong>.
                  Whether I’m supporting a visionary leader, designing a digital
                  experience, or coordinating a project from idea to execution,
                  I approach every task with dedication, integrity, and genuine
                  enthusiasm. My faith deeply influences my values and work
                  ethic, guiding me to serve with excellence and compassion in
                  all I do.
                </p>

                <p>
                  When I’m not working, you’ll likely find me exploring new
                  design trends, learning new tools, or spending time with loved
                  ones. I believe creativity and professionalism go hand in hand
                  , and I’m always excited to bring both into every opportunity
                  to grow, contribute, and make a difference.
                </p>
              </div>

              <div className='mt-8 flex gap-4'>
                <div className='bg-white p-6 rounded-2xl shadow-lg flex-1'>
                  <div className='text-4xl font-black text-yellow-400 mb-2'>
                    5+
                  </div>
                  <div className='text-gray-600'>Years Experience</div>
                </div>
                <div className='bg-white p-6 rounded-2xl shadow-lg flex-1'>
                  <div className='text-4xl font-black text-pink-400 mb-2'>
                    50+
                  </div>
                  <div className='text-gray-600'>Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id='work' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16 animate-in fade-in duration-700'>
            <h2 className='text-5xl font-black mb-4'>
              Work & <span className='text-yellow-400'>Experience</span>
            </h2>
            <p className='text-xl text-gray-600'>
              Supporting excellence through organization and creativity
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {/* Experience Card */}
            <div className='bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'>
              <Briefcase className='text-yellow-400 mb-4' size={40} />
              <h3 className='text-2xl font-bold mb-2'>Executive Assistant</h3>

              <p className='text-gray-600 mb-4'>
                Dedicated Executive Assistant with 5+ years’ experience
                providing high-level administrative, creative, and technical
                support to leadership teams and business owners. Skilled in
                maintaining structure, managing communication, and ensuring
                smooth operations behind the scenes. I bring a unique blend of
                professionalism, creativity, and tech-savvy problem-solving to
                every role I handle.
              </p>

              <ul className='space-y-2 text-gray-700'>
                <li>
                  • Efficient calendar and schedule optimization to maximize
                  productivity
                </li>
                <li>
                  • Seamless meeting coordination, minute-taking, and follow-up
                  tracking
                </li>
                <li>
                  • Expert handling of travel planning, logistics, and event
                  arrangements
                </li>
                <li>
                  • Strong documentation, data organization, and digital filing
                  systems management
                </li>
                <li>
                  • Effective communication across teams, clients, and external
                  partners
                </li>
                <li>
                  • Proven ability to manage multiple projects and priorities
                  with attention to detail
                </li>
                <li>
                  • Experience supporting business pitches, creative projects,
                  and brand partnerships
                </li>
                <li>
                  • Adept at using digital tools to streamline operations and
                  enhance productivity
                </li>
              </ul>
            </div>

            {/* Skills Card */}
            <div className='bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-3xl shadow-lg'>
              <h3 className='text-2xl font-bold mb-6'>Key Skills</h3>
              <div className='flex flex-wrap gap-3'>
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className='bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700 shadow hover:shadow-md transition-all transform hover:scale-105 cursor-default'
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection
        webProjects={webProjects}
        graphicProjects={graphicProjects}
      />
      {/* <section
        id='portfolio'
        className='py-20 bg-gradient-to-br from-purple-50 to-blue-50'
      >
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16 animate-in fade-in duration-700'>
            <h2 className='text-5xl font-black mb-4'>
              My <span className='text-yellow-400'>Portfolio</span>
            </h2>
            <p className='text-xl text-gray-600'>
              A selection of the works in which I have carried out from the
              creative side, both as a designer and developer.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {projects.map((project, i) => (
              <div
                key={i}
                className='group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer'
              >
                <div
                  className={`${project.color} h-64 flex items-center justify-center relative overflow-hidden`}
                >
                  <div className='absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  <div className='text-6xl font-black text-white/20 group-hover:scale-110 transition-transform duration-300'>
                    {project.category === 'Graphic Design' ? 'GD' : 'WD'}
                  </div>
                </div>
                <div className='p-6'>
                  <div className='text-sm font-semibold text-yellow-400 mb-2'>
                    {project.category}
                  </div>
                  <h3 className='text-2xl font-bold mb-2'>{project.title}</h3>
                  <p className='text-gray-600'>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Education Section */}
      <section id='education' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16 animate-in fade-in duration-700'>
            <h2 className='text-5xl font-black mb-4'>
              Education &{' '}
              <span className='text-yellow-400'>Certifications</span>
            </h2>
          </div>

          <div className='max-w-3xl mx-auto space-y-6'>
            {/* Bachelor's Degree */}
            <div className='bg-gradient-to-r from-yellow-50 to-pink-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all'>
              <GraduationCap className='text-yellow-400 mb-4' size={40} />
              <h3 className='text-2xl font-bold mb-2'>Bachelor’s Degree</h3>
              <p className='text-gray-600 mb-2'>
                Obafemi Awolowo University (OAU)
              </p>
              <p className='text-gray-700'>BSc in Architecture</p>
            </div>

            {/* Master's Degree */}
            <div className='bg-gradient-to-r from-pink-50 to-yellow-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all'>
              <GraduationCap className='text-pink-400 mb-4' size={40} />
              <h3 className='text-2xl font-bold mb-2'>Master’s Degree</h3>
              <p className='text-gray-600 mb-2'>
                University of Ilorin (UNILORIN)
              </p>
              <p className='text-gray-700'>Master’s in Design</p>
            </div>

            <div className='bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all'>
              <h3 className='text-2xl font-bold mb-4'>Certifications</h3>
              <ul className='space-y-3 text-gray-700'>
                <li className='flex items-start'>
                  <span className='text-yellow-400 mr-2'>•</span>
                  <span>Certified Executive Assistant Professional</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-yellow-400 mr-2'>•</span>
                  <span>Graphic Design Specialization</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-yellow-400 mr-2'>•</span>
                  <span>Web Design & Development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id='contact'
        className='py-20 bg-gradient-to-br from-yellow-100 to-pink-100'
      >
        <div className='max-w-4xl mx-auto px-6'>
          <div className='text-center mb-12 animate-in fade-in duration-700'>
            <h2 className='text-5xl font-black mb-4'>
              Let's <span className='text-yellow-400'>Connect!</span>
            </h2>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-12'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <p className='text-lg mb-4'>
            Designed with <span className='text-yellow-400'>❤️</span> by
            Precious Omotosho
          </p>
          <p className='text-gray-400'>© 2025 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
