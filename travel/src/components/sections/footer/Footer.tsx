import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
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
  ];

  const instagramImages = Array.from({length:11}, (_,index) => `/instagram/${index + 1}.jpg`)
  return (
    <footer className="bg-black text-white relative">
        <div className="absolute -top-52 left-1/2 transform -translate-x-1/2 bg-orange-500 text-left px-6 py-12 rounded-md shadow-lg w-11/12 
          max-w-6xl h-72 grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <div>
            <h2 className="text-3xl font-bold">Ready to get started?</h2>
            <p className="mt-2 text-lg">
              Its only takes a few minutes to register your FREE Travel account.
            </p>
            <Link href="/register">
              <Button className="mt-4 bg-white text-orange-500 px-6 font-semibold rounded shadow-md">OPEN AN ACCOUNT</Button>
            </Link>
          </div>
          <div className="flex justify-center relative">
            <Image
              height={456}
              width={564}
              src={"/travelfooter.png"}
              alt="Call to action graphic"
              className="hidden md:block absolute w-full -bottom-28"
            />
          </div>
        </div>

      <div className="container mx-auto py-32 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8">
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold">Travel</h3>
          <p className="mt-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
            reprehenderit corporis nulla corrupti esse non aspernatur. Dolorum
            repellendus praesentium voluptate, numquam, nulla aperiam quia quas
            rerum dolore sunt eaque non!
          </p>
          <div className="flex mt-4 space-x-4">
            {socialMedia.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className="hover:text-orange-500"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="">
          <h4 className="text-xl mb-4 font-bold">Useful Links</h4>
          <div className="space-y-2 text-sm">
            {navigationLinks.map((link, index) => (
              <Link href={link.href} key={index} className="block hover:text-orange-500">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold">İnstagram</h2>
          <div className="grid grid-cols-6 gap-2 mt-4">
            {instagramImages.map((src, index) => (
              <Image
                key={index}
                src={src}
                width={50}
                height={50}
                alt={`instagram Image ${index+1}`}
                className="w-full h-auto"
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xl font-bold mb-4">Subscribe</h4>
          <p>Subscribe our newsletter for getting quick updates</p>
          <div className="flex flex-col sm:flex-row mt-2">
            <Input
              type="email"
              placeholder="Your Email addres"
              className="w-full px-4 py-2 rounded-none"
            />
            <Button className="px-4 py-4 bg-orange-500 hover:bg-orange-600 rounded-none">
              SUBSCRİBE
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-4 text-center text-sm border-t border-gray-700">
        <div className="flex justify-between flex-col md:flex-row">
          <div>
            Copyright © 2025{" "}
            <span className="text-orange-500">Travel</span> 
          </div>
          <div>
            <span className="text-orange-500">By:</span> Zafer Günay Önalan
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
