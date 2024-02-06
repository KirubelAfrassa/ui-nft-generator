import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import mergeImages from "merge-images";
import { isReadyPreviewWithToastify } from "@utils/nft/validation";
import { setReduxValue } from "../../../../redux/actions";
import { findRandomImagesForPreview } from "@utils/nft/randomPreview";
import ProductArea from "../product/productArea";
import productData from "../../../../data/products.json";

const Generator = () => {
    const tagList = useSelector((state) => state.tags);
    const imageList = useSelector((state) => state.images);
    const focusLayerId = useSelector((state) => state.focusLayer);
    const layerList = useSelector((state) => state.layers);
    const generatedList = useSelector((state) => state.generate);
    const preview = useSelector((state) => state.preview);

    const dispatch = useDispatch();
    const generate = async () => {
        let count = 0;
        let generateSize = 20;

        while (count < generateSize) {
            count++;

            const response = await findRandomImagesForPreview(
                layerList,
                tagList,
                imageList
            );

            let newGenerate = generatedList;

            newGenerate.push({ source: response });

            dispatch(setReduxValue("generate", Array.from(newGenerate)));
        }
    };

    return (
        <div>
            <ProductArea className={"mid-layer-card"} />

            <button onClick={generate}>Generate</button>
        </div>
    );
};

export default Generator;
