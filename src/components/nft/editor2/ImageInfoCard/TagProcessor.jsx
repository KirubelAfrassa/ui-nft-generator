import React, { useState, Component, useEffect } from "react";
import {
    Button,
    FormControl,
    Card,
    InputGroup,
    FormLabel,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";
import { setReduxValue } from "../../../../redux/actions";
import {
    faPlusCircle,
    faTrashAlt,
    faDice,
} from "@fortawesome/free-solid-svg-icons";
import { isEmpty } from "@utils/nft/stringUtility";
import { isBetween1and100 } from "@utils/nft/validation";

function TagProcessor() {
    const tagList = useSelector((state) => state.tags);
    const imageList = useSelector((state) => state.images);

    const [addNewTagString, setAddNewTagString] = useState("");
    const [invalidTag, setInvalidTag] = useState(false);
    const [hoveredTag, setHoveredTag] = useState(null);
    const dispatch = useDispatch();

    const addNewTag = () => {
        if (!tagValidation()) {
            setInvalidTag(true);
            return;
        }

        setInvalidTag(false);
        let newTagList = tagList;

        let randomColor = Math.floor(Math.random() * 16777215).toString(16);

        const newTag = {
            text: addNewTagString.trim(),
            id: _.uniqueId("tag-"),
            value: 0,
            color: "#" + randomColor,
        };
        newTagList.push(newTag);
        dispatch(setReduxValue("tags", Array.from(newTagList)));

        //update
        imageList.map((item, index) => {
            item.tags.push({ tag_id: newTag.id, state: true, rarity: 100 });
        });

        dispatch(setReduxValue("images", Array.from(imageList)));
    };

    const removeTag = (tagItem) => {
        const newTagList = tagList.filter((elem) => elem.id !== tagItem.id);
        dispatch(setReduxValue("tags", Array.from(newTagList)));

        //remove selected tags from image

        imageList.map((imageItem, imageIndex) => {
            imageList[imageIndex].tags = imageItem.tags.filter(
                (elem) => elem.tag_id !== tagItem.id
            );
        });

        dispatch(setReduxValue("images", Array.from(imageList)));
    };

    const tagValidation = () => {
        //isEmpty
        if (isEmpty(addNewTagString)) {
            return false;
        }

        //if filter > 0, there is already item
        return (
            tagList.filter((item) => item.text === addNewTagString).length <= 0
        );
    };

    const setValue = (i, value) => {
        let newTagList = tagList;
        newTagList[i].value = value;
        dispatch(setReduxValue("tags", Array.from(newTagList)));
    };

    return (
        <div>
            <Card className={"nft-right-card"}>
                <Card.Header>
                    <div
                        className="alert  custom-card-header"
                        role="alert"
                        style={{ textAlign: "center" }}
                    >
                        <h3>
                            <strong>Tags</strong>
                        </h3>
                    </div>
                </Card.Header>
                <Card.Body>
                    <div>
                        {tagList.map((item, index) => (
                            <div
                                key={index}
                                className="card d-flex flex-column justify-content-between tag-item"
                                onMouseEnter={() => setHoveredTag(item.id)}
                                onMouseLeave={() => setHoveredTag(null)}
                            >
                                {item.id === hoveredTag ? (
                                    <div onClick={() => removeTag(item)}>
                                        <div className="close">
                                            <i className="feather feather-x-circle" />
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}

                                <div className="d-flex flex-column justify-content-center col-12">
                                    <div className="d-flex flex-row align-items-center justify-content-between ">
                                        <div className=" p-3"> {item.text}</div>
                                        <span>
                                            <div
                                                tabIndex="0"
                                                className="color-picker-class"
                                                style={{
                                                    background: item.color,
                                                }}
                                            />
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 d-flex flex-row align-items-center justify-content-between">
                                    <FontAwesomeIcon icon={faDice} />
                                    <span>&nbsp; Rarity % </span>
                                    <div className={"col-4"}>
                                        <input
                                            type="search"
                                            placeholder="100"
                                            aria-label="Search"
                                            title="Enter a rarity"
                                            className={
                                                isBetween1and100(item.value)
                                                    ? "tag-input rarity-tag "
                                                    : "tag-input rarity-tag invalid"
                                            }
                                            value={item.value}
                                            onChange={(e) =>
                                                setValue(index, e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <br />
                    <div className="col-12 tag-item flex-row align-items-center d-flex justify-content-between ">
                        <div className={"col-10"}>
                            <input
                                type="search"
                                placeholder="New Tag"
                                aria-label="Tag"
                                className={
                                    invalidTag
                                        ? "tag-input text-tag invalid"
                                        : "tag-input text-tag"
                                }
                                value={addNewTagString}
                                onChange={(e) =>
                                    setAddNewTagString(e.target.value)
                                }
                            />
                        </div>
                        <FontAwesomeIcon
                            icon={faPlusCircle}
                            onClick={addNewTag}
                        />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default TagProcessor;
