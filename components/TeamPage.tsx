
import React from 'react';
import { ASSETS, TEAM_MEMBERS } from '../constants';
import { motion } from 'framer-motion';

const TeamMemberCard: React.FC<{
    name: string;
    title: string;
    photo: string;
    email: string;
    linkedin: string;
}> = ({ name, title, photo, email, linkedin }) => {
    return (
        <div className="flex flex-col items-start w-full max-w-[300px]">
            {/* Circular Photo */}
            <div className="w-[220px] h-[220px] mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/20">
                <img
                    src={photo}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Name, Title, and Icons row */}
            <div className="w-full flex items-end justify-between px-2">
                <div>
                    <h3 className="text-white text-[22px] font-light italic">{name}</h3>
                    <p className="text-white/80 text-[14px] font-light">{title}</p>
                </div>
                <div className="flex space-x-2 mb-1">
                    <a href={email} target="_blank" rel="noreferrer">
                        <img
                            src={ASSETS.EMAIL_ICON}
                            alt="Email"
                            className="w-[25px] h-[25px] object-contain"
                        />
                    </a>
                    <a href={linkedin} target="_blank" rel="noreferrer">
                        <img
                            src={ASSETS.LINKEDIN_ICON}
                            alt="LinkedIn"
                            className="w-[25px] h-[25px] object-contain"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

const TeamPage: React.FC = () => {
    const president = TEAM_MEMBERS[0]; // Kalin Chen
    const middleRow = TEAM_MEMBERS.slice(1, 4); // Faith, Jessie, Krystal
    const bottomRow = TEAM_MEMBERS.slice(4); // Elena

    return (
        <section className="w-full bg-cyc-blue min-h-screen">
            <div className="max-w-[980px] mx-auto px-5 py-20">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-white text-[48px] md:text-[60px] font-light tracking-wide">
                        MEET THE TEAM
                    </h1>
                    <div className="w-[40px] h-[2px] bg-white/50 mx-auto mt-4" />
                </motion.div>

                {/* President - Centered */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center mb-16"
                >
                    <TeamMemberCard {...president} />
                </motion.div>

                {/* Middle Row - 3 Members */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
                >
                    {middleRow.map((member) => (
                        <TeamMemberCard key={member.name} {...member} />
                    ))}
                </motion.div>

                {/* Bottom Row - 1 Member (left aligned) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex justify-start"
                >
                    <TeamMemberCard {...bottomRow[0]} />
                </motion.div>
            </div>
        </section>
    );
};

export default TeamPage;
