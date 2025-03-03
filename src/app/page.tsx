'use client';
import Image from "next/image";
import AboutUs from "./componenets/about"
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Benefits from "./componenets/benefits"
import Contact from "./componenets/Contact";
import Footer from "./componenets/Fotter";

export default function Home() {
  const orbRef = useRef(null);
  const imgRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(orbRef.current,
      {
        filter: 'blur(0rem)'
      },
      {
        filter: 'blur(3rem)',
        duration: 1.5,
        ease: 'power2.out'
      }
    );

    gsap.fromTo(imgRef.current,
      {
        scale: 0.9,
        opacity: 0,
        transformOrigin: 'center center',
        rotation: 0
      },
      {
        scale: 2,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        transformOrigin: 'center center'
      }
    );

    const handleScroll = () => {
      if (orbRef.current) {
        gsap.to(orbRef.current, {
          y: window.scrollY,
          ease: "power1.out",
          duration: 0.5,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    
  }, []);

  const toggleNav = () => {
    setIsNavOpen(prev => !prev);
    const navOverlay = document.querySelector('.nav-overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!isNavOpen) {
      gsap.to(navOverlay, {
        y: 0,
        duration: 0.8,
        ease: 'power3.inOut'
      });
      gsap.to(navLinks, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.3
      });
    } else {
      gsap.to(navOverlay, {
        y: '-100%',
        duration: 0.8,
        ease: 'power3.inOut'
      });
      gsap.to(navLinks, {
        y: 50,
        opacity: 0,
        duration: 0.3
      });
    }
  };

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2) + (element.clientHeight / 2);
      window.scrollTo({ top: offset, behavior: 'smooth' });
      toggleNav(); // Close the navbar after clicking
    }
  };

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }
  }, [isNavOpen]);

  return (
    <>
    <section>
    <div 
  className={`nav-overlay fixed inset-0 bg-[#0f111a] z-50 transform ${isNavOpen ? 'translate-y-0 pointer-events-auto' : '-translate-y-full pointer-events-none'}`}
>
        <button 
          onClick={toggleNav}
          className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors pointer"
        >
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="h-screen flex flex-col justify-center items-center gap-8 p-4 md:p-8">
          <div className="nav-link opacity-0 translate-y-[50px]">
            <h2 className="text-3xl md:text-5xl birds text-white hover:text-gray-300 cursor-pointer" onClick={() => handleNavClick('Home')}>Home</h2>
          </div>
          <div className="nav-link opacity-0 translate-y-[50px]">
            <h2 className="text-3xl md:text-5xl birds text-white hover:text-gray-300 cursor-pointer" onClick={() => handleNavClick('About')}>About</h2>
          </div>
          <div className="nav-link opacity-0 translate-y-[50px]">
            <h2 className="text-3xl md:text-5xl birds text-white hover:text-gray-300 cursor-pointer" onClick={() => handleNavClick('Process')}>Process</h2>
          </div>
          <div className="nav-link opacity-0 translate-y-[50px]">
            <h2 className="text-3xl md:text-5xl birds text-white hover:text-gray-300 cursor-pointer" onClick={() => handleNavClick('Contact')}>Contact</h2>
          </div>
        </div>
      </div>
    
      <div className="noise"></div>
      <div className="home_hero-bg w-full relative min-h-screen h-[150vh]" id="Home">
        <div className="absolute w-full inset-0 z-10 ">
          <div className="sm:h-[100vh] h-[100dvh] flex flex-col justify-between p-4 md:p-8">

          <div className="w-full flex justify-end">
              <div onClick={toggleNav}  className="relative flex items-center gap-4 w-fit z-10 cursor-pointer sm:hover:opacity-75 sm:transition-opacity pointer-events-auto">
                <h3 className="text-white">Navbar</h3>
                <Image src="/imgs/nav.png" width={20} height={8} alt="nav" className={`w-[20px] h-[8px] transition-transform duration-300 ${isNavOpen ? 'rotate-90' : ''}`}/>
              </div>
          </div>
          <div>

          <div className="flex gap-4">
            <h1 className="text-[28px] md:text-5xl font-bold mb-4 text-white birds">✦ hashim el hichami</h1>
          </div>
          <p className="text-[14px] md:text-[16px] mb-8 max-w-2xl text-white">
          Full Stack Developer, UI/UX Designer, and Software Engineer—and let me tell you, I don&apos;t just build websites, I maximize their conversion rates.
          </p>

          <a href="#Contact" className="w-fit h-fit bg-white px-4 py-2 mt-4 rounded-[5px] gap-[8px] flex items-center birds hover:bg-gray-200 transition duration-300">
            <p className="text-black font-semibold">Contact Me</p>
            <div className="w-[24px] h-[24px] flex justify-center items-center bg-black rounded-[5px]">
              <Image src="/imgs/arrow-r.png" height={8} width={12} alt=""/>
            </div>
          </a>
          </div>
          <div className="w-full flex flex-col gap-[8px] justify-end items-center">
            <p className="text-[14px] md:text-[16px] text-white">Scroll Down For More</p>
            <Image src="/down-arrow.svg" height={53} width={20} alt="" ></Image>
          </div>
          </div>
          <AboutUs/>
        </div>

        <div className="home_hero-camera relative h-screen">
          <div ref={orbRef} className="hero-orbing fixed left-[50%] transform" style={{filter: 'blur(0rem)', opacity: '1', visibility: 'inherit'}}>
          <Image ref={imgRef} loading="lazy" src="https://cdn.prod.website-files.com/67af51ad91d062ee8ef52137/67af51ad91d062ee8ef52187_hero-orb.svg" alt="" className="img-orb opacity-0" width={600} height={300} style={{width: '50%', maxWidth: '600px'}} />
            <div className="noise-overlay"></div>
          </div>
        </div>
      </div>
    </section>
    <Benefits />
    <Contact />
    <Footer />
    </>
  );
}