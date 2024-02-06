import React, { useState } from "react";
import { Button, FormControl, OverlayTrigger, Popover } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { findRandomImagesForPreview } from "@utils/nft/randomPreview";
import { setReduxValue } from "../../../../redux/actions";
import { isEmpty } from "@utils/nft/stringUtility";

function ImageMerger() {
    const dispatch = useDispatch();

    const layerList = useSelector((state) => state.layers);
    const tagList = useSelector((state) => state.tags);
    const imageList = useSelector((state) => state.images);
    const preview = useSelector((state) => state.preview);
    const [showPreviewPopOver, setShowPreviewPopOver] = useState(false);

    const showPreview = async (layerList, tagList, imageList) => {
        const response = await findRandomImagesForPreview(
            layerList,
            tagList,
            imageList
        );
        dispatch(setReduxValue("preview", response));
        setShowPreviewPopOver(true);
    };

    return (
        <div>
            {!isEmpty(preview) ? (
                <OverlayTrigger
                    trigger="click"
                    key="top"
                    placement="top"
                    rootCloseEvent="click"
                    show={showPreviewPopOver}
                    overlay={
                        <Popover id="popover-positioned-top">
                            <Popover.Header as="h3">
                                <div
                                    onClick={() =>
                                        setShowPreviewPopOver(
                                            !showPreviewPopOver
                                        )
                                    }
                                >
                                    <div className="close">
                                        <i className="feather feather-x-circle" />
                                    </div>
                                </div>
                            </Popover.Header>
                            <Popover.Body>
                                <picture>
                                    <img
                                        alt=""
                                        src={preview}
                                        width="200"
                                        height="200"
                                    />
                                </picture>
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <Button
                        variant="veri-peri start-merge-ctn "
                        onClick={() =>
                            showPreview(layerList, tagList, imageList)
                        }
                    >
                        Preview
                    </Button>
                </OverlayTrigger>
            ) : (
                <Button
                    variant="veri-peri start-merge-ctn "
                    onClick={() => showPreview(layerList, tagList, imageList)}
                >
                    Preview
                </Button>
            )}
        </div>
    );
}

export default ImageMerger;
