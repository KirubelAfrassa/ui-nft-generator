/**
 * sortImagesByLayer
 * @param layerList layer list
 * @param imageList imagelist
 * @returns {*[]} sorted Image List
 */
export function sortImagerByLayer(layerList, imageList) {
    let newImageList = [];

    layerList.forEach((layer) => {
        newImageList.push.apply(
            newImageList,
            imageList.filter((image) => image.layerId === layer.id)
        );
    });

    return newImageList;
}
