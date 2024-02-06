import { cartesian } from "@utils/maths/cartesian";
import mergeImages from "merge-images";
import JSZip, from "jszip";
import FileSaver from "file-saver";


/**
 * find max generate count
 * @param layerList layer list
 * @param tagList tag list
 * @param imageList image list
 * @constructor
 */
export function findMaxGenerateCount(layerList, tagList, imageList) {
    //choose tag
    let chooseTag = null;
    let maxGenerateCount = 0;

    if (tagList && tagList.length > 0) {
        let randomTagValue = Math.floor(Math.random() * tagList.length);
        chooseTag = tagList[randomTagValue].id;
    }

    if (chooseTag) {
        //find max value with chosen tag
        //1)match images which as every layer
        //2)check images has same tag with rarity >0
        //3)check matched images list
        //4)if not exists, add to match list
        //5)if exists, eliminate (skip) it

        console.log("skip");
    } else {
        layerList
            .filter((layer) => layer.rarity > 0)
            .forEach((layer, layerIndex) => {
                let imageCount = imageList.filter(
                    (image) => image.layerId === layer.id && image.soloRate > 0
                ).length;

                if (imageCount > 0) {
                    console.log(imageCount);
                    maxGenerateCount === 0
                        ? (maxGenerateCount = imageCount)
                        : (maxGenerateCount *= imageCount);
                }
            });
    }

    return maxGenerateCount;
}

/***
 * prepare downloable zip
 * @param layerList layer list
 * @param tagList tag list
 * @param imageList image list
 * @param count generate nft count
 */
export function prepareDownloadableZip(layerList, tagList, imageList, count) {
    let imageLayerList = [];
    let mergedImageIdsList = [];

    layerList
        .filter((layer) => layer.rarity > 0)
        .forEach((layer, layerIndex) => {
            let imageInSelectedLayerList = imageList.filter(
                (image) => image.layerId === layer.id && image.soloRate > 0
            );
            if (imageInSelectedLayerList.length > 0) {
                imageLayerList.push({
                    layerId: layer.id,
                    images: imageInSelectedLayerList.map((image) => image.id),
                });
            }
        });

    mergedImageIdsList = cartesian(...imageLayerList.map((a) => a.images));

    createZipByMergedImageList(
        layerList,
        tagList,
        imageList,
        count,
        mergedImageIdsList
    );
}

/***
 * create downloadable zip
 * @param layerList layer list
 * @param tagList tag list
 * @param imageList image list
 * @param count counter
 * @param mergedImageIdsList downloadble zip
 * @returns {Promise<void>}
 */
async function createZipByMergedImageList(
    layerList,
    tagList,
    imageList,
    count,
    mergedImageIdsList
) {
    let zip = new JSZip();
    let mergingImageList = [];
    let counter = 0;
    let mergedImageCounter = 0;

    let img = zip.folder("assets");

    while (counter < count) {
        let selectedItem = mergedImageIdsList[counter];

        let innerMergingImageList = [];
        selectedItem.forEach((img) => {
            innerMergingImageList.push(
                imageList.filter((tmpImg) => tmpImg.id === img)[0]
            );
        });
        mergingImageList.push(innerMergingImageList);

        counter++;
    }

    for (const mergingImage of mergingImageList) {
        mergedImageCounter++;

        let resultJson = {
            name: "",
            description: "",
            image: "",
            attributes: [],
        };

        mergingImage.forEach((unitImage) => {
            let layer = layerList.filter(
                (layer) => unitImage.layerId === layer.id
            )[0];

            let layerContent = layer.content;

            resultJson.attributes.push({
                trait_type: layerContent,
                value: unitImage.file.name,
            });
        });

        let imageSource = "as"
        await mergeImages(
            mergingImage.map((item) => URL.createObjectURL(item.file))
        ).then(b64 => imageSource=b64);

        resultJson.name = mergedImageCounter.toString();

        const base64Response = await fetch(imageSource);
        const blob = await base64Response.blob();

        //add to zip
        img.file(
            mergedImageCounter.toString() + ".json",
            JSON.stringify(resultJson)
        );

        //add image
        img.file(mergedImageCounter.toString() + ".png", blob,{base64:true} );
    }

    zip.generateAsync({ type: "blob" }).then(function (content) {
        FileSaver.saveAs(content, "example.zip");
    });
}
