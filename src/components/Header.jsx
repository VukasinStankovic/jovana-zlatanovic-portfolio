import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const letters = ["J", "Z"];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white/5 backdrop-blur-md shadow-md"
                    : "bg-transparent"
            }`}
        >
            <div className="relative flex justify-between items-center py-2 px-20">
                <a
                    href="#"
                    className="relative inline-block border-1 border-[#D3C7B9] rounded-full py-1.5 px-8 text-[#D3C7B9] font-light overflow-hidden group transition-colors duration-300"
                >
                    <span className="absolute bottom-0 left-0 w-full h-full bg-[#D3C7B9] scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
                    <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                        PORTFOLIO
                    </span>
                </a>
                <div className="font-garde text-7xl logo-color flex">
                    {letters.map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>

                {/* hamburger icon */}
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#D3C7B9"
                        class="size-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                        />
                    </svg>
                </button>

                <motion.span
                    className="absolute bottom-0 left-0 h-[1px] bg-[#D3C7B9]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                />
            </div>
        </header>
    );
}

export default Header;
