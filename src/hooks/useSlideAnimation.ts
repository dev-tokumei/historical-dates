import { useEffect } from "react";
import gsap from "gsap";
import type { Swiper as SwiperType } from "swiper";

const SLIDE_DUR = 0.6;
const SLIDE_STAGGER = 0.12;

export const useSlideAnimation = (
  swiperInstance: SwiperType | null,
  activePeriod: number
) => {
  useEffect(() => {
    if (!swiperInstance) return;

    const animate = () => {
      const slides = swiperInstance.slides;
      if (!slides || slides.length === 0) return;
      gsap.fromTo(
        slides,
        { autoAlpha: 0, y: 40, scale: 0.95 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: SLIDE_DUR,
          stagger: SLIDE_STAGGER,
          ease: "power3.out",
        }
      );
    };

    animate();
    swiperInstance.on("slideChangeTransitionStart", animate);
    return () => swiperInstance.off("slideChangeTransitionStart", animate);
  }, [swiperInstance, activePeriod]);
};
