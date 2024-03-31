import React, { useEffect, useRef } from 'react';

const Contact = () => {
    const contactRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fade-in-up");
                    } else {
                        entry.target.classList.remove("animate-fade-in-up");
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }
        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }
        };
    }, []);

    return (
        <div id="Contactme" ref={contactRef} className="contact-container">
            <h1 >Get In Touch</h1>
            <div className="contact-content bg-white shadow-md rounded px-8 pt-6 pb-8">
                <div  className="flex flex-wrap justify-between items-center">
                    <div className="contact-image w-full lg:w-1/2">
                        <img src="/contactpagelogo.png" alt="Contact" className="w-full h-auto mb-8 lg:mb-0" />
                    </div>
                    <form id="contactform" >
                        <div className="w-full lg:w-1/2">
                        </div>
                        <div className="mb-3" >
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                        </div>
                        <div >
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                        </div>
                        <div >
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                Phone
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="123-456-7890" />
                        </div>
                        <div >
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message" rows="3"></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
