import React, { Component, useState, useEffect } from "react";
import { ListGroup, FormControl, Card, Button } from "react-bootstrap";
import { FileUploader } from "react-drag-drop-files";
import { useSelector, useDispatch } from "react-redux";
import UploadImage from "./UploadImage";
import TagProcessor from "./TagProcessor";

function ImageInfoCard() {
    const focusLayerId = useSelector((state) => state.focusLayer);

    /*
  useEffect(() => {
    console.log(focusItemIndex, "- Has changed");
  }, [focusItemIndex]);

   */

    return (
        <div>
            <TagProcessor />
            <br />
            <UploadImage />
        </div>
    );
}

export default ImageInfoCard;
