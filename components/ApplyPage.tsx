
import React from 'react';
import { motion } from 'framer-motion';
import { APPLY_PAGE_DATA } from '../constants';

const ApplyPage = () => {
    return (
        <div className="w-full">
            {/* Hero Section - White/light background */}
            <section className="w-full bg-white py-24">
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: '2.8rem',
                            fontWeight: 400,
                            color: '#062667',
                            lineHeight: 1.3,
                            letterSpacing: '0.02em',
                        }}
                    >
                        We&rsquo;re looking for passionate students to join our team!
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-10"
                    >
                        <p
                            style={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontSize: '0.95rem',
                                color: '#062667',
                                lineHeight: 1.6,
                            }}
                        >
                            Recruitment opens each semester.
                        </p>
                        <p
                            className="mt-2"
                            style={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontSize: '0.95rem',
                                color: '#062667',
                                lineHeight: 1.6,
                            }}
                        >
                            Follow us on Instagram and LinkedIn to stay updated on important dates and details.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Interest Form Section - Dark blue background */}
            <section
                className="w-full py-24"
                style={{ backgroundColor: '#062667' }}
            >
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: '3.5rem',
                            fontWeight: 400,
                            color: 'white',
                            letterSpacing: '0.05em',
                        }}
                    >
                        INTEREST FORM
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-6"
                        style={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: '0.95rem',
                            color: 'white',
                        }}
                    >
                        Interested in joining CYC PSU? Fill this out!
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-8"
                    >
                        <a
                            href={APPLY_PAGE_DATA.interestFormLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-10 py-3 border border-white text-white hover:bg-white hover:text-[#062667] transition-colors duration-300"
                            style={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontSize: '0.9rem',
                                letterSpacing: '0.05em',
                            }}
                        >
                            Apply
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Coffee Chat Section - Terracotta background */}
            <section
                className="w-full py-24"
                style={{ backgroundColor: '#CB725E' }}
            >
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: '3.5rem',
                            fontWeight: 400,
                            color: 'white',
                            letterSpacing: '0.05em',
                        }}
                    >
                        COFFEE CHAT
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-6"
                        style={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: '0.95rem',
                            color: 'white',
                        }}
                    >
                        Interested in chatting with our team? Fill this out!
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-8"
                    >
                        <a
                            href={APPLY_PAGE_DATA.coffeeChatFormLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-10 py-3 border border-white text-white hover:bg-white hover:text-[#CB725E] transition-colors duration-300"
                            style={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontSize: '0.9rem',
                                letterSpacing: '0.05em',
                            }}
                        >
                            Sign Up
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ApplyPage;
