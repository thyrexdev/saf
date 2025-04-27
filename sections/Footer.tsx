"use client"
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <Facebook size={20} />, href: "#" },
        { icon: <Instagram size={20} />, href: "#" },
        { icon: <Twitter size={20} />, href: "#" },
        { icon: <Linkedin size={20} />, href: "#" }
    ];

    const contactInfo = [
        { icon: <Mail size={20} />, text: "architecture.saf@gmail.com" },
        { icon: <Phone size={20} />, text: "0595873159" },
        { icon: <MapPin size={20} />, text: "4034 الحسين بن علي، المـصيف، الرياض 12468" }
    ];

    const quickLinks = [
        { title: "الرئيسية", href: "#" },
        { title: "من نحن", href: "#about" },
        { title: "خدماتنا", href: "#services" },
        { title: "مشاريعنا", href: "#projects" },
        { title: "تواصل معنا", href: "#contact" }
    ];

    return (
        <footer className="bg-[#F1EFEC] border-t border-[#D4C9BE]/20">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold text-[#030303] mb-4">سعف</h3>
                        <p className="text-[#030303]/80 mb-6">
                            نقدم حلولاً هندسية مبتكرة تجمع بين الجمال والوظيفية، مع التركيز على جودة التصميم والتنفيذ.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    whileHover={{ y: -5 }}
                                    className="w-10 h-10 rounded-full bg-[#123458]/10 flex items-center justify-center text-[#123458] hover:bg-[#123458]/20 transition-colors duration-300"
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="text-lg font-semibold text-[#030303] mb-4">روابط سريعة</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <a href={link.href} className="text-[#030303]/80 hover:text-[#123458] transition-colors duration-300">
                                        {link.title}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-semibold text-[#030303] mb-4">معلومات التواصل</h4>
                        <ul className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex items-center gap-3 text-[#030303]/80"
                                >
                                    <div className="w-8 h-8 rounded-full bg-[#123458]/10 flex items-center justify-center text-[#123458]">
                                        {info.icon}
                                    </div>
                                    {info.text}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Google Maps */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-full h-[300px] rounded-xl overflow-hidden shadow-lg"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3622.7538336289062!2d46.688632999999996!3d24.769627999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ2JzEwLjciTiA0NsKwNDEnMTkuMSJF!5e0!3m2!1sen!2seg!4v1745584528467!5m2!1sen!2seg"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-xl"
                        />
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 pt-8 border-t border-[#D4C9BE]/20 text-center text-[#030303]/60"
                >
                    <p>© {currentYear} سعف. جميع الحقوق محفوظة.</p>
                </motion.div>
            </div>
        </footer>
    );
} 