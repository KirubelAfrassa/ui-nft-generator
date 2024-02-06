/* eslint-disable react/prop-types */
import { getTrackBackground } from "react-range";

const SliderTrack = ({ props, children, min, max, values, direction }) => {
    const colors =
        direction && direction === "to right"
            ? [
                  "var(--color-primary)",
                  "var(--color-primary-alta)",
                  "var(--color-primary-alta)",
              ]
            : [
                  "var(--color-primary-alta)",
                  "var(--color-primary)",
                  "var(--color-primary-alta)",
              ];
    const background = getTrackBackground({
        values: [...values].sort((a, b) => a - b),
        direction: direction ? direction : "to right",
        min,
        max,
        colors,
    });

    return (
        <div
            className="slider-track-container"
            style={{ ...props.style, background }}
        >
            <div className="slider-track" ref={props.ref}>
                {children}
            </div>
        </div>
    );
};

export default SliderTrack;
