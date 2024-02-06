import React, { useState } from "react";
import { Button, FormControl, OverlayTrigger, Popover } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { findRandomImagesForPreview } from "@utils/nft/randomPreview";
import { setReduxValue } from "../../../../redux/actions";
import { isEmpty } from "@utils/nft/stringUtility";
import JSZip from "jszip";
import FileSaver from "file-saver";
import { isReadyDownloadZip } from "@utils/nft/validation";
import {
    findMaxGenerateCount,
    prepareDownloadableZip,
} from "@service/nftDownloadZip";

function DownloadableZipMerger() {
    const dispatch = useDispatch();

    const layerList = useSelector((state) => state.layers);
    const tagList = useSelector((state) => state.tags);
    const imageList = useSelector((state) => state.images);
    const preview = useSelector((state) => state.preview);

    const downloadZip = async (layerList, tagList, imageList) => {
        try {
            isReadyDownloadZip(layerList, tagList, imageList);

            let maxGenerateCount = findMaxGenerateCount(
                layerList,
                tagList,
                imageList
            );

            prepareDownloadableZip(
                layerList,
                tagList,
                imageList,
                maxGenerateCount
            );
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <Button
                variant="veri-peri start-merge-ctn "
                onClick={() => downloadZip(layerList, tagList, imageList)}
            >
                Download
            </Button>
        </div>
    );
}

export default DownloadableZipMerger;
