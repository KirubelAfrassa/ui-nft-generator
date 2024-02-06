import React, { useEffect, useState } from "react";
import _ from "lodash";
import {
    DragDropContext,
    Draggable,
    Droppable,
    resetServerContext,
} from "react-beautiful-dnd";
import { Card, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
    faArrowDown,
    faDice,
    faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setReduxValue } from "../../../../redux/actions";
import { isEmpty } from "@utils/nft/stringUtility";
import { isBetween1and100 } from "@utils/nft/validation";
import Imagemerger from "../merger/Imagemerger";
import PreviewMerger from "../merger/PreviewMerger";
import DownloadableZipMerger from "../merger/DownloadableZipGenerateMerger";
import { sortImagerByLayer } from "@utils/nft/sortImage";
function Layers() {
    const dispatch = useDispatch();
    const layerList = useSelector((state) => state.layers);
    const imageList = useSelector((state) => state.images);

    const getItems = (count) => {
        resetServerContext();

        return Array.from({ length: count }, (v, k) => k).map((k) => ({
            id: `item-${k}`,
            content: _.uniqueId("item-"),
            rarity: 100,
        }));
    };

    const [addNewLayerString, setAddNewLayerString] = useState("New Layer");
    const [addNewLayerRate, setAddNewLayerRate] = useState(100);
    const [isBrowser, setIsBrowser] = useState(false);
    const focusLayerId = useSelector((state) => state.focusLayer);
    const [invalidLayer, setInvalidLayer] = useState(false);
    const [hoveredLayer, setHoveredLayer] = useState(null);

    useEffect(() => {
        resetServerContext();
        const defaultItems = getItems(5);
        dispatch(setReduxValue("layers", Array.from(defaultItems)));
        setIsBrowser(process.browser);

        //select first item default
        updateSelectedfocusIndex(defaultItems[0]);
    }, []);

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const removeLayer = (layerItem) => {
        const newLayerList = layerList.filter(
            (elem) => elem.id !== layerItem.id
        );
        updateLayerAndSortImage(newLayerList);
    };

    const layerValidation = () => {
        //isEmpty
        if (isEmpty(addNewLayerString)) {
            return false;
        }

        //if filter > 0, there is already item
        return (
            layerList.filter((item) => item.content === addNewLayerString)
                .length <= 0
        );
    };

    const setValue = (i, value) => {
        layerList[i].rarity = value;
        updateLayerAndSortImage(layerList);
    };

    const addNewLayer = () => {
        if (!layerValidation()) {
            setInvalidLayer(true);
            return;
        }

        setInvalidLayer(false);
        const newLayerList = layerList;
        newLayerList.push({
            content: addNewLayerString,
            id: _.uniqueId("item-"),
            rarity: addNewLayerRate,
        });

        updateLayerAndSortImage(newLayerList);
    };

    const onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const reorderedItems = reorder(
            layerList,
            result.source.index,
            result.destination.index
        );
        updateLayerAndSortImage(reorderedItems);
    };

    const updateSelectedfocusIndex = (item) => {
        dispatch(setReduxValue("selectedFocus", item.id));
    };

    const updateLayerAndSortImage = (newLayerList) => {
        dispatch(setReduxValue("layers", Array.from(newLayerList)));
        let newImageList = sortImagerByLayer(layerList, imageList);
        dispatch(setReduxValue("images", Array.from(newImageList)));
    };
    return (
        <div>
            <Card className={"nft-layer-card"}>
                <Card.Header>
                    <div
                        className="alert  custom-card-header"
                        role="alert"
                        style={{ textAlign: "center" }}
                    >
                        <h3>
                            <strong>Layers</strong>
                        </h3>
                    </div>
                </Card.Header>
                <Card.Body>
                    <div>
                        {isBrowser ? (
                            <DragDropContext onDragEnd={onDragEnd}>
                                <Droppable droppableId={"droppable"}>
                                    {(provided, snapshot) => (
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            className="d-flex flex-column align-items-center"
                                        >
                                            {layerList.map((item, idx) => (
                                                <div
                                                    key={item.id}
                                                    className="col-12 d-flex flex-column align-items-center"
                                                >
                                                    <Draggable
                                                        key={item.id}
                                                        draggableId={item.id}
                                                        index={idx}
                                                    >
                                                        {(
                                                            provided,
                                                            snapshot
                                                        ) => (
                                                            <div
                                                                className={`col-12 layer-item flex-column align-items-center d-flex justify-content-between ${
                                                                    item.id ===
                                                                    focusLayerId
                                                                        ? "layer-item-active "
                                                                        : ""
                                                                } `}
                                                                role="alert"
                                                                onClick={() =>
                                                                    updateSelectedfocusIndex(
                                                                        item
                                                                    )
                                                                }
                                                                ref={
                                                                    provided.innerRef
                                                                }
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                onMouseEnter={() =>
                                                                    setHoveredLayer(
                                                                        item.id
                                                                    )
                                                                }
                                                                onMouseLeave={() =>
                                                                    setHoveredLayer(
                                                                        null
                                                                    )
                                                                }
                                                            >
                                                                {item.id ===
                                                                hoveredLayer ? (
                                                                    <div
                                                                        onClick={() =>
                                                                            removeLayer(
                                                                                item
                                                                            )
                                                                        }
                                                                    >
                                                                        <div className="close">
                                                                            <i className="feather feather-x-circle" />
                                                                        </div>
                                                                    </div>
                                                                ) : (
                                                                    ""
                                                                )}

                                                                <div className=" col-12">
                                                                    {
                                                                        item.content
                                                                    }
                                                                </div>

                                                                <div className="col-12 d-flex flex-row align-items-center justify-content-between">
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faDice
                                                                        }
                                                                    />
                                                                    <span>
                                                                        Rarity %
                                                                    </span>

                                                                    <div className="col-4">
                                                                        <input
                                                                            type="search"
                                                                            placeholder="100"
                                                                            aria-label="Search"
                                                                            title="Enter a rarity"
                                                                            className={
                                                                                isBetween1and100(
                                                                                    item.rarity
                                                                                )
                                                                                    ? "layer-input text-layer "
                                                                                    : "layer-input text-layer invalid"
                                                                            }
                                                                            value={
                                                                                item.rarity
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                setValue(
                                                                                    idx,
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                )
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                    <FontAwesomeIcon
                                                        icon={faArrowDown}
                                                        width={20}
                                                        height={20}
                                                    />
                                                </div>
                                            ))}

                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </DragDropContext>
                        ) : null}
                    </div>
                </Card.Body>

                <Card.Footer>
                    <div className="col-12 layer-item flex-column align-items-center d-flex justify-content-between  ">
                        <input
                            type="search"
                            placeholder="Search Here"
                            aria-label="Search"
                            className={
                                invalidLayer
                                    ? "layer-input text-layer invalid"
                                    : "layer-input text-layer"
                            }
                            value={addNewLayerString}
                            onChange={(e) =>
                                setAddNewLayerString(e.target.value)
                            }
                        />

                        <div className="col-12 d-flex flex-row align-items-center justify-content-between">
                            <FontAwesomeIcon icon={faDice} />
                            <span>Rarity %</span>

                            <div>
                                <input
                                    type="search"
                                    placeholder="100"
                                    aria-label="Search"
                                    title="Enter a rarity"
                                    className={
                                        isBetween1and100(addNewLayerRate)
                                            ? "layer-input rarity-layer "
                                            : "layer-input rarity-layer invalid"
                                    }
                                    value={addNewLayerRate}
                                    onChange={(e) =>
                                        setAddNewLayerRate(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <button
                            className="btn btn-large btn-primary-alta w-100 d-block"
                            type="button"
                            onClick={addNewLayer}
                        >
                            <span>
                                <span>ADD LAYER</span>
                            </span>
                        </button>
                    </div>

                    <div className=" mb-3  d-flex flex-row justify-content-center">
                        <PreviewMerger />
                        <Imagemerger />
                        <DownloadableZipMerger />
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default Layers;
