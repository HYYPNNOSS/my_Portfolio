'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';

function Contact(){
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [statusMessage, setStatusMessage] = useState('');

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const templateParams = {
            to_name: formData.name,
            to_email: formData.email,
            message: `Hello ${formData.name},\n\nEmail: ${formData.email}\n\n${formData.message}\n`
        };
        emailjs.send('service_8nhmekc', 'template_smtdl9j', templateParams, 'xDm_k7NQ6v3-jqY8Z')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatusMessage('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            }, (err) => {
                console.error('FAILED...', err);
                setStatusMessage('Failed to send message. Please try again.');
            });
    };

    return(
        <>
            <section ref={sectionRef} className="min-h-[100vh] flex justify-center items-center bg-[#f6f6f6] w-full p-4 md:p-8 lg:p-16" id="Contact">
                <div ref={contentRef} className="w-full mx-auto">
                    <h1 className="text-black text-[24px] sm:text-[32px] md:text-5xl font-bold mb-12 birds text-center">Let&apos;s Work Together ✦</h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-black text-xl md:text-2xl font-bold mb-4 birds">Get in Touch</h3>
                                <p className="text-gray-700">Have a project in mind? Let&apos;s create something amazing together.</p>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                    </div>
                                    <p className="text-black">hachim.dev@gmail.com</p>
                                </div>
                                
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                        </svg>
                                    </div>
                                    <p className="text-black">linkedin.com/in/hachim-dev</p>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name" 
                                    className="w-full text-black p-3 border-2 border-black rounded-lg bg-transparent focus:outline-none"
                                />
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email" 
                                    className="w-full text-black p-3 border-2 border-black rounded-lg bg-transparent focus:outline-none"
                                />
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message" 
                                    rows={6}
                                    className="w-full text-black p-3 border-2 border-black rounded-lg bg-transparent focus:outline-none"
                                ></textarea>
                            </div>
                            
                            <button type="submit" className="w-full md:w-fit h-fit bg-black px-6 py-3 rounded-lg text-white birds hover:bg-gray-900 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                    {statusMessage && (
                        <div className={`mt-4 text-center ${statusMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                            {statusMessage}
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default Contact;