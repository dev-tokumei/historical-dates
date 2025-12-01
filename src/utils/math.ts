export interface CirclePointPosition { x: number; y: number; }


export const toRad = (deg: number) => (deg * Math.PI) / 180;


export const getCirclePointPosition = (
index: number,
angleStep: number,
radius: number,
): CirclePointPosition => {
const angle = toRad(index * angleStep - 60);
return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
};


export const getLabelPosition = (
index: number,
angleStep: number,
radius: number,
textOffsetDistance: number,
) => {
const currentAngle = index * angleStep - 60;
const base = getCirclePointPosition(index, angleStep, radius);
const textAngle = toRad(currentAngle + 45);
return { x: base.x + textOffsetDistance * Math.cos(textAngle), y: base.y + textOffsetDistance * Math.sin(textAngle) };
};