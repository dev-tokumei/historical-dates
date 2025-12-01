import React, { useMemo } from "react";
import { getCirclePointPosition, getLabelPosition } from "../utils/math";
import { CirclePoint } from "./CirclePoint";

interface Props {
  periods: any[];
  activePeriod: number;
  startYearRef: React.RefObject<HTMLDivElement>;
  endYearRef: React.RefObject<HTMLDivElement>;
  circleRef: React.RefObject<HTMLDivElement>;
  onPeriodSelect: (i: number) => void;
  radius?: number;
}

export const CircleVisualization: React.FC<Props> = ({
  periods,
  activePeriod,
  startYearRef,
  endYearRef,
  circleRef,
  onPeriodSelect,
  radius = 215,
}) => {
  const angleStep = useMemo(() => 360 / periods.length, [periods.length]);
  const counterAngle = activePeriod * angleStep;
  const current = periods[activePeriod];

  return (
    <div className="dates-visualization">
      <div className="years-display">
        <div ref={startYearRef} className="year year-start">
          {current.startYear}
        </div>
        <div ref={endYearRef} className="year year-end">
          {current.endYear}
        </div>
      </div>

      <div
        className="circle-container"
        style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}
      >
        <div className="circle-border" aria-hidden="true" />
        <div
          ref={circleRef}
          className="circle-points"
          role="group"
          aria-label="Time periods"
        >
          {periods.map((p, i) => {
            const pos = getCirclePointPosition(i, angleStep, radius);
            const labelPos = getLabelPosition(i, angleStep, radius, 75);
            return (
              <CirclePoint
                key={`p-${i}`}
                index={i}
                period={p}
                position={pos}
                labelPosition={labelPos}
                isActive={i === activePeriod}
                counterAngle={counterAngle}
                onSelect={onPeriodSelect}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
