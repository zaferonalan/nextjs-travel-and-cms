"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { packages } from "../../../../constants/navigationLinks";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const RecentProduct = () => {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="container mx-auto px-10 lg:px-36"
      >
        <CarouselContent>
          {packages.map((pkg, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/2 xl:basis-1/3"
            >
              <div className="p-3">
                <Card className="shadow-lg">
                  <CardHeader className="relative">
                    <Image
                        width={500}
                        height={500}
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {pkg.discount && (
                        <Badge className="absolute top-4 left-4 bg-blue-500 text-white text-sm px-2 hover:bg-blue-600">
                            {pkg.discount}
                        </Badge>
                    )}
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-xl h-[100px]">{pkg.title}</CardTitle>
                    <CardDescription className="flex items-center text-sm text-gray-500 mt-2">
                        <MapPin className="w-4 h-4 mr-2"/> {pkg.location}
                    </CardDescription>
                    <CardDescription className="flex items-center text-sm text-gray-500 mt-2">
                        <Clock className="w-4 h-4 mr-2"/> {pkg.duration}
                    </CardDescription>
                    <div className="flex justify-between items-center mt-4">
                        <div>
                            <span className="text-orange-500 font-bold text-xl">{pkg.price}</span>
                            {pkg.oldPrice && (
                                <span className="text-gray-400 line-through ml-2">{pkg.oldPrice}</span>
                            )}
                        </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-orange-500 hover:bg-orange-600 w-full">View Details</Button>
                  </CardFooter>
                </Card>
                
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 bg-orange-500 hover:bg-orange-600 hover:text-white text-white py-6 px-6" />
        <CarouselNext className="right-0 bg-orange-500 hover:bg-orange-600 hover:text-white text-white py-6 px-6" />
      </Carousel>
    </div>
  );
};

export default RecentProduct;
