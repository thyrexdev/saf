"use client"
import { motion } from 'framer-motion';
import { Award, Users, Clock, Target } from 'lucide-react';
import { useState, useEffect } from "react";



export default function AboutSection() {
    
    const stats = [
        {
            icon: <Award className="text-[#123458]" size={24} />,
            value: "15+",
            label: "سنوات من الخبرة"
        },
        {
            icon: <Users className="text-[#123458]" size={24} />,
            value: "200+",
            label: "مشروع ناجح"
        },
        {
            icon: <Clock className="text-[#123458]" size={24} />,
            value: "98%",
            label: "رضا العملاء"
        },
        {
            icon: <Target className="text-[#123458]" size={24} />,
            value: "50+",
            label: "فريق متخصص"
        }
    ];

    const images = [
        "/about1.jpg",
        "/about2.jpg",
        "/about3.jpg",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000); // change every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id='about' className="container mx-auto py-24 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Image and Stats */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
<div className="relative h-[500px] w-full rounded-2xl overflow-hidden">
    {images.map((img, index) => (
        <motion.img 
            key={index}
            src={img}
            alt={`Slideshow Image ${index}`}
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ 
                opacity: index === currentImage ? 1 : 0, 
                scale: index === currentImage ? 1 : 1.05 
            }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
        />
    ))}

</div>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: index * 0.1,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                className="backdrop-blur-lg bg-[#F1EFEC]/30 p-6 rounded-xl border border-[#D4C9BE]/20 shadow-lg"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#123458]/10 flex items-center justify-center">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#030303]">{stat.value}</h3>
                                        <p className="text-sm text-[#030303]/80">{stat.label}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side - Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-8"
                >
                    <div>
                        <motion.span 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-[#123458] font-medium"
                        >
                            من نحن
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-4xl font-bold text-[#030303] mt-2"
                        >
                            سعف للاستشارات المعمارية والهندسية
                        </motion.h2>
                    </div>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg text-[#030303]/80 leading-relaxed"
                    >
                        نحن فريق من المهندسين والمصممين المبدعين، نقدم حلولاً هندسية مبتكرة تجمع بين الجمال والوظيفية. نؤمن بأن كل مشروع هو قصة فريدة، ونحن هنا لنساعدك في كتابة قصتك بطريقة استثنائية.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="space-y-4"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-[#123458]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-2 h-2 rounded-full bg-[#123458]" />
                            </div>
                            <p className="text-[#030303]/80">
                                نقدم حلولاً هندسية متكاملة تلبي احتياجاتك وتتجاوز توقعاتك
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-[#123458]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-2 h-2 rounded-full bg-[#123458]" />
                            </div>
                            <p className="text-[#030303]/80">
                                نستخدم أحدث التقنيات والمواد في تنفيذ مشاريعنا
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-[#123458]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                <div className="w-2 h-2 rounded-full bg-[#123458]" />
                            </div>
                            <p className="text-[#030303]/80">
                                نراعي المعايير العالمية واللوائح المحلية في جميع أعمالنا
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <button className="px-8 py-3 bg-[#123458] text-white rounded-full hover:bg-[#123458]/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                            تعرف علينا أكثر
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
} 