import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchPage = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="p-3 hidden lg:flex bg-orange-500 rounded-full text-white cursor-pointer">
            <Search/>
        </div>  
      </DialogTrigger>
      <DialogContent className="bg-black/30 border-none ">
          <DialogTitle className="text-xl text-white">What are you looking for?</DialogTitle>
          <div className="mt-8 flex flex-row items-center justify-center gap-2">
            <Input placeholder="Search..." className="w-full py-6 text-white"/>
            <Button className="py-6 bg-orange-500 hover:bg-orange-600">
                <Search/>
            </Button>
          </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchPage;
