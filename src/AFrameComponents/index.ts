import { registerComponent } from "aframe";

import highlight from "./highlight";
import infoPanel from "./info-panel";
import infoMessage from "./info-message";

const initAframeComponents = () => {
    registerComponent("highlight", highlight);
    registerComponent("info-panel", infoPanel);
    registerComponent("info-message", infoMessage);
};

export default initAframeComponents;
