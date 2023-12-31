import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./HorizontalScrolling.css";
import { FreeMode, Pagination } from "swiper/modules";
import image from "../Images/card.png"; // Adjust the import path accordingly
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Button, Text } from "@chakra-ui/react";

const slideData = [
  {
    backgroundImage: `url(${image})`,
    heading: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus turpis in tortor vestibulum.",
    buttonText: "Know More",
  },
  {
    backgroundImage: `url(${image})`,
    heading: "Lorem Ipsum",
    text: "Sed euismod odio eu odio dictum ultrices. Maecenas laoreet, odio in pellentesque pellentesque.",
    buttonText: "Know More",
  },
  {
    backgroundImage: `url(${image})`,
    heading: "Lorem Ipsum",
    text: "Proin eu purus eget ipsum finibus commodo. Curabitur vitae ligula id lectus fringilla facilisis.",
    buttonText: "Know More",
  },
  {
    backgroundImage: `url(${image})`,
    heading: "Lorem Ipsum",
    text: "Vestibulum consectetur justo vitae urna commodo, nec sagittis nisl faucibus. Duis vel erat nec.",
    buttonText: "Know More",
  },
  {
    backgroundImage: `url(${image})`,
    heading: "Lorem Ipsum",
    text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    buttonText: "Know More",
  },
  {
    backgroundImage: `url(${image})`,
    heading: "Lorem Ipsum",
    text: "Donec vitae metus a dolor dapibus blandit. Sed eget luctus metus, vel fermentum nunc. Vivamus.",
    buttonText: "Know More",
  },
  {
    backgroundImage: `url(${image})`,
    heading: "Lorem Ipsum",
    text: "Nam varius, mauris at sodales suscipit, odio dui sodales sem, ut consequat mi lacus nec metus.",
    buttonText: "Know More",
  },
  {
    backgroundImage: `url(${image})`,
    heading: "Lorem Ipsum",
    text: "Curabitur pharetra, enim a maximus laoreet, purus orci lacinia dolor, eu cursus dui metus vel justo.",
    buttonText: "Know More",
  },
];

export default function HorizontalScrolling() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        style={{
          height: "200px",
          marginLeft: "0.3rem",
          overflow: "hidden",
          padding: "1rem",
        }}
      >
        {slideData.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: slide.backgroundImage,
              backgroundSize: "cover",
              padding: "2rem",
              paddingTop: "2rem",
              paddingBottom: "2rem",
              color: "white",
              borderRadius: "1.2rem",
            }}
          >
            <div className="slide-content">
              <h2>{slide.heading}</h2>
              <p>{slide.text}</p>
              <Button
                background={"transparent"}
                color={"white"}
                _hover={{ background: "transparent" }}
                cursor={"pointer"}
                w={"10rem"}
              >
                <Text mr={"0.5rem"}>{slide.buttonText}</Text>{" "}
                <IoIosArrowDroprightCircle fontSize={"1.5rem"} />
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
