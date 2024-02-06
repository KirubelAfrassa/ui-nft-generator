import React from "react";
import { Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setReduxValue } from "../../../../redux/actions";
import { sendRequestImagesForMerge } from "@utils/nft/sendRequestImages";

function Imagemerger() {
    const dispatch = useDispatch();

    const layerList = useSelector((state) => state.layers);
    const tagList = useSelector((state) => state.tags);
    const imageList = useSelector((state) => state.images);
    const preview = useSelector((state) => state.preview);

    const mergeImages = async () => {
        const response = await sendRequestImagesForMerge(
            layerList,
            tagList,
            imageList
        );
    };
    return (
        <Button variant="veri-peri start-merge-ctn " onClick={mergeImages}>
            Start merge
        </Button>
    );
}

export default Imagemerger;
