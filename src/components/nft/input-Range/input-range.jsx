/* eslint-disable react/prop-types */
import { Range, Direction } from "react-range";
import PropTypes from "prop-types";
import SliderTrack from "@ui/input-range/slider-track";
import SliderThumb from "@ui/input-range/slider-thumb";

const STEP = 1;
const MIN = 0;
const MAX = 100;

const InputRange = ({ values, onChange }) => {
    const renderTrack = (props) => (
        <SliderTrack
            {...props}
            min={MIN}
            max={MAX}
            values={values}
            direction={Direction.Right}
        />
    );
    return (
        <div className="nft-input-range">
            <Range
                direction={Direction.Right}
                step={STEP}
                min={MIN}
                max={MAX}
                values={values}
                onChange={(vals) => onChange(vals)}
                renderTrack={renderTrack}
                renderThumb={SliderThumb}
            />
        </div>
    );
};

InputRange.propTypes = {
    values: PropTypes.arrayOf(PropTypes.number),
    onChange: PropTypes.func,
};

export default InputRange;
