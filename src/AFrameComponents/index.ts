import { registerComponent } from "aframe";

import highlight from "./highlight";
import infoPanel from "./info-panel";

const initAframeComponents = () => {
    registerComponent("highlight", highlight);
    registerComponent("info-panel", infoPanel);
};

export default initAframeComponents;
