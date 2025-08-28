"use client";

import { useEffect, useRef, useState } from "react";
import { IoDiamondSharp, IoSettingsOutline } from "react-icons/io5";
import { RiUserSettingsLine } from "react-icons/ri";
import { LiaEthereum } from "react-icons/lia";
type ServiceItem = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const serviceData: ServiceItem[] = [
  {
    id: 1,
    icon: <IoDiamondSharp className="text-[#45f882] text-2xl lg:text-4xl" />,
    title: "Year Experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum sollicitudin is augue euismod.",
  },
  {
    id: 2,
    icon: (
      <RiUserSettingsLine className="text-[#45f882] text-2xl lg:text-4xl" />
    ),
    title: "Expert Teams",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum sollicitudin is augue euismod.",
  },
  {
    id: 3,
    icon: <LiaEthereum className="text-[#45f882] text-2xl lg:text-4xl" />,
    title: "Best NFT Game",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum sollicitudin is augue euismod.",
  },
  {
    id: 4,
    icon: <IoSettingsOutline className="text-[#45f882] text-2xl lg:text-4xl" />,
    title: "Worldwide Client",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum sollicitudin is augue euismod.",
  },
];

const images = [
  "https://themedox.com/mykd/wp-content/uploads/2023/10/services_img02.jpg",
  "https://themedox.com/mykd/wp-content/uploads/2023/10/services_img04.jpg",
  "https://themedox.com/mykd/wp-content/uploads/2023/10/services_img01.jpg",
];

const Service = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    timeoutRef.current = setInterval(nextSlide, 5000);

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, []);

  return (
    <div className="w-10/12 mx-auto flex flex-col md:flex-row gap-10 py-6">
      {/* Left Content */}

      <div className="md:w-1/2 flex flex-col gap-2">
        <p className="uppercase text-sm lg:text-md font-bold text-[#45f882] font-sans">
          powerful services
        </p>
        <h1 className="uppercase text-2xl lg:text-5xl font-extrabold font-sans text-white">
          Our Powerful Services Done on time
        </h1>
        <div className="w-2/12 my-4 h-2 bg-[#45f882] clip-diagonal"></div>
        {/* Services list */}
        <div className="flex flex-col gap-12 text-gray-300 mt-6">
          {/* Lặp theo từng cặp 2 service 1 dòng */}
          {serviceData
            .reduce((rows: any[], item, index) => {
              if (index % 2 === 0) rows.push([item]);
              else rows[rows.length - 1].push(item);
              return rows;
            }, [])
            .map((row, i) => (
              <div key={i} className="flex gap-4">
                {row.map((service: ServiceItem) => (
                  <div key={service.id} className="w-1/2 flex flex-col gap-2">
                    {service.icon}
                    <p className="font-bold text-white text-sm lg:text-xl font-sans">
                      {service.title}
                    </p>
                    <p className="text-xs lg:text-sm tracking-widest">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>

      {/* Right Carousel */}
      <div className="md:w-1/2 w-full relative overflow-hidden rounded">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              className="w-full flex-shrink-0"
              alt={`Slide ${index + 1}`}
              width={500}
              height={500}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
