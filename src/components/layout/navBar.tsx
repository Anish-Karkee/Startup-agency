"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Logo from "../../../public/logo/ct-logo01.png"

export function Navbar() {
  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-6xl rounded-3xl border border-white/10 bg-white/10 shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur-2xl">
       <div className="flex h-16 items-center justify-between px-4 md:px-6">

            {/* Left Content */}
            <div>
                <Image
                    src={Logo}
                    alt="Startup Agency Logo"
                    width={200}
                    height={200}
                    className="h-8 sm:h-10 md:h-12 w-auto object-contain cursor-pointer"
                />
            </div>

            {/* Center Content */}
            <div className="flex gap-6 text-white">
                <a href="#">Home</a>
                <a href="#">All Product</a>
                <a href="#">Backpacks</a>
                 <a href="#">Latest Product</a>
            </div>

            {/* Right Content */}
    
            <Button className=" cursor-pointer hover:bg-white hover:text-black transition-all duration-300"    > 
                Contact us
            </Button>

        </div>
       </motion.header>
    </div>
  );
}