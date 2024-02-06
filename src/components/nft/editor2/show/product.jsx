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
    const tags = useSelector((state) => state.tags);
    const imageList = useSelector((state) => state.images);
    const focusLayerId = useSelector((state) => state.focusLayer);

    const dispatch = useDispatch();

    const setRarity = (image, tagIndex, value) => {
        const newImage = image;

        newImage.tags[tagIndex].rarity = value[0];

        const tmpImageList = imageList;

        tmpImageList[tmpImageList.findIndex((el) => el.id === image.id)].tags =
            newImage.tags;

        dispatch(setReduxValue("images", Array.from(tmpImageList)));
    };

    const setSoloRarity = (image, value) => {
        const newImage = image;

        newImage.soloRate = value[0];

        const tmpImageList = imageList;

        tmpImageList[
            tmpImageList.findIndex((el) => el.id === image.id)
        ].soloRate = newImage.soloRate;

        dispatch(setReduxValue("images", Array.from(tmpImageList)));
    };

    return (
        <>
            <div
                className={clsx("product-style-one", !overlay && "no-overlay")}
            >
                <div className="card-thumbnail">
                    <Image
                        src={URL.createObjectURL(data.file)}
                        width={533}
                        height={533}
                    />

                    <div className={" "}>
                        <span className="latest-bid  ">Rarity</span>

                        <div>
                            {data.tags.length > 0 ? (
                                data.tags.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={"d-flex align-items-center"}
                                    >
                                        <div className={"col-2"}>
                                            <span>
                                                <div
                                                    tabIndex="0"
                                                    className="color-picker-class"
                                                    style={{
                                                        background: tags.filter(
                                                            (tag) =>
                                                                tag.id ===
                                                                item.tag_id
                                                        )[0].color,
                                                    }}
                                                />
                                            </span>
                                        </div>

                                        <div className={"col-6"}>
                                            <InputRange
                                                values={[data.tags[idx].rarity]}
                                                onChange={(e) =>
                                                    setRarity(data, idx, e)
                                                }
                                            />
                                        </div>
                                        <div className={" mx-4 col-2"}>
                                            <p>{[data.tags[idx].rarity]}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className={"d-flex align-items-center"}>
                                    <div className={"col-10"}>
                                        <InputRange
                                            values={[data.soloRate]}
                                            onChange={(e) =>
                                                setSoloRarity(data, e)
                                            }
                                        />
                                    </div>

                                    <div className={" mx-4 col-2"}>
                                        <p>{data.soloRate}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Product.defaultProps = {
    overlay: false,
};

export default Product;
