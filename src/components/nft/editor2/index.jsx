import Layer from "./layer/Layers";
import Imagemerger from "./merger/Imagemerger";
import ImageTable from "./show/ImageTable";

import {
    InputGroup,
    FormControl,
    Row,
    Container,
    Col,
    Card,
} from "react-bootstrap";
import ImageInfoCard from "./ImageInfoCard/ImageInfoCard";
import React, { useState } from "react";
import "@utils/nft/stringUtility.js";

const Editor2 = () => (
    <Row>
        <Col className={"col-5"}>
            <Layer />
        </Col>
        <Col>
            <ImageTable />
        </Col>
        <Col className={"col-5"}>
            <ImageInfoCard />
        </Col>
    </Row>
);

export default Editor2;
