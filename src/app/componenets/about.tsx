'use client';
import Image from "next/image";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function AboutUs(){
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                end: "bottom center", 
                toggleActions: "play reverse play reverse",
            }
        });

        tl.fromTo(titleRef.current,
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            }
        )
        .fromTo(textRef.current,
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            },
            "-=0.6"
        );

    }, []);

    return(
        <>
        <section ref={sectionRef} className="min-h-[50vh] flex flex-col justify-center p-4 md:p-8 lg:p-[64px]">
            <div className="flex flex-col justify-center items-center h-full">
                <div ref={titleRef} className="w-full text-[24px] sm:text-[28px] md:text-[32px] lg:text-5xl font-bold mb-4 text-white birds opacity-0 text-center">
                    <h1>About Me ✦</h1>
                </div>
                <div className="w-full flex justify-center">
                    <p ref={textRef} className="w-full max-w-[450px] opacity-0 text-center">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </section>
        </>
    );
}

export default AboutUs;