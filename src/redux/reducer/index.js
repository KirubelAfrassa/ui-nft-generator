import focusLayer from "./focusLayer";
import loggedReducer from "./isLogged";
import images from "./images";
import tags from "./tags";
import layers from "./layers";
import preview from "./preview";
import generate from "./generate";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    focusLayer: focusLayer,
    isLogged: loggedReducer,
    images: images,
    tags: tags,
    layers: layers,
    preview: preview,
    generate: generate,
});

export default allReducers;
