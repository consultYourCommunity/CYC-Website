
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICE_CATEGORIES, TESTIMONIALS, CONTACT_INFO, ASSETS } from '../constants';

// SVG Icons for each service category
const ServiceIcon = ({ type }: { type: string }) => {
    switch (type) {
        case 'strategy':
            return (
                <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none" stroke="#062667" strokeWidth="2.5">
                    {/* Chart with upward arrow */}
                    <rect x="10" y="55" width="12" height="20" rx="1" fill="#062667" opacity="0.3" stroke="#062667" />
                    <rect x="27" y="40" width="12" height="35" rx="1" fill="#062667" opacity="0.5" stroke="#062667" />
                    <rect x="44" y="25" width="12" height="50" rx="1" fill="#062667" opacity="0.7" stroke="#062667" />
                    <path d="M20 30 L45 12 L55 12" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M48 8 L56 12 L48 16" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
            );
        case 'financial':
            return (
                <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none" stroke="#062667" strokeWidth="2.5">
                    {/* Stack of coins with dollar sign */}
                    <ellipse cx="40" cy="55" rx="22" ry="8" fill="#062667" opacity="0.3" stroke="#062667" />
                    <ellipse cx="40" cy="45" rx="22" ry="8" fill="#062667" opacity="0.4" stroke="#062667" />
                    <ellipse cx="40" cy="35" rx="22" ry="8" fill="#062667" opacity="0.5" stroke="#062667" />
                    <ellipse cx="40" cy="25" rx="22" ry="8" fill="#062667" opacity="0.6" stroke="#062667" />
                    <text x="40" y="32" textAnchor="middle" fill="#062667" fontSize="18" fontWeight="bold" stroke="none">$</text>
                </svg>
            );
        case 'data':
            return (
                <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none" stroke="#062667" strokeWidth="2.5">
                    {/* Data grid / spreadsheet */}
                    <rect x="12" y="10" width="56" height="60" rx="3" stroke="#062667" />
                    <line x1="12" y1="25" x2="68" y2="25" stroke="#062667" />
                    <line x1="12" y1="40" x2="68" y2="40" stroke="#062667" />
                    <line x1="12" y1="55" x2="68" y2="55" stroke="#062667" />
                    <line x1="35" y1="25" x2="35" y2="70" stroke="#062667" />
                    <line x1="52" y1="25" x2="52" y2="70" stroke="#062667" />
                    <rect x="18" y="30" width="8" height="4" rx="1" fill="#062667" stroke="none" />
                    <rect x="18" y="45" width="8" height="4" rx="1" fill="#062667" stroke="none" />
                    <rect x="40" y="30" width="6" height="4" rx="1" fill="#062667" stroke="none" />
                    <rect x="40" y="45" width="6" height="4" rx="1" fill="#062667" stroke="none" />
                    <rect x="56" y="30" width="6" height="4" rx="1" fill="#062667" stroke="none" />
                    <rect x="56" y="45" width="6" height="4" rx="1" fill="#062667" stroke="none" />
                </svg>
            );
        case 'marketing':
            return (
                <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none" stroke="#062667" strokeWidth="2.5">
                    {/* Chat bubbles */}
                    <path d="M15 20 Q15 12 25 12 L50 12 Q60 12 60 20 L60 35 Q60 43 50 43 L30 43 L20 52 L20 43 L25 43 Q15 43 15 35 Z" fill="#062667" opacity="0.2" stroke="#062667" />
                    <circle cx="30" cy="27" r="2.5" fill="#062667" stroke="none" />
                    <circle cx="38" cy="27" r="2.5" fill="#062667" stroke="none" />
                    <circle cx="46" cy="27" r="2.5" fill="#062667" stroke="none" />
                    <path d="M35 45 Q35 38 45 38 L60 38 Q68 38 68 45 L68 55 Q68 62 60 62 L50 62 L55 68 L55 62 Q35 62 35 55 Z" fill="#062667" opacity="0.1" stroke="#062667" />
                </svg>
            );
        default:
            return null;
    }
};

