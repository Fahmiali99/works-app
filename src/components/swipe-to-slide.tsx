import { INews } from "@/types/home";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Slider from "react-slick";
import { useState } from "react";
import { red } from "@mui/material/colors";

function PcsNewsSlider({ data }: { data: INews[] }) {
  const initialIndex = data.length > 2 ? 1 : 0;
  const [activeSlide, setActiveSlide] = useState(initialIndex);

  const redPalette = [
    "bg-[#FEE2E2]",
    "bg-[#fb923c]",
    "bg-[#F87171]",
    "bg-[#EF4444]",
    "bg-[#B91C1C]",
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "40px",
    swipeToSlide: true,
    arrows: false,
    beforeChange: (current: number, next: number) => setActiveSlide(next),
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-4">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className={`rounded-full transition-all duration-300 ${
          i === activeSlide ? "bg-red-500 w-4 h-4" : "bg-gray-300 w-4 h-4"
        }`}
      ></div>
    ),
  };

  return (
    <div className="absolute w-full">
      <Slider {...settings} initialSlide={initialIndex}>
        {data.map((item, idx) => (
          <div key={idx} className="px-2 py-6">
            <div className="rounded-2xl shadow-lg  p-4 h-full">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  <Image
                    src={item.image}
                    width={48}
                    height={48}
                    alt={item.name}
                    className={`rounded-full ${
                      redPalette[idx % redPalette.length]
                    }`}
                  />
                  <div>
                    <h2 className="font-semibold text-gray-800 text-base">
                      {item.name}
                    </h2>
                    <p className="block sm:hidden text-sm text-gray-500 text-right">
                      {item.day}, {format(parseISO(item.date), "dd MMMM yyyy")}
                    </p>
                  </div>
                </div>
                <p className="hidden sm:block text-sm text-gray-500 text-right">
                  {item.day}
                  <br />
                  {format(parseISO(item.date), "dd MMMM yyyy")}
                </p>
              </div>
              <div className="text-gray-600 space-y-2">
                {item.content.map((sentence, index) => (
                  <p key={index} className="text-sm">
                    {sentence}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PcsNewsSlider;
