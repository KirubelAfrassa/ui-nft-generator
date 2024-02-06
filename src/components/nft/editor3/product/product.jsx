import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import clsx from "clsx";
import Anchor from "../../../ui/anchor";
import CountdownTimer from "../../../ui/countdown/layout-01";
import ClientAvatar from "../../../ui/client-avatar";
import ShareDropdown from "../../../share-dropdown";
import ProductBid from "../../../product-bid";
import Button from "../../../ui/button";
import PlaceBidModal from "../../../modals/placebid-modal";
import { useDispatch, useSelector } from "react-redux";
import InputRange from "../../input-Range/input-range";
import { forwardRef } from "react";
import { setReduxValue } from "../../../../redux/actions";

const Product = ({ overlay, data }) => {
    const dispatch = useDispatch();

    return (
        <>
            <div
                className={clsx("product-style-one", !overlay && "no-overlay")}
            >
                <div className="card-thumbnail">
                    <Image src={data.source} width={533} height={533} />
                </div>
            </div>
        </>
    );
};

Product.defaultProps = {
    overlay: false,
};

export default Product;
