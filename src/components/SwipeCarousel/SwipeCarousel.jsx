import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { imagePaths } from "@constants/imagePaths";
import { Image } from '../Image'


export default function SwipeCarousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {imagePaths.map(imagePath => {
          return (
            <SwiperSlide>
              <Image url={imagePath} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  );
}


