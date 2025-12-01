import React, { useRef, useState, useMemo } from "react";
import "../styles/HistoricalDates.css";
import { CircleVisualization } from "./CircleVisualization";
import { EventsSlider } from "./EventsSlider";

import type { Swiper as SwiperType } from "swiper";

import { usePeriodAnimation, useResponsive, useSlideAnimation } from "../hooks";

interface EventData {
  year: number;
  description: string;
}

interface PeriodData {
  startYear: number;
  endYear: number;
  category: string;
  events: EventData[];
}

interface HistoricalDatesProps {
  periods: PeriodData[];
}

export const HistoricalDates: React.FC<HistoricalDatesProps> = ({
  periods,
}) => {
  if (!periods || periods.length === 0) return null;

  const [activePeriod, setActivePeriod] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const isMobile = useResponsive();

  const startYearRef = useRef<HTMLDivElement>(null);
  const endYearRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  const id = useMemo(
    () => `historical-dates-${Math.random().toString(36).slice(2, 9)}`,
    []
  );

  const angleStep = useMemo(() => 360 / periods.length, [periods.length]);
  const swiperPrevClass = useMemo(() => `swiper-prev-${id}`, [id]);
  const swiperNextClass = useMemo(() => `swiper-next-${id}`, [id]);

  const handlePeriodSelect = (i: number) =>
    setActivePeriod((prev) => (prev !== i ? i : prev));

  const handlePrev = () =>
    setActivePeriod((p) => (p === 0 ? periods.length - 1 : p - 1));

  const handleNext = () =>
    setActivePeriod((p) => (p === periods.length - 1 ? 0 : p + 1));

  usePeriodAnimation(
    activePeriod,
    periods,
    { startYearRef, endYearRef, circleRef },
    isMobile,
    angleStep
  );

  useSlideAnimation(swiperInstance, activePeriod);

  const current = periods[activePeriod];

  return (
    <>
      <div className="historical-dates-container">
        <h2 className="historical-dates-title">
          Исторические
          <br />
          даты
        </h2>
      </div>

      {!isMobile ? (
        <CircleVisualization
          periods={periods}
          activePeriod={activePeriod}
          startYearRef={startYearRef}
          endYearRef={endYearRef}
          circleRef={circleRef}
          onPeriodSelect={handlePeriodSelect}
        />
      ) : (
        <div className="dates-visualization-mobile">
          <div className="years-display-mobile">
            <div ref={startYearRef} className="year year-start">
              {current.startYear}
            </div>
            <div ref={endYearRef} className="year year-end">
              {current.endYear}
            </div>
          </div>
        </div>
      )}

      <div className="events-section">
        <div className="events-navigation">
          <div className="events-counter" aria-live="polite">
            {String(activePeriod + 1).padStart(2, "0")}/
            {String(periods.length).padStart(2, "0")}
          </div>

          <div className="nav-buttons">
            <button
              className="nav-button nav-prev"
              onClick={handlePrev}
              aria-label="Previous period"
              type="button"
            />
            <button
              className="nav-button nav-next"
              onClick={handleNext}
              aria-label="Next period"
              type="button"
            />
          </div>
        </div>

        <EventsSlider
          events={current.events}
          swiperPrevClass={swiperPrevClass}
          swiperNextClass={swiperNextClass}
          onSwiperInit={setSwiperInstance}
          isMobile={isMobile}
          activePeriod={activePeriod}
        />
        <div className="swiper-pagination-custom" />
      </div>
    </>
  );
};

export default HistoricalDates;
