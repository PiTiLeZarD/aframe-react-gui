import React from "react";
import { withAssets } from "./aframe/AssetsRegistry";

export type PosterMenuProps = {};

export type PosterMenuComponent = React.FunctionComponent<React.PropsWithChildren<PosterMenuProps>>;

const PosterMenu: PosterMenuComponent = ({ children }): JSX.Element =>
    React.createElement("a-entity", { id: "menu", highlight: true }, children);

export default withAssets([
    [
        "frame",
        "a-mixin",
        {
            geometry: "primitive: plane; width: 0.5783552; height: 0.8192",
            material: "color: white; shader: flat",
            animation__scale: "property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter",
            animation__scale_reverse: "property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave",
        },
    ],
])(PosterMenu);