const ClientsPage = () => {
    return (
        <div className="w-full">
            {/* Services Section - Light purple/grey background */}
            <section className="w-full" style={{ background: 'linear-gradient(135deg, #c5c8e6 0%, #d8d0d0 50%, #c5c8e6 100%)' }}>
                <div className="max-w-6xl mx-auto px-8 py-20">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: '4rem',
                            fontWeight: 400,
                            color: '#062667',
                            letterSpacing: '0.05em',
                        }}
                    >
                        SERVICES
                    </motion.h1>

                    {/* Service Categories Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {SERVICE_CATEGORIES.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="flex flex-col items-center text-center"
                            >
                                {/* Icon */}
                                <div className="mb-4">
                                    <ServiceIcon type={category.icon} />
                                </div>

                                {/* Title */}
                                <h3
                                    className="mb-4"
                                    style={{
                                        fontFamily: 'Montserrat, sans-serif',
                                        fontSize: '0.85rem',
                                        fontWeight: 700,
                                        color: '#062667',
                                        letterSpacing: '0.1em',
                                        lineHeight: 1.4,
                                        whiteSpace: 'pre-line',
                                    }}
                                >
                                    {category.title}
                                </h3>

                                {/* Bullet Points */}
                                <ul className="text-left w-full">
                                    {category.items.map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start mb-1.5"
                                            style={{
                                                fontFamily: 'Montserrat, sans-serif',
                                                fontSize: '0.8rem',
                                                color: '#062667',
                                                lineHeight: 1.5,
                                            }}
                                        >
                                            <span className="mr-2 mt-1 flex-shrink-0">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial Section - White/light background */}
            <section className="w-full bg-white py-20">
                <div className="max-w-4xl mx-auto px-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col items-center text-center"
                        >
                            {/* Quote marks */}
                            <div
                                className="mb-6"
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: '4rem',
                                    color: '#CB725E',
                                    lineHeight: 0.5,
                                }}
                            >
                                &#x201C;&#x201C;
                            </div>

                            {/* Quote text */}
                            <p
                                className="mb-10"
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: '1.3rem',
                                    color: '#062667',
                                    lineHeight: 1.6,
                                    maxWidth: '700px',
                                }}
                            >
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>

                            {/* Photo */}
                            <div className="mb-8">
                                <img
                                    src={testimonial.image}
                                    alt={`${testimonial.author}, ${testimonial.company}`}
                                    className="rounded-md shadow-md"
                                    style={{ width: '280px', height: 'auto' }}
                                />
                            </div>

                            {/* Attribution */}
                            <p
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: '1.1rem',
                                    color: '#062667',
                                }}
                            >
                                {testimonial.author}, {testimonial.company}
                            </p>

                            {/* Dot indicator */}
                            <div className="mt-10">
                                <div
                                    className="rounded-full"
                                    style={{
                                        width: '10px',
                                        height: '10px',
                                        backgroundColor: '#062667',
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact Section - Dark blue background */}
            <section
                className="w-full py-20"
                style={{ backgroundColor: '#062667' }}
            >
                <div className="max-w-6xl mx-auto px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Campus Photo */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="md:w-1/2"
                        >
                            <img
                                src={CONTACT_INFO.campusPhoto}
                                alt="Penn State Campus"
                                className="w-full h-auto rounded-sm"
                            />
                        </motion.div>

                        {/* Contact Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="md:w-1/2"
                        >
                            <h2
                                className="mb-6"
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: '2.8rem',
                                    fontWeight: 400,
                                    color: 'white',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                CONTACT
                            </h2>
                            <p
                                className="mb-1"
                                style={{
                                    fontFamily: 'Montserrat, sans-serif',
                                    fontSize: '0.95rem',
                                    color: 'white',
                                }}
                            >
                                Interested in working with us?
                            </p>
                            <p
                                className="mb-8"
                                style={{
                                    fontFamily: 'Montserrat, sans-serif',
                                    fontSize: '0.95rem',
                                    color: 'white',
                                }}
                            >
                                Fill out our small business interest form!
                            </p>
                            <a
                                href={CONTACT_INFO.formLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-[#062667] transition-colors duration-300"
                                style={{
                                    fontFamily: 'Montserrat, sans-serif',
                                    fontSize: '0.9rem',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                Get Started
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ClientsPage;
