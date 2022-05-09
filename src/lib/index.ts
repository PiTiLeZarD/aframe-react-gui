export * from "./aframe";

export { default as UI } from "./UI";
export { default as Panel } from "./Panel";
export { default as FlexContainer } from "./FlexContainer";
export { default as Text } from "./Text";

export { default as PosterMenu } from "./PosterMenu";
export { default as Poster } from "./Poster";
export { default as InfoPanel } from "./InfoPanel";

import { modalAFComponent, inModalAFComponent } from "./ModalLayer";
import { highlightAFComponent } from "./Poster";
import { infoPanelAFComponent } from "./InfoPanel";

export const aframeComponents = {
    modal: modalAFComponent,
    inModal: inModalAFComponent,
    highlight: highlightAFComponent,
    infoPanel: infoPanelAFComponent,
};
