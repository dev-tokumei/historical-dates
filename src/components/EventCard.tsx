import React from "react";

export const EventCard: React.FC<{ year: number; description: string }> = ({
  year,
  description,
}) => {
  return (
    <div className="event-card">
      <div className="event-year">{year}</div>
      <div className="event-description">{description}</div>
    </div>
  );
};
