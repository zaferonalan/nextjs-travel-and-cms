import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navigationLinks } from "../../../../constants/navigationLinks";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="lg:hidden p-3 bg-orange-500 rounded-full text-white cursor-pointer">
            <Menu/>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-3xl text-orange-500">Travel</SheetTitle>
            <div className="flex flex-col gap-3 mt-8">
                {navigationLinks.map((link, index) => (
                    <Link href={link.href} key={index} className="flex hover:text-orange-500 font-semibold">
                        {link.label}
                    </Link>
                ))}
            </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
