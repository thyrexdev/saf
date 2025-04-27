"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Building2,
  Home,
  DraftingCompass,
  Paintbrush,
  Lightbulb,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      icon: <Building2 className="text-[#123458]" size={24} />,
      title: "التصميم المعماري",
      description:
        "نقدم تصاميم معمارية مبتكرة تلبي احتياجاتك وتتناسب مع ذوقك، مع مراعاة أحدث المعايير العالمية في التصميم",
    },
    {
      icon: <Home className="text-[#123458]" size={24} />,
      title: "التصميم الداخلي",
      description:
        "نصمم مساحات داخلية فريدة تعكس شخصيتك وتوفر الراحة والجمال، مع التركيز على التفاصيل الدقيقة",
    },
    {
      icon: <DraftingCompass className="text-[#123458]" size={24} />,
      title: "التخطيط الحضري",
      description:
        "نطور خططاً حضارية شاملة تراعي النمو المستدام وتوفر بيئة معيشية مثالية للمجتمعات",
    },
    {
      icon: <Paintbrush className="text-[#123458]" size={24} />,
      title: "التصميم الجرافيكي",
      description:
        "نقدم حلولاً إبداعية في التصميم الجرافيكي تعزز هوية مشروعك وتجذب انتباه جمهورك",
    },
    {
      icon: <Lightbulb className="text-[#123458]" size={24} />,
      title: "الاستشارات الهندسية",
      description:
        "نوفر استشارات هندسية متخصصة تساعدك في اتخاذ القرارات الصحيحة لمشروعك",
    },
    {
      icon: <Shield className="text-[#123458]" size={24} />,
      title: "إدارة المشاريع",
      description:
        "نضمن تنفيذ مشروعك بكفاءة عالية وجودة متميزة، مع الالتزام بالمواعيد والميزانية",
    },
  ];

  return (
    <section id="services" className="container mx-auto py-24 px-4">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl font-bold text-[#030303] mb-4"
        >
          خدماتنا
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl text-[#030303]/80 max-w-2xl mx-auto"
        >
          نقدم مجموعة شاملة من الخدمات الهندسية والتصميمية التي تلبي احتياجاتك
          وتتجاوز توقعاتك
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="backdrop-blur-lg bg-[#F1EFEC]/30 p-8 rounded-xl border border-[#D4C9BE]/20 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="w-14 h-14 rounded-full bg-[#123458]/10 flex items-center justify-center mb-6"
            >
              {service.icon}
            </motion.div>
            <h3 className="text-xl font-semibold text-[#030303] mb-4">
              {service.title}
            </h3>
            <p className="text-[#030303]/80 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 text-center"
      >
        <p className="text-xl text-[#030303]/80 max-w-2xl mx-auto">
          نؤمن بأن كل مشروع هو قصة فريدة، ونحن هنا لنساعدك في كتابة قصتك بطريقة
          استثنائية
        </p>
        <div className="mt-24 flex flex-col items-center gap-[100px]">
          <img src="/Sa logo.svg" alt="" className="w-[350px]" />
          <div className="flex flex-col gap-5">
            <span className="font-bold">
              تعرف مع سعف على الارشادات والاشتراطات المعمارية والعمرانية
            </span>
            <p>
              التي تساهم في توجيه عملية التصميم والتطوير العمراني لتنسجم مع
              الطراز المعماري المحلي الأصيل لكل نطاق جغرافي على مستوى المملكة،
              وتُطبَّق هذه الموجهات على تصميم وتطوير المباني والفراغات العامة.
            </p>
            <p>الحديث عن تفاصيل العمارة السعودية يعزز النتائج. تواصل معنا اليوم لتعرف كيف يمكننا جعل كل جانب من مشروعك أكثر تميزاً!
            </p>
            <Link href='https://architsaudi.dasc.gov.sa/ar' ><Button>تعرف على المزيد</Button></Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
