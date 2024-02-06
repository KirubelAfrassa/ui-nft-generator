import _, { result } from "lodash";
import React, { Component, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useSelector, useDispatch } from "react-redux";
import { setReduxValue } from "../../../../redux/actions";
import { sortImagerByLayer } from "@utils/nft/sortImage";

const fileTypes = ["JPG", "PNG", "GIF"];

function UploadImage() {
    const imageList = useSelector((state) => state.images);
    const focusLayerId = useSelector((state) => state.focusLayer);
    const tagList = useSelector((state) => state.tags);
    const layerList = useSelector((state) => state.layers);
    const dispatch = useDispatch();

    const addImage = (file) => {
        let newImageList = imageList;

        newImageList.push({
            file: file,
            id: _.uniqueId("image-"),
            layerId: focusLayerId,
            tags: getAllTrueTagsList(),
            soloRate: 100,
        });

        newImageList = sortImagerByLayer(layerList, newImageList);
        dispatch(setReduxValue("images", Array.from(newImageList)));
    };

    const getAllTrueTagsList = () => {
        result = [];
        tagList.map((element, i) => {
            result.push({ tag_id: element.id, state: true, rarity: 100 });
        });

        return result;
    };
    return (
        <div className="nft-upload-file-card">
            <FileUploader
                handleChange={addImage}
                name="file"
                types={fileTypes}
            />
        </div>
    );
}

export default UploadImage;
