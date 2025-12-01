import { useEffect } from "react";
import gsap from "gsap";

const YEAR_DURATION = 0.5;
const ROTATION_DURATION = 0.8;

export const usePeriodAnimation = (
  activePeriod: number,
  periods: any[],
  refs: {
    startYearRef: React.RefObject<HTMLDivElement>;
    endYearRef: React.RefObject<HTMLDivElement>;
    circleRef: React.RefObject<HTMLDivElement>;
  },
  isMobile: boolean,
  angleStep: number
) => {
  useEffect(() => {
    const current = periods[activePeriod];
    if (!current) return;

    if (refs.startYearRef.current) {
      gsap.to(refs.startYearRef.current, {
        duration: YEAR_DURATION,
        innerText: current.startYear,
        snap: { innerText: 1 },
        ease: "power2.out",
      });
    }
    if (refs.endYearRef.current) {
      gsap.to(refs.endYearRef.current, {
        duration: YEAR_DURATION,
        innerText: current.endYear,
        snap: { innerText: 1 },
        ease: "power2.out",
      });
    }
    if (refs.circleRef.current && !isMobile) {
      gsap.to(refs.circleRef.current, {
        rotation: -activePeriod * angleStep,
        duration: ROTATION_DURATION,
        ease: "power2.inOut",
      });
    }
  }, [activePeriod, periods, refs, isMobile, angleStep]);
};
