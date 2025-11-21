import React, { useState, useEffect } from 'react';
import Hero from "@/components/Hero";
import MetricsCounter from "@/components/MetricsCounter";
import AgeWiseJourney from "@/components/AgeWiseJourney";
import ProgramsWings from "@/components/ProgramsWings";
import VideoSection from "@/components/VideoSection";
import { FileText, User, Users, BarChart2, MessageSquare, LogIn, Video, Radio, BookOpen, Star, Zap, DollarSign, Target, Settings, CheckCircle, Award, MapPin, Sparkles, Send, Loader2, Plus, ArrowRight, HeartHand, BrainCircuit, Recycle, TrendingUp } from 'lucide-react';

// Import the image directly from your assets
import heroBg from "@/assets/background.gif"; 

// --- MOCK DATA ---
const successMetricsData = { aspirants: 12500, transformers: 2100, villages: 450, rewards: '₹1.5Cr+' };

// --- HELPER COMPONENTS ---
const Glowing = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative ${className}`}>
    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-2xl blur opacity-60 animate-pulse"></div>
    <div className="relative bg-gray-900 rounded-2xl leading-none flex items-center justify-between">{children}</div>
  </div>
);

const NeonText = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <h1 className={`font-bold tracking-widest ${className}`} style={{ textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px currentColor, 0 0 20px currentColor, 0 0 25px currentColor' }}>{children}</h1>
);

// --- NEW SECTION COMPONENTS ---

const PricingSection = () => {
    const courses = [
        { name: 'ASPIRANT', price: 'Learn', wing: 'World of Jnani' },
        { name: 'ASPIRANT PRO', price: 'Affiliate', wing: 'World of Jnani' },
        { name: 'TRANSFORMER', price: 'Serve', wing: 'Universe of HaiC' },
        { name: 'TRANSFORMER PRO', price: 'Lead', wing: 'Universe of HaiC' },
    ];
    return (
        <section className="py-20 bg-gray-900 text-center">
            <h2 className="text-4xl font-bold mb-12 text-white">Courses that Fuel Your Evolution</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                {courses.map(course => (
                    <div key={course.name} className="bg-gray-800 border-2 border-gray-700 rounded-lg p-6 flex flex-col justify-between hover:border-orange-500 hover:-translate-y-2 transition-transform duration-300">
                        <div>
                            <div className="bg-black rounded-md p-8 mb-4">
                                <h3 className="text-2xl font-bold text-gray-400">{course.name}</h3>
                                <p className="text-sm text-orange-400">{course.wing}</p>
                            </div>
                            <p className="text-4xl font-bold mb-6 text-white">{course.price}</p>
                        </div>
                        <button className="w-full flex items-center justify-between bg-gray-700 text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-500 transition-colors duration-300">
                            <span>Get Started</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

const PersonalizedPathfinder = () => {
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState({ ageGroup: '', challenge: '', goal: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState('');

    const handleSelect = (field: string, value: string) => {
        setUserData(prev => ({ ...prev, [field]: value }));
        setStep(prev => prev + 1);
    };

    // Simulated AI response for demo purposes since no API key is provided
    const callGeminiAPI = async () => {
        setIsLoading(true);
        setResult('');
        
        setTimeout(() => {
            setResult(`Based on your profile as a ${userData.ageGroup} facing ${userData.challenge}, we recommend starting with the Aspirant Program to build foundational stability. Once you achieve ${userData.goal}, you can transition into the Transformer role to guide others.`);
            setIsLoading(false);
        }, 2000);
    };
    
    useEffect(() => {
        if (step === 4) {
            callGeminiAPI();
        }
    }, [step]);

    const reset = () => {
        setStep(1);
        setUserData({ ageGroup: '', challenge: '', goal: '' });
        setResult('');
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="text-white">
                        <h3 className="text-2xl font-semibold mb-6 text-center">Which life stage are you in?</h3>
                        <div className="flex flex-row justify-center items-center gap-6 w-full mt-4 flex-wrap md:flex-nowrap">
                            {['Youth (13-30)', 'Parent (30-50)', 'Elder (50+)', 'Learner (6-12)'].map(age => (
                                <button
                                    key={age}
                                    onClick={() => handleSelect('ageGroup', age)}
                                    className="bg-gray-700 p-6 rounded-xl hover:bg-orange-500 hover:text-white transition-colors duration-300 text-lg font-semibold flex-1 min-w-[180px] max-w-[220px] text-center h-[180px] flex items-center justify-center"
                                >
                                    {age}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="text-white">
                        <h3 className="text-2xl font-semibold mb-6 text-center">What is your primary challenge right now?</h3>
                        <div className="flex flex-row justify-center items-center gap-6 w-full mt-4 flex-wrap md:flex-nowrap">
                            {['Career Anxiety', 'Mental Stress', 'Lack of Purpose', 'Family Balance'].map(challenge => (
                                <button
                                    key={challenge}
                                    onClick={() => handleSelect('challenge', challenge)}
                                    className="bg-gray-700 p-6 rounded-xl hover:bg-orange-500 hover:text-white transition-colors duration-300 text-lg font-semibold flex-1 min-w-[180px] max-w-[220px] text-center h-[180px] flex items-center justify-center"
                                >
                                    {challenge}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="text-white">
                        <h3 className="text-2xl font-semibold mb-6 text-center">What is your main goal?</h3>
                        <div className="flex flex-row justify-center items-center gap-6 w-full mt-4 flex-wrap md:flex-nowrap">
                            {['Fulfilling Job', 'Inner Peace', 'Community Leadership', 'Conscious Family'].map(goal => (
                                <button
                                    key={goal}
                                    onClick={() => handleSelect('goal', goal)}
                                    className="bg-gray-700 p-6 rounded-xl hover:bg-orange-500 hover:text-white transition-colors duration-300 text-lg font-semibold flex-1 min-w-[180px] max-w-[220px] text-center h-[180px] flex items-center justify-center"
                                >
                                    {goal}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="text-center text-white">
                        <h3 className="text-2xl font-semibold mb-4">Your Personalized Conscious Path</h3>
                        {isLoading && (
                            <div className="flex flex-col items-center justify-center h-48">
                                <Loader2 className="w-12 h-12 animate-spin text-orange-400" />
                                <p className="mt-4 text-gray-300">Our AI guide is crafting your path...</p>
                            </div>
                        )}
                        {result && (
                            <div className="text-left bg-gray-800 p-6 rounded-lg whitespace-pre-wrap font-sans border border-orange-500/30">
                                {result}
                            </div>
                        )}
                        <button onClick={reset} className="mt-8 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-105">Start Over</button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-gray-800/70 backdrop-blur-md p-8 rounded-2xl border-2 border-orange-500/50 shadow-[0_0_25px_rgba(249,115,22,0.3)] max-w-4xl mx-auto flex flex-col items-center">
            <div className="w-full">
                {renderStep()}
            </div>
        </div>
    );
};

const HowItWorksSection = () => (
    <section className="py-20 bg-black text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Your Roadmap to Conscious Growth</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">Our structured onboarding ensures you begin your journey with clarity and purpose.</p>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
            {['Register & Test', 'Personal Interview', 'Select Your Wing', 'Begin Transformation'].map((step, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-orange-500/50 transition-colors">
                    <div className="text-orange-400 font-bold text-lg mb-2">Step {index + 1}</div>
                    <h3 className="font-semibold text-xl">{step}</h3>
                </div>
            ))}
        </div>
    </section>
);

const VideoTestimonialsSection = () => {
    const testimonials = [
        { name: 'Aakash T.', role: 'Aspirant', quote: 'I was stuck in a cycle of stress. CLYFO gave me not just skills, but a purpose.' },
        { name: 'Madiha L.', role: 'Aspirant', quote: 'I learned more about real-world application and inner peace here than in any classroom.' },
        { name: 'Niranjan K.', role: 'Transformer', quote: 'Serving my community and seeing the impact firsthand is more rewarding than any salary.' },
        { name: 'Sharadhnand M.', role: 'Transformer', quote: 'Guiding the next generation has given my life a new dimension of meaning.' },
    ];
    return (
        <section className="py-20 bg-gray-900 text-white">
            <h2 className="text-4xl font-bold text-center mb-12">Real Stories, Real Transformations</h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                {testimonials.map((t, i) => (
                    <div key={i} className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex flex-col">
                        <p className="text-gray-300 italic flex-grow">"{t.quote}"</p>
                        <div className="flex items-center mt-4 pt-4 border-t border-gray-700">
                            <div className="w-12 h-12 rounded-full mr-4 bg-gray-700 flex items-center justify-center text-lg font-bold text-orange-400">
                                {t.name.charAt(0)}
                            </div>
                            <div>
                                <p className="font-bold text-white">{t.name}</p>
                                <p className="text-sm text-orange-400">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const AppDownloadSection = () => (
    <section
        className="py-20 bg-black relative"
        style={{
            background: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8))"
        }}
    >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 bg-gray-900 p-12 rounded-2xl border border-gray-800 relative z-10 mx-4">
            <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4 text-white">Your Freedom Tech Toolbox</h2>
                <p className="text-gray-400 mb-6">Access your courses, community, progress tracker, and AI guide "JyaniBot" on the go.</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-5 rounded-lg transition-colors border border-gray-700">Google Play</button>
                    <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-5 rounded-lg transition-colors border border-gray-700">App Store</button>
                </div>
            </div>
        </div>
    </section>
);

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        { question: 'Who is this platform for?', answer: 'CLYFO is for everyone, at every stage of life: Youth (13-30) seeking purpose and career, Parents wanting to connect with their children, Families aiming for balance, and Elders looking for dignified community roles.' },
        { question: 'How does CLYFO help with youth unemployment?', answer: 'We are a job-creation engine. Our "Aspirants Program" provides in-demand skills recognized by MSME, while our "Transformers Program" creates paid mentorship roles.' },
        { question: 'Is this just another online course?', answer: 'CLYFO is a complete Consciousness Operating System. We fuse ancient wisdom with modern tech, providing a structured growth journey through our dual-wing model.' },
        { question: 'How do you address mental health?', answer: 'We have a "Life Beyond Marks" ecosystem and provide 24/7 support through our community and AI assistant to build mental resilience.' },
    ];

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg border border-gray-700">
                            <button onClick={() => toggleFaq(index)} className="w-full flex justify-between items-center p-6 text-left">
                                <span className="text-xl font-semibold">{faq.question}</span>
                                <Plus className={`w-6 h-6 transition-transform duration-300 ${openIndex === index ? 'transform rotate-45' : ''}`} />
                            </button>
                            {openIndex === index && (
                                <div className="p-6 pt-0 text-gray-300">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const DualWingsSection = () => (
    <section id="dual-wings" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center px-4">
            <h1 className="text-5xl font-bold mb-4">Our Dual Wings</h1>
            <p className="text-xl text-orange-400 mb-12">“One Wing Heals, One Wing Builds. Together, We Rise.”</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {/* Left Frame: Universe of HaiC */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border-2 border-orange-500/50 shadow-[0_0_25px_rgba(249,115,22,0.2)]">
                    <h2 className="text-3xl font-bold text-orange-400 mb-2">Universe of HaiC</h2>
                    <p className="text-lg font-semibold mb-4 text-gray-300">Transformers Program - Serve to Earn</p>
                    <p className="text-gray-400 mb-6">Create a 24/7 Holistic Guidance Workforce across TS & AP who earn via impact — not hours.</p>
                    <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-orange-400 mr-3 mt-1 shrink-0"/>Guide Youth, Families & Elders in 6 Wellness Areas.</li>
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-orange-400 mr-3 mt-1 shrink-0"/>Earn a monthly income (₹5K–₹20K) via an Impact Scoreboard.</li>
                    </ul>
                    <button className="mt-8 w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 rounded-lg transition-transform transform hover:scale-105">Apply as a Transformer »</button>
                </div>

                {/* Right Frame: World of Jnani */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border-2 border-green-600/50 shadow-[0_0_25px_rgba(22,163,74,0.2)]">
                    <h2 className="text-3xl font-bold text-green-400 mb-2">World of Jnani</h2>
                    <p className="text-lg font-semibold mb-4 text-gray-300">Aspirants Program - Learn to Rise</p>
                    <p className="text-gray-400 mb-6">Learn skills that create income, purpose, and inner stability through industry-certified courses.</p>
                       <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 shrink-0"/>Access 30+ Tracks across Health, Finance, Tech.</li>
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 shrink-0"/>Get MSME-tagged, blockchain-verifiable certificates.</li>
                    </ul>
                    <button className="mt-8 w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-lg transition-transform transform hover:scale-105">Join as an Aspirant »</button>
                </div>
            </div>
        </div>
    </section>
);

const WhoShouldJoin = () => (
    <section className="py-20 bg-gray-900 text-white">
        <h2 className="text-4xl font-bold text-center mb-12">Who Should Join?</h2>
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg p-6 mx-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    { group: 'Youth (13–30)', reason: 'Get purpose + job + peace of mind' },
                    { group: 'Parents', reason: 'Understand children & future-proof them' },
                    { group: 'Families (30–50)', reason: 'Balance tech, health & finance' },
                    { group: 'Elders (50+)', reason: 'Find purpose in guidance, dignity' },
                ].map(item => (
                    <div key={item.group} className="p-4 border-l-4 border-orange-500">
                        <h3 className="text-xl font-bold text-white">{item.group}</h3>
                        <p className="text-gray-300">{item.reason}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// --- MAIN PAGE COMPONENT (Exported as Index) ---
const Index = () => {
    const [counters, setCounters] = useState({ aspirants: 0, transformers: 0, villages: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setCounters(prev => ({
                aspirants: Math.min(prev.aspirants + 151, successMetricsData.aspirants),
                transformers: Math.min(prev.transformers + 25, successMetricsData.transformers),
                villages: Math.min(prev.villages + 5, successMetricsData.villages),
            }));
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const mockSetCurrentPage = (page: string) => {
        console.log(`Navigating to mock page: ${page}`);
    };

    return (
        <div className="min-h-screen bg-background">
            {/* STYLES FOR ANIMATIONS */}
            <style>{`
                @keyframes spin-slow {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 100s linear infinite;
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes fadeInLeft {
                    from { opacity: 0; transform: translateX(-50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes fadeInRight {
                    from { opacity: 0; transform: translateX(50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .animate-fade-in-left { animation: fadeInLeft 1s ease-out; }
                .animate-fade-in-right { animation: fadeInRight 1s ease-out; }
                .animate-fade-in-down { animation: fadeIn 1s ease-out; }
                .animate-fade-in-up { animation: fadeIn 1s ease-out; }
                .glitter-background {
                    background-color: #000;
                    background-image:
                        radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                        radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
                    background-size: 40px 40px;
                    background-position: 0 0, 20px 20px;
                }
            `}</style>

            {/* HERO SECTION */}
            <section className="min-h-screen bg-black flex items-center p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-500 opacity-10 text-[30rem] font-black animate-spin-slow">♾</div>

                <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-4">
                    {/* Left Column: Image */}
                    <div className="animate-fade-in-left flex justify-center">
                        <Glowing className="mx-auto">
                           <img 
                            src={heroBg} 
                            alt="Cosmic Tree of Life" 
                            className="w-full max-w-md mx-auto rounded-2xl shadow-2xl shadow-orange-500/20" 
                        />
                        </Glowing>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="animate-fade-in-right text-center md:text-left flex flex-col items-center md:items-start">
                        <h1 className="text-3xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-white to-green-400 mb-4 drop-shadow-lg">
                            A Consciousness Operating System for the Human Era 
                        </h1>
                        <p className="text-xl text-green-300 font-semibold mb-8">Where Enlightenment Meets Employment </p>
                        
                        <div className="space-y-4 mb-8 w-full">
                            <p className="flex items-center justify-center md:justify-start text-lg font-semibold text-white">
                                <CheckCircle className="w-6 h-6 mr-3 text-orange-400"/> From Stress to Stillness 
                            </p>
                            <p className="flex items-center justify-center md:justify-start text-lg font-semibold text-white">
                                <CheckCircle className="w-6 h-6 mr-3 text-green-400"/> From Distraction to Direction 
                            </p>
                            <p className="flex items-center justify-center md:justify-start text-lg font-semibold text-white">
                                <CheckCircle className="w-6 h-6 mr-3 text-white"/> From Joblessness to Soulful Income 
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-start gap-4 w-full">
                            <button className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 text-lg">
                                Join CLYFO^369(♾) 
                            </button>
                            <button onClick={() => mockSetCurrentPage('programs')} className="bg-white hover:bg-orange-100 text-black font-bold py-3 px-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 text-lg">
                                View Dual Wing Programs 
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            
            <Hero />

            {/* WHO WE ARE SECTION */}
            <section className="py-20 bg-gray-900">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl font-bold mb-6 text-white">Who We Are</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        CLYFO^369 ( ♾ ) is not just an Ed-Tech platform. It is a Consciousness-Driven Human Life Operating System engineered to empower every generation. This is the future of human evolution—starting in Bharat, scaling across the globe. 
                    </p>
                </div>
            </section>
            
            {/* THE CONSCIOUS IMPACT LOOP */}
            <section className="py-20 bg-black">
                <div className="max-w-6xl mx-auto p-8 glitter-background">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-4 animate-fade-in-down text-white">The Conscious Impact Loop</h2>
                        <p className="text-lg text-gray-400 mb-12 animate-fade-in-down delay-100">
                            Our system is a self-sustaining engine for social healing and job creation.
                        </p>
                        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 text-center">
                            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 w-full h-1 bg-gray-800/50 z-0"></div>
                            
                            <div className="relative flex flex-col items-center p-6 bg-gray-900 rounded-xl shadow-lg animate-fade-in-up delay-200 z-10">
                                <div className="bg-gray-800 rounded-full p-5 mb-3 border-2 border-orange-500/50">
                                    <BookOpen className="w-10 h-10 text-orange-400" />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-white">1. Aspirants Learn</h3>
                                <p className="text-gray-400 text-sm">Aspirers learn & gain certifications.</p>
                            </div>
                            <div className="relative flex flex-col items-center p-6 bg-gray-900 rounded-xl shadow-lg animate-fade-in-up delay-400 z-10">
                                <div className="bg-gray-800 rounded-full p-5 mb-3 border-2 border-green-500/50">
                                    <TrendingUp className="w-10 h-10 text-green-400" />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-white">2. Top Aspirers Transform</h3>
                                <p className="text-gray-400 text-sm">Top Aspirers become CLYFO Transformers.</p>
                            </div>
                            <div className="relative flex flex-col items-center p-6 bg-gray-900 rounded-xl shadow-lg animate-fade-in-up delay-600 z-10">
                                <div className="bg-gray-800 rounded-full p-5 mb-3 border-2 border-blue-500/50">
                                    <Users className="w-10 h-10 text-blue-400" />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-white">3. Transformers Serve</h3>
                                <p className="text-gray-400 text-sm">Transformers serve the community.</p>
                            </div>
                            <div className="relative flex flex-col items-center p-6 bg-gray-900 rounded-xl shadow-lg animate-fade-in-up delay-800 z-10">
                                <div className="bg-gray-800 rounded-full p-5 mb-3 border-2 border-gray-500/50">
                                    <Zap className="w-10 h-10 text-gray-400" />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-white">4. The Cycle is Funded</h3>
                                <p className="text-gray-400 text-sm">Government & CSR partners fund the cycle.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DUAL WINGS SECTION */}
            <DualWingsSection />

            {/* THE CONSCIOUS LIFECYCLE JOURNEY */}
            <section className="py-20 bg-gray-900 text-center text-white">
                <h2 className="text-4xl font-bold mb-12">The Conscious Lifecycle Journey</h2>
                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto px-4">
                    {['Children (1-5)', 'Learners (6-12)', 'Youth (13-30)', 'Family (30-50)', 'Olders (50+)'].map((group, i) => (
                        <div key={i} className="bg-gray-800 p-6 rounded-xl w-52 text-center border border-gray-700 hover:border-orange-500 transition-all transform hover:-translate-y-2">
                            <div className="text-4xl mb-4">
                                {['👶', '📚', '💼', '🏠', '🌿'][i]}
                            </div>
                            <h3 className="font-bold text-xl text-orange-400">{group.split(' ')[0]}</h3>
                            <p className="text-gray-400 text-sm">{group.split('(')[1].replace(')', '')}</p>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* DISCOVER YOUR CONSCIOUS PATH */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-6xl mx-auto text-center px-4">
                    <div className="flex justify-center items-center gap-4 mb-4">
                        <Sparkles className="w-10 h-10 text-orange-400"/>
                        <h2 className="text-4xl font-bold">Discover Your Conscious Path</h2>
                        <Sparkles className="w-10 h-10 text-orange-400"/>
                    </div>
                    <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">Feeling lost? Answer three simple questions and let our AI guide illuminate the perfect starting point for your journey.</p>
                    <PersonalizedPathfinder />
                </div>
            </section>
            
            <MetricsCounter />
            <AgeWiseJourney />
            <ProgramsWings />
            <VideoSection />
            <WhoShouldJoin />
            <PricingSection />
            <HowItWorksSection />
            
            {/* BANNER SECTION */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="text-center px-4">
                    <h2 className="text-3xl font-extrabold tracking-tight">“For Every Soul — a Skill.</h2>
                    <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400">For Every Skill — a Purpose.”</h2>
                </div>
            </section>
            
            <VideoTestimonialsSection />
            <AppDownloadSection />
            <FaqSection />

            {/* SUCCESS METRICS SECTION */}
            <section className="py-20 bg-black">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center px-4">
                    <div>
                        <NeonText className="text-5xl text-orange-500">{counters.aspirants.toLocaleString()}</NeonText>
                        <p className="mt-2 text-gray-400">Aspirants Trained</p>
                    </div>
                    <div>
                        <NeonText className="text-5xl text-green-500">{counters.transformers.toLocaleString()}</NeonText>
                        <p className="mt-2 text-gray-400">Wellness Transformers</p>
                    </div>
                    <div>
                        <NeonText className="text-5xl text-blue-500">{counters.villages.toLocaleString()}</NeonText>
                        <p className="mt-2 text-gray-400">Villages Impacted</p>
                    </div>
                    <div>
                        <NeonText className="text-5xl text-green-400">{successMetricsData.rewards}</NeonText>
                        <p className="mt-2 text-gray-400">Rewards Distributed</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Index;