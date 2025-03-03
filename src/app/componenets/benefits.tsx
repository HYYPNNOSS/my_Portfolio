'use client';
import Image from "next/image";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function Benefits(){
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(contentRef.current,
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                    end: "bottom top",
                    toggleActions: "play reverse play reverse"
                }
            }
        );

    }, []);

    return(
        <>
        <section ref={sectionRef} className="min-h-[100vh] bg-[#f6f6f6] w-full p-4 md:p-8 lg:p-[64px]" id="Process">
            <div ref={contentRef} className=" mx-auto">
                <h1 className="text-black text-[24px] sm:text-[32px] md:text-5xl font-bold mb-4 birds text-center">How Can I Help You ?</h1>
                <a href="#Contact" className="w-fit h-fit bg-black px-4 py-2 mt-4 mb-8 rounded-[5px] gap-[8px] flex items-center birds mx-auto transition-transform duration-300 hover:scale-105">
                    <p className="text-white font-semibold">Contact Me</p>
                    <div className="w-[24px] h-[24px] flex justify-center items-center bg-white rounded-[5px]">
                        <Image src="/imgs/arrow-r-black.png" height={8} width={12} alt=""/>
                    </div>
                </a>

                <div className="border-t-2 text-black py-8 border-b-2 flex flex-col  justify-between border-black w-full">
                <div className="w-full">

                    <h3 className="text-black text-[24px] sm:text-[28px] md:text-[32px] font-bold mb-4 birds">
                        ✦ Understand Goals & Examination ✦
                    </h3>
                </div>
                    <div className="w-full flex justify-end">

                    <div className="w-full md:w-[450px] xl:w-[650px] text-[16px] md:text-[18px] font-semibold text-black">
                        <ul>
                            <li>
                                <strong>Align the website with your goals and audience</strong>, fixing pain points for better engagement and conversions. (<strong>Up to 30% higher engagement</strong>.)
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>

                <div className="text-black border-b-2 flex flex-col  py-8 justify-between border-black w-full">
                <div className="w-full">

                    <h3 className="text-black text-[24px] sm:text-[28px] md:text-[32px] font-bold mb-4 birds">
                        ✦ Design Engaging UX/UI ✦
                    </h3>
                </div>
                    <div className="w-full flex justify-end">

                    <div className="w-full md:w-[450px] xl:w-[650px] text-[16px] md:text-[18px] font-semibold text-black">
                        <ul>
                            <li>
                                <strong>Create intuitive designs that guide users to take action</strong>, boosting conversions. (Can <strong>increase conversions by 200%</strong>.)
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>

                <div className="text-black border-b-2 flex flex-col  py-8 justify-between border-black w-full">
                <div className="w-full">

                    <h3 className="text-black text-[24px] sm:text-[28px] md:text-[32px] font-bold mb-4 birds">
                        ✦ Develop & Optimize for Speed ✦
                    </h3>
                </div>
                <div className="w-full flex justify-end">

                    <div className="w-full md:w-[450px] xl:w-[650px] text-[16px] md:text-[18px] font-semibold text-black">
                        <ul>
                            <li>
                                <strong>Use clean code and fast assets</strong> to improve user experience and SEO, with tracking tools for ongoing optimization. (<strong>Speeds up loading by 50%, reducing bounce rates by 30%</strong>.)
                            </li>
                        </ul>
                    </div>
                </div>
                </div>

                <div className="text-black border-b-2 flex flex-col  py-8 justify-between border-black w-full">
                    <div className="w-full">

                    <h3 className="text-black text-[24px] sm:text-[28px] md:text-[32px] font-bold mb-4 birds">
                        ✦ Content & SEO Strategy ✦
                    </h3>
                    </div>
                    <div className="w-full flex justify-end">

                    <div className=" w-full md:w-[450px] xl:w-[650px] text-[16px] md:text-[18px] font-semibold text-black">
                        <ul>
                            <li>
                                <strong>Create engaging content and optimize for SEO</strong> to drive traffic and improve user retention. (<strong>SEO can increase organic traffic by 40%</strong>.)
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
};

export default Benefits;