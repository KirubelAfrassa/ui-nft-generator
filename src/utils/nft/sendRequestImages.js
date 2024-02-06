import { isEmpty } from "./stringUtility";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { isReadyMergeWithToastify } from "./validation";
import FormData from "form-data";
import axios from "axios";

/**
 * export default func.
 * find rando Images for preview
 * @param layerList layer list
 * @param tagList tag list
 * @param imageList image list
 */
export async function sendRequestImagesForMerge(layerList, tagList, imageList) {
    //is validated unsuccess, render toastr with fail text and exit
    if (!isReadyMergeWithToastify(layerList, tagList)) {
        return "";
    }

    let data = new FormData();

    //add image List
    imageList.forEach((image) => {
        data.append("file", image.file);
    });

    let responseData = {};
    responseData.tagExist = tagList && tagList.length > 0;
    responseData.mergeSize = 100;

    let asset = [];
    layerList.forEach((layer) => {
        let innerAsset = {};
        innerAsset = {
            id: layer.id,
            layerName: layer.content,
            rarity: layer.rarity,
            images: [],
        };

        imageList
            .filter((image) => image.layerId === layer.id)
            .forEach((image) => {
                let tags = [];
                if (image && image.tags && image.tags.length >= 0) {
                    image.tags.forEach((tag) => {
                        tags.push({
                            id: tag.tag_id,
                            state: tag.state,
                            rarity: tag.rarity,
                        });
                    });
                }
                innerAsset.images.push({
                    id: image.id,
                    type: "image/png",
                    rarity: image.soloRate,
                    tags: tags,
                });
            });
        asset.push(innerAsset);
    });

    responseData.asset = asset;
    responseData.tags = tagList;

    data.append("data", JSON.stringify(responseData));
    console.log(responseData);
    try {
        let response = await axios.post(
            "http://localhost:8000/api/merge",
            data,
            {
                headers: {
                    accept: "application/json",
                    "Accept-Language": "en-US,en;q=0.8",
                    "Content-Type": `multipart/form-data;`,
                },
                responseType: "blob",
            }
        );

        return response.data;
    } catch (err) {
        console.error(err);
        return "";
    }
}
