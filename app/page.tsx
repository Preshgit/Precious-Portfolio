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
    'Email & Communication Management',
    'Meeting Coordination & Minutes Taking',
    'Travel & Logistics Planning',
    'Project Coordination & Workflow Tracking',
    'Documentation & File Management',
    'Stakeholder & Client Communication',
    'Event Planning & Team Coordination',
    'Problem Solving & Critical Thinking',
    'Confidentiality & Discretion',
    'Time Management & Prioritization',
    'Creative Thinking & Initiative',
    'Basic Design & Branding (Canva, Figma)',
    'Social Media Coordination',
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
        {/* Background Text */}
        <div className='absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden'>
          <div className='text-[20vw] font-black text-yellow-100 opacity-50 animate-pulse'>
            CREATE
          </div>
        </div>

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
              <div className='relative bg-gradient-to-br from-yellow-200 to-pink-200 rounded-3xl aspect-[3/4] lg:aspect-[3/4] h-96 sm:h-[28rem] shadow-2xl overflow-hidden'>
                <img
                  src='/mypics3.png'
                  alt='My Picture'
                  className='absolute inset-0 w-full h-full object-cover object-top transform scale-x-[-1]'
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
          <div className='flex flex-col lg:flex-row gap-12 items-center'>
            {/* Photo Placeholder */}

            <div className='lg:w-1/3 animate-in fade-in slide-in-from-left duration-700'>
              <div className='relative bg-gradient-to-br from-yellow-300 to-pink-300 rounded-3xl aspect-square shadow-xl overflow-hidden'>
                <img
                  src='/mypics.jpg'
                  alt='My Picture'
                  className='absolute inset-0 w-full h-full object-cover object-top'
                />
              </div>
            </div>

            {/* About Content */}
            <div className='lg:w-2/3 animate-in fade-in slide-in-from-right duration-700'>
              <h2 className='text-5xl font-black mb-6'>
                About <span className='text-yellow-400'>Me</span>
              </h2>

              <div className='space-y-4 text-lg text-gray-700 leading-relaxed'>
                <p>
                  Hello! I'm Precious Omotosho, a passionate creative
                  professional who believes in bringing joy and excellence to
                  everything I do. My faith guides my work, and I'm driven by a
                  desire to make a positive impact through thoughtful design and
                  exceptional support.
                </p>
                <p>
                  With a background as an Executive Assistant and experience in
                  graphics design, web development and creative projects, I help
                  leaders and organizations achieve their goals while bringing
                  beautiful, functional solutions to life. I thrive on making
                  complex tasks simple and turning ideas into reality. I’m
                  passionate about meaningful work, learning every day, and
                  bringing energy, order, and a touch of creativity to
                  everything I do.
                </p>
                {/* <br /> I’m a creative and organized professional with a love for
                design, tech, and helping people bring their visions to life. */}
                <p>
                  When I'm not working, you'll find me exploring new design
                  trends, learning new skills, or spending time with loved ones.
                  I believe that creativity and professionalism go hand in hand,
                  and I'm always excited to take on new challenges!
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
              {/* <p className='text-gray-600 mb-4'>
                Supporting C-suite executives and leadership teams
              </p>
              <ul className='space-y-2 text-gray-700'>
                <li>• Calendar & schedule optimization</li>
                <li>• Meeting coordination & preparation</li>
                <li>• Travel arrangements & logistics</li>
                <li>• Project management support</li>
                <li>• Communication & correspondence</li>
              </ul> */}
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
      <section
        id='portfolio'
        className='py-20 bg-gradient-to-br from-purple-50 to-blue-50'
      >
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16 animate-in fade-in duration-700'>
            <h2 className='text-5xl font-black mb-4'>
              My <span className='text-yellow-400'>Portfolio</span>
            </h2>
            <p className='text-xl text-gray-600'>
              Creative projects that bring ideas to life
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
      </section>

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
            {/* <p className='text-xl text-gray-600'>
              Ready to bring your ideas to life? Let's chat!
            </p> */}
          </div>

          <div className='bg-white rounded-3xl shadow-2xl p-8 md:p-12'>
            <div className='space-y-6'>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Name
                  </label>
                  <input
                    type='text'
                    className='w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors'
                    placeholder='Your name'
                  />
                </div>
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    className='w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors'
                    placeholder='preciousdesk10@gmail.com'
                  />
                </div>
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Message
                </label>
                <textarea
                  rows={6}
                  className='w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors resize-none'
                  placeholder='Tell me about your project...'
                ></textarea>
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  alert('Thank you for your message! This is a demo form.');
                }}
                className='w-full bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg'
              >
                Send Message ✨
              </button>
            </div>
            <div className='flex justify-center gap-6 mt-8'>
              <a
                href='mailto:preciousdesk10@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 hover:text-yellow-400 transition-colors'
              >
                <Mail size={24} />
              </a>

              <a
                href='https://www.linkedin.com/in/precious-omotosho/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 hover:text-yellow-400 transition-colors'
              >
                <Linkedin size={24} />
              </a>

              <a
                href='https://github.com/Preshgit'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 hover:text-yellow-400 transition-colors'
              >
                <Github size={24} />
              </a>

              <a
                href='https://www.instagram.com/preciousomotoshot/' // 👈 replace with your actual Instagram username
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 hover:text-yellow-400 transition-colors'
              >
                <Instagram size={24} />
              </a>
            </div>

            {/* <div className='flex justify-center gap-6 mt-8'>
              <a
                href='mailto:preciousdesk10@gmail.com'
                className='text-gray-600 hover:text-yellow-400 transition-colors'
              >
                <Mail size={24} />
              </a>
              <a
                href='https://www.linkedin.com/in/precious-omotosho/'
                className='text-gray-600 hover:text-yellow-400 transition-colors'
              >
                <Linkedin size={24} />
              </a>
              <a
                href='https://github.com/Preshgit'
                className='text-gray-600 hover:text-yellow-400 transition-colors'
              >
                <Github size={24} />
              </a>
            </div> */}
          </div>
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
