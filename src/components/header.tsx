'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import React from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

const menuItems = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Solusi', href: '#solusi' },
    { name: 'Cara Kerja', href: '#cara-kerja' },
    { name: 'Fitur', href: '#link' },
    { name: 'Harga', href: '#link' },
    { name: 'FAQ', href: '#link' },
]

export const Header = () => {
    const [menuState, setMenuState] = React.useState(false)
    const pathname = usePathname()
    
    const [activeLink, setActiveLink] = React.useState(pathname)

    const handleLinkClick = (href: string) => {
        setActiveLink(href);
        setMenuState(false); 
    }

    React.useEffect(() => {
        const sectionIds = menuItems
            .map(item => item.href)
            .filter(href => href.startsWith('#'));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(`#${entry.target.id}`);
                    }
                });
            },
            {
                threshold: 0.1, 
                rootMargin: "-100px 0px -100px 0px"
            }
        );

        sectionIds.forEach((id) => {
            const element = document.querySelector(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sectionIds.forEach((id) => {
                const element = document.querySelector(id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []); 

    React.useEffect(() => {
        setActiveLink(pathname)
    }, [pathname])

    return (
        <header> 
            <nav
                data-state={menuState && 'active'}
                className="bg-background/80 fixed top-0 left-0 right-0 z-20 w-full border-b shadow-lg backdrop-blur-lg">
   
                <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <Link
                            href="/"
                            aria-label="home"
                            onClick={() => handleLinkClick('/')} 
                            className="flex items-center space-x-2 font-bold">
                            <span className='text-blue-500'> AI </span> Training
                        </Link>

                        <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-8">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            onClick={() => handleLinkClick(item.href)}
                                            className={`block duration-150 hover:text-blue-700 ${
                                                activeLink === item.href ? 'font-semibold text-blue-700' : 'text-muted-foreground'
                                            }`}>
                                            <span className='font-bold'>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                <Button asChild variant="outline" size="sm"
                                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                                    <Link href="/login"><span>Masuk</span></Link>
                                </Button>
                                <Button asChild size="sm"
                                    className="bg-blue-600 text-white hover:bg-blue-700">
                                    <Link href="/signup"><span>Daftar</span></Link>
                                </Button>
                            </div>
                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        {/* Mobile Menu */}
                        <div className="bg-background in-data-[state=active]:block absolute top-full right-0 mt-2 hidden w-60 border p-6 shadow-lg shadow-zinc-300/20 lg:hidden">
                            <ul className="space-y-6 text-base">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            onClick={() => handleLinkClick(item.href)}
                                            className={`block duration-150 hover:text-blue-700 ${
                                                activeLink === item.href ? 'font-semibold text-blue-700' : 'text-muted-foreground'
                                            }`}>
                                            <span className='font-bold'>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}