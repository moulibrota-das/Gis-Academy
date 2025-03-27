import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Card from "../../components/card/Card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Certificate = () => {
  // Certificate data with titles and descriptions
  const certificates = [
    {
      id: 1,
      title: "Certificate One",
      description: "Description for the first certificate.",
      bgColor: "bg-offWhite",
    },
    {
      id: 2,
      title: "Certificate Two",
      description: "Description for the second certificate.",
      bgColor: "bg-offWhite",
    },
    {
      id: 3,
      title: "Certificate Three",
      description: "Description for the third certificate.",
      bgColor: "bg-offWhite",
    },
    {
      id: 4,
      title: "Certificate Four",
      description: "Description for the fourth certificate.",
      bgColor: "bg-offWhite",
    },
    {
      id: 5,
      title: "Certificate Five",
      description: "Description for the fifth certificate.",
      bgColor: "bg-offWhite",
    },
    {
      id: 6,
      title: "Certificate Six",
      description: "Description for the sixth certificate.",
      bgColor: "bg-offWhite",
    },
    {
      id: 7,
      title: "Certificate Six",
      description: "Description for the sixth certificate.",
      bgColor: "bg-offWhite",
    },
    {
      id: 8,
      title: "Certificate Six",
      description: "Description for the sixth certificate.",
      bgColor: "bg-offWhite",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center px-4 md:px-16 py-20 bg-darkGreen">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-semibold text-white text-center">
        Certificates
      </h2>
      <div className="w-32 h-[2px] bg-white my-3"></div>

      {/* Swiper Carousel */}
      <div className="w-full max-w-5xl mt-10 gap-4 grid grid-cols-4">
        {/* <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          navigation
          modules={[Pagination, Navigation]}
          className="mySwiper"
        > */}
          {certificates.map((certificate, index) => (
            <SwiperSlide key={certificate.id} className="flex justify-center">
              <Card
                title={certificate.title}
                description={certificate.description}
                bgColor={certificate.bgColor}
                width={"88"}
                height={"72"}
                className={`transition-transform duration-300 ${
                  `h-${72 + index * 10} w-${60 + index * 5}`
                }`}
              />
            </SwiperSlide>
          ))}
        {/* </Swiper> */}
      </div>
    </section>
  );
};

export default Certificate;
