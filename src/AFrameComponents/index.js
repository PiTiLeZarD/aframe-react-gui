import highlight from "./highlight";
import infoPanel from "./info-panel";
import infoMessage from "./info-message";

export default initAframeComponents = (AFRAME) => {
    AFRAME.registerComponent("highlight", highlight);
    AFRAME.registerComponent("info-panel", infoPanel);
    AFRAME.registerComponent("info-message", infoMessage);
};
