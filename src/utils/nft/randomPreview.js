import { isReadyPreviewWithToastify } from "./validation";
import FormData from "form-data";
import axios from "axios";
import mergeImages from "merge-images";

/**
 * export default func.
 * find rando Images for preview
 * @param layerList layer list
 * @param tagList tag list
 * @param imageList image list
 */
export function findRandomImagesForPreview(layerList, tagList, imageList) {
    //is validated unsuccess, render toastr with fail text and exit
    if (!isReadyPreviewWithToastify(layerList, tagList, imageList)) {
        return "";
    }

    //choose tag
    let chooseTag = null;

    if (tagList && tagList.length > 0) {
        let randomTagValue = Math.floor(Math.random() * tagList.length);
        chooseTag = tagList[randomTagValue].id;
    }

    let randomArray = [];

    layerList.forEach((layer) => {
        if (chooseTag) {
            let suitableImageList = imageList.filter(
                (image) =>
                    image.layerId === layer.id &&
                    image.tags.filter(
                        (tag) => tag.tag_id === chooseTag && tag.state
                    ).length > 0
            );
            let randomImage = Math.floor(
                Math.random() * suitableImageList.length
            );
            if (suitableImageList[randomImage]) {
                randomArray.push(suitableImageList[randomImage]);
            }
        } else {
            let suitableImageList = imageList.filter(
                (image) => image.layerId === layer.id
            );
            let randomImage = Math.floor(
                Math.random() * suitableImageList.length
            );

            if (suitableImageList[randomImage]) {
                randomArray.push(suitableImageList[randomImage]);
            }
        }
    });

    let randomLayers = [];
    randomArray.forEach((item) => {
        randomLayers.push(URL.createObjectURL(item.file));
    });

    return mergeImages(randomLayers);
}

/**
 * send request with randomied images and get response
 * @param randomArray randomized array
 */
async function sendRandomImagesForPreview(randomArray) {
    let data = new FormData();

    randomArray.forEach((image) => {
        data.append("file", image.file);
    });

    //8000 django default port
    try {
        let response = await axios.post(
            "http://localhost:8000/api/preview",
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
