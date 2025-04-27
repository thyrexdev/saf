"use client"
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
    return (
        <section id='contact' className="container mx-auto py-16 px-4">
            <div className="grid grid-cols-6 gap-8 items-center">
                {/* Right Side (Arabic Text) - 4 columns on md+ screens */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="col-span-6 md:col-span-4"
                >
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-12"
                    >
                        <p className="text-2xl text-[#030303] leading-relaxed">
                            أفضل مكتب هندسي في الرياض نصمم منزلك بشكل يعكس مفهوم حياتك عبر توفير تصاميم سكنية على مختلف المساحات بشكل يلائم كافة احتياجات العائلة بطراز مختلف يتيح لك فرصة اختيار النموذج المناسب لك في كل مرحلة وبسعر مناسب
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-3 gap-4 mt-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="backdrop-blur-lg bg-[#F1EFEC]/30 p-6 rounded-xl border border-[#D4C9BE]/20 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <motion.div 
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-12 h-12 rounded-full bg-[#123458]/10 flex items-center justify-center mb-4"
                                >
                                    <MapPin className="text-[#123458]" size={24} />
                                </motion.div>
                                <h4 className="text-[#030303] font-medium mb-2">العنوان</h4>
                                <p className="text-[#030303]/80 text-sm">4034 الحسين بن علي، المـصيف، الرياض 12468</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="backdrop-blur-lg bg-[#F1EFEC]/30 p-6 rounded-xl border border-[#D4C9BE]/20 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <motion.div 
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-12 h-12 rounded-full bg-[#123458]/10 flex items-center justify-center mb-4"
                                >
                                    <Phone className="text-[#123458]" size={24} />
                                </motion.div>
                                <h4 className="text-[#030303] font-medium mb-2">اتصل بنا</h4>
                                <p className="text-[#030303]/80 text-sm">0595873159</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="backdrop-blur-lg bg-[#F1EFEC]/30 p-6 rounded-xl border border-[#D4C9BE]/20 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <motion.div 
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-12 h-12 rounded-full bg-[#123458]/10 flex items-center justify-center mb-4"
                                >
                                    <Mail className="text-[#123458]" size={24} />
                                </motion.div>
                                <h4 className="text-[#030303] font-medium mb-2">البريد الإلكتروني</h4>
                                <span className="text-[#030303]/80 text-sm w-fit">architecture.saf@gmail.com</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
                {/* Left Side (Contact Form) - 2 columns on md+ screens */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="col-span-6 md:col-span-2 flex items-center justify-center"
                >
                    <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="w-full max-w-md"
                    >
                        <Card className="border-none backdrop-blur-lg bg-[#F1EFEC]/30 shadow-lg w-full hover:shadow-xl transition-all duration-300">
                            <CardContent className="p-6">
                                <motion.h3 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-xl font-semibold mb-6 text-[#030303] text-center"
                                >
                                    تواصل معنا
                                </motion.h3>
                                <form className="space-y-4" dir="rtl">
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                        className="space-y-2"
                                    >
                                        <label htmlFor="name" className="text-sm font-medium text-[#030303]">الاسم</label>
                                        <Input 
                                            id="name" 
                                            placeholder="أدخل اسمك" 
                                            className="w-full bg-white/50 border-[#D4C9BE] focus:border-[#123458] focus:ring-1 focus:ring-[#123458]/20 transition-all duration-300" 
                                        />
                                    </motion.div>

                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="space-y-2"
                                    >
                                        <label htmlFor="email" className="text-sm font-medium text-[#030303]">البريد الإلكتروني</label>
                                        <Input 
                                            id="email" 
                                            type="email" 
                                            placeholder="أدخل بريدك الإلكتروني" 
                                            className="w-full bg-white/50 border-[#D4C9BE] focus:border-[#123458] focus:ring-1 focus:ring-[#123458]/20 transition-all duration-300" 
                                        />
                                    </motion.div>

                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        className="space-y-2"
                                    >
                                        <label htmlFor="phone" className="text-sm font-medium text-[#030303]">رقم الجوال</label>
                                        <Input 
                                            id="phone" 
                                            placeholder="أدخل رقم جوالك" 
                                            className="w-full bg-white/50 border-[#D4C9BE] focus:border-[#123458] focus:ring-1 focus:ring-[#123458]/20 transition-all duration-300" 
                                        />
                                    </motion.div>

                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        className="space-y-2"
                                    >
                                        <label htmlFor="message" className="text-sm font-medium text-[#030303]">الرسالة</label>
                                        <Textarea 
                                            id="message" 
                                            placeholder="كيف يمكننا مساعدتك؟" 
                                            className="w-full bg-white/50 border-[#D4C9BE] focus:border-[#123458] focus:ring-1 focus:ring-[#123458]/20 transition-all duration-300" 
                                            rows={4} 
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <Button className="w-full bg-[#123458] hover:bg-[#123458]/90 text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                                            <Send size={16} className="ml-2" />
                                            إرسال الرسالة
                                        </Button>
                                    </motion.div>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}