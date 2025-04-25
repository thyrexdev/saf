"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProjectsSection() {
    const projects = [
        {
            id: 1,
            title: "فيلا فاخرة",
            category: "تصميم معماري",
            image: "/project1.jpg",
            description: "تصميم فيلا فاخرة بتصميم عصري يجمع بين الفخامة والوظيفية"
        },
        {
            id: 2,
            title: "مشروع تجاري",
            category: "تصميم داخلي",
            image: "/project2.jpg",
            description: "تصميم داخلي لمجمع تجاري يواكب أحدث الاتجاهات العالمية"
        },
        {
            id: 3,
            title: "مشروع سكني",
            category: "تخطيط حضري",
            image: "/project3.jpg",
            description: "تخطيط متكامل لمشروع سكني يراعي احتياجات المجتمع"
        },
    ];

    return (
        <section className="container mx-auto py-24 px-4">
            <div className="text-center mb-16">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl font-bold text-[#030303] mb-4"
                >
                    مشاريعنا
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl text-[#030303]/80 max-w-2xl mx-auto"
                >
                    استكشف مجموعة من مشاريعنا المتميزة التي تعكس إبداعنا وتفانينا في التصميم
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 0.5, 
                            delay: index * 0.1,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        className="group relative overflow-hidden rounded-xl"
                    >
                        <div className="relative h-80 w-full">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                        >
                            <span className="text-sm font-medium text-[#123458] bg-white/90 px-3 py-1 rounded-full">
                                {project.category}
                            </span>
                            <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                            <p className="text-sm mt-2 opacity-90">{project.description}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
} 