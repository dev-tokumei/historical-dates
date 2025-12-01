import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { EventCard } from "./EventCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  events: { year: number; description: string }[];
  swiperPrevClass: string;
  swiperNextClass: string;
  onSwiperInit: (s: SwiperType) => void;
  isMobile: boolean;
  activePeriod?: number;
}

export const EventsSlider: React.FC<Props> = ({
  events,
  swiperPrevClass,
  swiperNextClass,
  onSwiperInit,
  isMobile,
  activePeriod = 0,
}) => {
  const swiperRef = React.useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      // Обновляем слайды через update()
      swiperRef.current.update();
      // Переходим на первый слайд
      swiperRef.current.slideTo(0, 0);
    }
  }, [activePeriod, events]);

  const handleSwiperInit = (swiper: SwiperType) => {
    swiperRef.current = swiper;

    swiper.update();
    onSwiperInit(swiper);
  };

  return (
    <div className="events-slider-wrapper">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={80}
        slidesPerView={3}
        navigation={{
          prevEl: `.${swiperPrevClass}`,
          nextEl: `.${swiperNextClass}`,
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-custom",
        }}
        onSwiper={handleSwiperInit}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 80 },
        }}
      >
        {events.map((e, i) => (
          <SwiperSlide key={`event-${i}`}>
            <EventCard year={e.year} description={e.description} />
          </SwiperSlide>
        ))}
        {!isMobile && (
          <div className="slider-controls">
            <button
              className={`slider-control-btn slider-control-prev ${swiperPrevClass}`}
              aria-label="Previous slide"
              type="button"
            />
            <button
              className={`slider-control-btn slider-control-next ${swiperNextClass}`}
              aria-label="Next slide"
              type="button"
            />
          </div>
        )}
      </Swiper>

      <div className="swiper-pagination-custom" />
    </div>
  );
};
