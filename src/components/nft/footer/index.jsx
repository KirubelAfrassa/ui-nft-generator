import React from "react";

const Footer = ({ onClickIncrement, onClickDecrement, sliderIndex }) => {
    return (
        <div className={""}>
            <div className="d-flex col-12 justify-content-between">
                {sliderIndex > 0 ? (
                    <button
                        onClick={onClickDecrement}
                        className="btn btn-primary-alta btn-outline-secondary"
                        type="button"
                    >
                        Back
                    </button>
                ) : (
                    <label>&nbsp; </label>
                )}
                {sliderIndex < 3 && (
                    <button
                        onClick={onClickIncrement}
                        className="btn btn-primary-alta btn-outline-secondary"
                        type="button"
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default Footer;
