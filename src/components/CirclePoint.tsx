import React from "react";
import { CirclePointPosition } from "../utils/math";

interface Props {
  index: number;
  period: any;
  position: CirclePointPosition;
  labelPosition: CirclePointPosition;
  isActive: boolean;
  counterAngle: number;
  onSelect: (i: number) => void;
}

export const CirclePoint: React.FC<Props> = ({
  index,
  period,
  position,
  labelPosition,
  isActive,
  counterAngle,
  onSelect,
}) => {
  return (
    <div className="circle-point-wrapper">
      <div
        className={`circle-point ${isActive ? "active" : ""}`}
        onClick={() => onSelect(index)}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") && onSelect(index)
        }
        role="button"
        tabIndex={0}
        style={{
          left: `calc(50% + ${position.x}px)`,
          top: `calc(50% + ${position.y}px)`,
        }}
        aria-pressed={isActive}
        aria-label={`Period ${index + 1}: ${period.category}`}
      >
        <span
          className="circle-point-number"
          style={{ transform: `rotate(${counterAngle}deg)` }}
        >
          {index + 1}
        </span>
      </div>

      {isActive && (
        <div
          className="circle-point-label"
          style={{
            left: `calc(50% + ${labelPosition.x}px)`,
            top: `calc(50% + ${labelPosition.y}px)`,
            transform: `translate(-50%, -50%) rotate(${counterAngle}deg)`,
          }}
          aria-live="polite"
        >
          {period.category}
        </div>
      )}
    </div>
  );
};
