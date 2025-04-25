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

                    {/* Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h4 className="text-lg font-semibold text-[#030303] mb-4">اشترك في النشرة البريدية</h4>
                        <p className="text-[#030303]/80 mb-4">
                            اشترك للحصول على آخر أخبارنا وعروضنا الخاصة
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="بريدك الإلكتروني"
                                className="w-full px-4 py-2 rounded-full border border-[#D4C9BE] focus:outline-none focus:border-[#123458] transition-colors duration-300"
                            />
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-4 py-2 bg-[#123458] text-white rounded-full hover:bg-[#123458]/90 transition-colors duration-300"
                            >
                                اشتراك
                            </motion.button>
                        </form>
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