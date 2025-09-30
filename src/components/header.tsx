"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { useScroll } from "motion/react";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Beranda", href: "/" },
  { name: "Solusi", href: "#solusi" },
  { name: "Cara Kerja", href: "#carakerja" },
  { name: "Fitur", href: "#fitur" },
  { name: "Harga", href: "#harga" },
  { name: "FAQ", href: "/faq" },
];

export const Header = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setMenuState(false);
  };

  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.05);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <header>
      <div className="container mx-auto px-4">
        <nav
          data-state={menuState && "active"}
          className="bg-background/50 fixed z-20 w-full border-b backdrop-blur-3xl"
        >
          <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
            <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
              <div className="flex w-full items-center justify-between gap-12 lg:w-auto text">
                <Link
                  href="/"
                  aria-label="home"
                  className="flex items-center space-x-2 font-bold"
                >
                  AI Training
                </Link>
              </div>
              <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>

                <div className="hidden lg:block item-center text-center">
                  <ul className="flex gap-8 text-sm">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className={`block duration-150 hover:text-green-700 ${
                            pathname === item.href
                              ? "font-semibold text-green-700"
                              : "text-muted-foreground"
                          }`}
                        >
                          <span className="font-bold">{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-center space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                <div className="lg:hidden">
                  <ul className="space-y-6 text-base">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          onClick={handleLinkClick}
                          className={`block duration-150 hover:text-green-700 ${
                            pathname === item.href
                              ? "font-semibold text-green-700"
                              : "text-muted-foreground"
                          }`}
                        >
                          <span className="font-bold">{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-blue-400 text-black hover:bg-blue-400 hover:text-black"
                  >
                    <Link href="/login">
                      <span>Masuk</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="bg-blue-500 hover:bg-blue-400"
                  >
                    <Link href="/signup">
                      <span>Daftar</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
