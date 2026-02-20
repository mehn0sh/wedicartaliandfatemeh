"use client";

import React from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";

const photos = [
  { src: "/img/5.jpg", width: 1000, height: 1300 },
  { src: "/img/1.jpg", width: 800, height: 1200 },
  { src: "/img/3.jpg", width: 1200, height: 800 },
  { src: "/img/116.jpg", width: 900, height: 1400 },
  { src: "/img/21.jpg", width: 1400, height: 900 },
  { src: "/img/99.jpg", width: 1000, height: 1300 },
];

export default function Gallery() {
  const breakpointColumnsObj = {
    default: 2,
    700: 2,
    500: 2, // همون حالت قبلی که خودت داشتی
  };

  return (
    <div className="max-w-xl mx-auto p-4 lg:max-w-6xl">
      
      {/* Mobile */}
      <div className="lg:hidden">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4"
          columnClassName="flex flex-col gap-4"
        >
          {photos.map((photo, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg relative group cursor-pointer"
            >
              <Image
                src={photo.src}
                width={photo.width}
                height={photo.height}
                alt={`Photo ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
          ))}
        </Masonry>
      </div>

      {/* Desktop */}
      <div className="max-w-6xl mx-auto p-6 hidden lg:block">
        <div className="hidden md:grid grid-cols-4 gap-6 auto-rows-[250px]">

          <div className="relative rounded-xl overflow-hidden group">
            <Image
              src={photos[0].src}
              fill
              alt=""
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>

          <div className="relative rounded-xl overflow-hidden group">
            <Image
              src={photos[4].src}
              fill
              alt=""
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>

          <div className="relative row-span-2 rounded-xl overflow-hidden group">
            <Image
              src={photos[1].src}
              fill
              alt=""
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>

          <div className="relative row-span-2 rounded-xl overflow-hidden group">
            <Image
              src={photos[2].src}
              fill
              alt=""
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>

          <div className="relative rounded-xl overflow-hidden group">
            <Image
              src={photos[3].src}
              fill
              alt=""
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>

          <div className="relative rounded-xl overflow-hidden group">
            <Image
              src={photos[5].src}
              fill
              alt=""
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>

        </div>
      </div>
    </div>
  );
}