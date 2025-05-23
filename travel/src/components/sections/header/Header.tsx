import {
  Facebook,
  Instagram,
  Menu,
  MessageCircle,
  Phone,
  Search,
  Twitter,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const socialMedia = [
    { href: "#", icon: <Twitter size={16} /> },
    { href: "#", icon: <Instagram size={16} /> },
    { href: "#", icon: <Facebook size={16} /> },
  ];

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/hotels", label: "Hotel" },
    { href: "/trips", label: "Trip" },
    { href: "/rent-a-cars", label: "Rent a car" },
    { href: "/contack", label: "Contack" },
  ]

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
                <Link href={link.href} key={index} className="hover:text-orange-500">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <div className="p-3 hidden lg:flex bg-orange-500 rounded-full text-white cursor-pointer">
                <Search/>
              </div>
              <div className="p-3 bg-orange-500 rounded-full text-white cursor-pointer">
                <Menu/>
              </div>
              <div className="p-3 bg-sky-500 rounded-full text-white cursor-pointer">
                <User/>
              </div>
            </div>
          </div>
        </div>
    </header>
  );
};

export default Header;
