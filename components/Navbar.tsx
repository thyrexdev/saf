import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
    const links = [
        { href: "#", label: "الرئيسية" },
        { href: "#", label: "من نحن" },
        { href: "#", label: "خدماتنا" },
        { href: "#", label: "أعمالنا" },
        { href: "#", label: "تواصل معنا" },
    ]

    return (
        <header className="w-full bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800">
            <div className="container mx-auto h-16 flex items-center justify-between px-4">
                {/* اللوجو */}
                <Link href="#" className="flex items-center" prefetch={false}>
                    <Image
                        src="/logob&w.jpg"
                        alt="Logo"
                        width={55}
                        height={55}
                        className="rounded-md"
                    />
                </Link>

                {/* اللينكات - سطح المكتب */}
                <nav className="hidden lg:flex space-x-1 ml-6">
                    {links.map(({ href, label }) => (
                        <Link
                            key={label}
                            href={href}
                            className="px-3 py-2 text-md font-bold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                            prefetch={false}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* موبايل: زر القائمة */}
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <MenuIcon />
                                <span className="sr-only">القائمة</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-64 bg-white dark:bg-gray-950 p-0">
                            <div className="flex flex-col h-full">
                                <div className="p-4 border-b border-gray-100 dark:border-gray-800">
                                    <Image
                                        src="/logob&w.jpg"
                                        alt="Logo"
                                        width={38}
                                        height={38}
                                        className="rounded-md"
                                    />
                                </div>
                                <nav className="flex-1 p-4">
                                    <div className="space-y-1">
                                        {links.map(({ href, label }) => (
                                            <Link
                                                key={label}
                                                href={href}
                                                className="block px-3 py-2 rounded-md text-md font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition-colors"
                                                prefetch={false}
                                            >
                                                {label}
                                            </Link>
                                        ))}
                                    </div>
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

function MenuIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
        >
            <line x1="4" x2="20" y1="8" y2="8" />
            <line x1="4" x2="20" y1="16" y2="16" />
        </svg>
    )
}