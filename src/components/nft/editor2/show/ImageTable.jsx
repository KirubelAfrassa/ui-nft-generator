import _ from "lodash";
import React, { Component, useState, useEffect } from "react";
import { ListGroup, FormControl, Card, Button, Table } from "react-bootstrap";
import { FileUploader } from "react-drag-drop-files";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlusCircle,
    faTrashAlt,
    faIconCheck,
    faTimesCircle,
    faCheckCircle,
    faDice,
} from "@fortawesome/free-solid-svg-icons";
import { setReduxValue } from "../../../../redux/actions";
import { isBetween1and100 } from "@utils/nft/validation";
import Image from "next/image";
import productData from "../../../../data/products.json";
import ProductArea from "../show";

function ImageTable() {
    const tags = useSelector((state) => state.tags);
    const imageList = useSelector((state) => state.images);
    const focusLayerId = useSelector((state) => state.focusLayer);

    const dispatch = useDispatch();
    const [renderImagelist, setRenderImageList] = useState([]);

    useEffect(() => {
        const tmpImageList = imageList.filter(
            (image) => image.layerId === focusLayerId
        );

        if (JSON.stringify(tmpImageList) !== JSON.stringify(renderImagelist)) {
            setRenderImageList(Array.from(tmpImageList));
        }
    });

    return (
        <div>
            <ProductArea className={"mid-layer-card"} />
        </div>
    );
}

export default ImageTable;
