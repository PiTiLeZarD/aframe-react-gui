import { registerComponent } from "aframe";

import highlight from "./highlight";
import infoPanel from "./info-panel";
import modal from "./modal";
import inModal from "./inModal";

const initAframeComponents = () => {
    registerComponent("highlight", highlight);
    registerComponent("info-panel", infoPanel);
    registerComponent("modal", modal);
    registerComponent("inModal", inModal);
};

export default initAframeComponents;
