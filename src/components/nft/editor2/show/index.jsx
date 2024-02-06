import React, { useReducer, useRef, useEffect, useCallback } from "react";
import clsx from "clsx";
import Product from "./product";
import PropTypes from "prop-types";
import { SectionTitleType, ProductType } from "@utils/types";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

const ExploreProductArea = ({ className, space, data }) => {
    const imageList = useSelector((state) => state.images);
    const focusLayerId = useSelector((state) => state.focusLayer);

    return (
        <div>
            <div className={clsx("rn-product-area", className)}>
                <Card.Header>
                    <div
                        className="alert  custom-card-header"
                        role="alert"
                        style={{ textAlign: "center" }}
                    >
                        <h3>
                            <strong>Items</strong>
                        </h3>
                    </div>
                </Card.Header>

                <div className="container">
                    <div className="row g-4">
                        {imageList.filter(
                            (item) => item.layerId === focusLayerId
                        ).length > 0 ? (
                            <>
                                {imageList
                                    .filter(
                                        (item) => item.layerId === focusLayerId
                                    )
                                    .map((prod, index) => (
                                        <div key={index} className="col-4">
                                            <Product data={prod} />
                                        </div>
                                    ))}
                            </>
                        ) : (
                            <p>No item to show</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

ExploreProductArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        section_title: SectionTitleType,
        products: PropTypes.arrayOf(ProductType),
        placeBid: PropTypes.bool,
    }),
};

ExploreProductArea.defaultProps = {
    space: 1,
};

export default ExploreProductArea;
