import React from 'react';

const ContactUs = () => {
    const handleForm = event => {
        event.preventDefault()
        const form = event.target;
        form.reset()
    }
    return (
        <div>
            <section className="rounded-md py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl text-center mb-8 font-bold">Contact Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
                            <p className="text-gray-600">Have any questions or inquiries? We'd love to hear from you!</p>
                            <p className="text-gray-600">Reach out to us through the following channels:</p>
                            <ul className="mt-4">
                                <li className="flex items-center mb-2">
                                    <svg className="w-5 h-5 mr-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                    </svg>
                                    <span>Barcelona, Spain</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <svg className="w-5 h-5 mr-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                    </svg>
                                    <span>lamasia@gmail.com</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="12" cy="5" r="1"></circle>
                                        <circle cx="12" cy="19" r="1"></circle>
                                    </svg>
                                    <span>+123 456 7890</span>
                                </li>
                            </ul>
                        </div>
                        <div data-aos="fade-up">
                            <h3 className="text-xl font-semibold mb-2">Send us a Message</h3>
                            <form onClick={handleForm} className="max-w-md">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">Your Name</label>
                                    <input className="border border-gray-300 rounded-md py-2 px-3 w-full" type="text" id="name" name="name" required />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">Your Email</label>
                                    <input className="border border-gray-300 rounded-md py-2 px-3 w-full" type="email" id="email" name="email" required />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">Message</label>
                                    <textarea className="border border-gray-300 rounded-md py-2 px-3 w-full h-32" id="message" name="message" required></textarea>
                                </div>
                                <button className="btn bg-gradient-to-r from-red-600 to-indigo-700 text-white font-semibold py-2 px-4 rounded-md" type='submit'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;