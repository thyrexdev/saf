import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans-arabic",
});

export const metadata: Metadata = {
  title: "سعف للاستشارات المعمارية والهندسية | تصميم معماري، داخلي، تخطيط حضري بالرياض",
  description: "أفضل مكتب هندسي في الرياض يقدم خدمات التصميم المعماري، التصميم الداخلي، التخطيط الحضري، التصميم الجرافيكي، إدارة المشاريع، والاستشارات الهندسية بمعايير عالمية. اكتشف مشاريعنا وابدأ قصتك المعمارية معنا.",
  keywords: [
    "مكتب هندسي بالرياض", 
    "تصميم معماري", 
    "تصميم داخلي", 
    "تخطيط حضري", 
    "استشارات هندسية", 
    "مشاريع هندسية", 
    "أفضل مكتب تصميم", 
    "تصميم فيلا", 
    "إدارة مشاريع", 
    "سعف للاستشارات الهندسية"
  ],
  openGraph: {
    title: "سعف للاستشارات المعمارية والهندسية | خبرة 15+ سنة بالرياض",
    description: "نقدم حلولاً هندسية مبتكرة تجمع بين الجمال والوظيفية، مع خبرة تزيد عن 15 عامًا وأكثر من 200 مشروع ناجح. تواصل معنا لتحقيق مشروعك الهندسي بأعلى جودة.",
    url: "https://yourdomain.com",
    siteName: "سعف للاستشارات المعمارية والهندسية",
    images: [
      {
        url: "/logob&w.jpg", 
        width: 1200,
        height: 630,
        alt: "سعف للاستشارات الهندسية - تصميم معماري داخلي بالرياض",
      }
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "سعف للاستشارات المعمارية والهندسية",
    description: "حلول هندسية مبتكرة تجمع بين الجمال والوظيفية بالرياض. اكتشف مشاريعنا.",
    images: ["/logob&w.jpg"], 
  },
  alternates: {
    canonical: "https://yourdomain.com",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={` ${ibmPlexSansArabic.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
