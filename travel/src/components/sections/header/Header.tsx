"use client"
import {
  Facebook,
  Instagram,
  MessageCircle,
  Phone,
  Twitter,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navigationLinks } from "../../../../constants/navigationLinks";
import MobileMenu from "./MobileMenu";
import SearchPage from "./Search";
import { usePathname } from "next/navigation";

const Header = () => {

  const pathname = usePathname()

  const socialMedia = [
    { href: "#", icon: <Twitter size={16} /> },
    { href: "#", icon: <Instagram size={16} /> },
    { href: "#", icon: <Facebook size={16} /> },
  ];



  return (
    <header className="bg-black text-white">
      <div className="flex container mx-auto h-16 justify-center md:justify-between items-center px-4 py-2 text-sm">
        {/* Top Bar */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-full">
              <MessageCircle size={12} className="text-orange-500" />
            </div>
            info@travel.com
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-full">
              <Phone size={12} className="text-orange-500" />
            </div>
            +111 111 1111
          </div>
        </div>
        <div className="hidden md:flex items-center gap-5">
          {socialMedia.map((link, index) => (
            <Link href={link.href} key={index} className="hover:text-orange-500">
              {link.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation Bar */}
        <div className="bg-white h-28 text-black shadow flex items-center">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Image 
              src={"/logo.png"}
              alt="Travel"
              width={210}
              height={50}
              className="w-36 lg:w-52 h-auto"
            />

            <nav className="hidden lg:flex text-lg space-x-8 font-semibold">
              {navigationLinks.map((link, index) => (
                <Link href={link.href} key={index} className={`${pathname === link.href ? "text-orange-500" : "hover:text-orange-600"}`}>
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <SearchPage/>            
              <div className="p-3 bg-sky-500 rounded-full text-white cursor-pointer">
                <User/>
              </div>
              {/* MobilMenu */}
              <MobileMenu/>
            </div>
          </div>
        </div>
    </header>
  );
};

export default Header;
