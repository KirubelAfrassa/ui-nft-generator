import { isEmpty } from "./stringUtility";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Layers from "@components/nft/editor2/layer/Layers";
import { findMaxGenerateCount } from "@service/nftDownloadZip";

const MAX_DOWNLOAD_SIZE = 100;

/**
 * check element number between 1-100
 * @param strValue value
 * @returns {boolean} result
 */
export const isBetween1and100 = (strValue) => {
    try {
        if (isNaN(strValue)) {
            return false;
        }

        let valueAsInt = parseInt(strValue);

        if (valueAsInt >= 0 && valueAsInt <= 100) {
            return true;
        }
    } catch (e) {}

    return false;
};

/**
 * is ready preview check
 * @param layerList layer list
 * @param tagList tag list
 * @param imageList image list
 * @returns {boolean} result true-false
 * @constructor
 */
export function isReadyPreviewWithToastify(layerList, tagList, imageList) {
    let isTrue = true;
    if (!layerList || layerList.length === 0) {
        isTrue = false;
        toast("Please add a layer");
    }

    if (
        layerList.filter((layer) => !isBetween1and100(layer.rarity)).length > 0
    ) {
        isTrue = false;
        toast("Please check rarities on layer. Must be between 0 and 100");
    }

    if (!imageList || (imageList && imageList.length < 3)) {
        isTrue = false;
        toast("Please add at least 3 images");
    }
    if (
        tagList &&
        tagList.filter((tag) => !isBetween1and100(tag.value)).length > 0
    ) {
        isTrue = false;
        toast("Please check rarities on tag. Must be between 0 and 100");
    }

    return isTrue;
}

/**
 * is ready for merging check
 * @param layerList layer list
 * @param tagList tag list
 * @returns {boolean} result
 * @constructor
 */
export function isReadyMergeWithToastify(layerList, tagList) {
    let isTrue = true;
    if (!layerList || layerList.length === 0) {
        isTrue = false;
        toast("Please add a layer");
    }

    if (
        layerList.filter((layer) => !isBetween1and100(layer.rarity)).length > 0
    ) {
        isTrue = false;
        toast("Please check rarities on layer. Must be between 0 and 100");
    }

    if (
        tagList &&
        tagList.filter((tag) => !isBetween1and100(tag.value)).length > 0
    ) {
        isTrue = false;
        toast("Please check rarities on tag. Must be between 0 and 100");
    }

    return isTrue;
}

/***
 * is ready check for download zip
 * @param layerList layer list
 * @param tagList tag list
 * @param imageList image list
 * @constructor
 */
export function isReadyDownloadZip(layerList, tagList, imageList) {
    if (!isReadyPreviewWithToastify(layerList, tagList, imageList)) {
        throw new Error("insufficient source for download zip");
    }
}
